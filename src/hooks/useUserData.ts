import React, {useState, useEffect, useContext} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { rootState } from '../store/store';
import { IUserData, meRequestAsync, meRequestError, meRequestSuccess } from '../store/me/actions';

export function useUserData() {
    const data = useSelector<rootState, IUserData>(state => state.me.data)
    const loading = useSelector<rootState, boolean>(state => state.me.loading)
    const token = useSelector<rootState, string>(state => state.token)
    const dispatch = useDispatch()
    useEffect(() => {
      if(!token) return
      dispatch(meRequestAsync() as any);
    }, [token])

    return {
      data,
      loading
    }
}