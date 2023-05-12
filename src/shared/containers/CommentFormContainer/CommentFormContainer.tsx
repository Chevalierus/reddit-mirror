import React, { ChangeEvent, FormEvent, useContext, useRef, useState } from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { rootState, updateComment } from '../../../store/store';
import { CommentForm } from '../../CommentForm';

export function CommentFormContainer() {
  const ref = useRef<HTMLTextAreaElement>(null)
  const value = useSelector<rootState, string>(state => state.commentText)
  const dispatch = useDispatch()

  function handleChange (event: ChangeEvent<HTMLTextAreaElement>) {
    dispatch(updateComment(event.target.value))
  }

  function handleSubmit (event:FormEvent) {
    event.preventDefault();
    console.log(ref.current?.value)
  }

  return (
      <CommentForm 
      value={value}
      onChange={handleChange}
      onSubmit={handleSubmit}
      />
  )};