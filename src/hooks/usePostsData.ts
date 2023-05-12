import React, {useState, useEffect, useContext} from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux';
import { rootState } from '../store/store';

interface IPostsData {
    id: string
    title: string
    body: string
    createdAt: number
    comments?: number
    score?: number
    author: string
    preview?: string
    avatar?: string
}

export function usePostsData () {
    const [array, setArray] = useState<Array<IPostsData>>([])
    const token = useSelector<rootState, string>(state => state.token)

    useEffect(() => {
        axios.get('https://oauth.reddit.com/best.json?sr_detail=true', {
            headers: {Authorization: `bearer ${token}`}
        }) 
        .then
        ((resp) => {
            const postData = resp.data.data.children
            type typesData = typeof postData
            const postsArray = postData.map(({data}:typesData) => {
                const object: IPostsData = {
                    id: data.id,
                    title: data.title,
                    body: data.selftext,
                    createdAt: data.createdAt,
                    comments: data.num_comments,
                    score: data.score,
                    author: data.author,
                    preview: data.thumbnail !== ('self' || 'default') ? data.thumbnail : "https://cdn.frankerfacez.com/emoticon/185868/4",
                    avatar: data.sr_detail.header_img !== (null || "") ? data.sr_detail.header_img : "https://cdn.frankerfacez.com/emoticon/185868/4"
                }
                return object
            })
            setArray(postsArray)
        })
        .catch(console.log)
    }, [token])
    return [array]
}