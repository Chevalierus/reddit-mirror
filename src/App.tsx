import React, { useEffect, useState } from "react"
import './main.global.css' 
import { hot } from "react-hot-loader/root"
import { Layout } from "./shared/Layout"
import { Header } from "./shared/Header"
import { Content } from "./shared/Content"
import { CardsList } from "./shared/CardsList"
import { PostContextProvider } from "./shared/context/postContext"
import { CommentDataContextProvider } from "./shared/context/commentDataContext"
import { applyMiddleware, legacy_createStore, Middleware } from "@reduxjs/toolkit"
import { Provider, useDispatch } from 'react-redux'
import { composeWithDevTools } from "redux-devtools-extension"
import { rootReducer, setToken, tokenAsync } from "./store/store"
import thunk from "redux-thunk"

const store = legacy_createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk)
))


function AppComponent() {
    store.dispatch(tokenAsync() as any)
    return (
                <Layout>
                    <Header/>
                    <Content>
                        <CommentDataContextProvider>
                        <PostContextProvider>
                        <CardsList/>
                        </PostContextProvider> 
                        </CommentDataContextProvider>
                    </Content>
                </Layout>
    )
};

export const App = hot(() => 
<Provider store={store}>
    <AppComponent/>
</Provider>
)