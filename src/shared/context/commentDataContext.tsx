import React, { useState } from "react"
import { useComments } from "../../hooks/useCommentData"
import { IPostsDataContext } from "./postContext"

export interface ICommentDataContext {
    id?: string,
    author?: string,
    text?: string
    replies?: any
}

export const commentDataContext = React.createContext<Array<ICommentDataContext>>([])

export function CommentDataContextProvider ({children} : {children: React.ReactNode}, id: string | undefined) {
    const [data] = useComments(id)

    return (
        <commentDataContext.Provider value={data}>
            {children}
        </commentDataContext.Provider>
)}