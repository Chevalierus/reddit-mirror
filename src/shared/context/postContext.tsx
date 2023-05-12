import React from "react"
import { usePostsData } from "../../hooks/usePostsData"

export interface IPostsDataContext {
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

export const postContext = React.createContext<Array<IPostsDataContext>>([])

export function PostContextProvider({children} : {children: React.ReactNode}) {
    const [data] = usePostsData()

    return (
        <postContext.Provider value={data}>
            {children}
        </postContext.Provider>
    )
}