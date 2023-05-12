import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { rootState } from '../store/store'

interface ICommentData {
    id?: string
    author?: string
    text?: string
    replies?: any
}

export function useComments(id: string | undefined) {
    const [array, setArray] = useState<Array<ICommentData>>([])
    const token = useSelector<rootState, string>(state => state.token)
    console.log(id)
    useEffect(() => {
        axios.get(`https://oauth.reddit.com/comments/${id}`, {
            headers: { Authorization: `bearer ${token}` }
        })
        .then((resp) => {
                const commentData = resp.data[1].data.children
                type typesData = typeof commentData
                const commentArray = commentData.map(({data}: typesData) => {
                    const object: ICommentData = {
                        id: data.id,
                        author: data.author,
                        text: data.body,
                        replies: data.replies
                    }
                    return object
                })
                setArray(commentArray)
            }
        )
    }, [id, token])
    return [array]
}
