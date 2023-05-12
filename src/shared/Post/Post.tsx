import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { CommentList } from '../CommentList';
import { CommentFormContainer } from '../containers/CommentFormContainer';
import styles from './post.css';
import { PostBody } from './PostBody';
import { PostFooter } from './PostFooter';
import { PostHeader } from './PostHeader';

interface IPost {
  id: string
  title: string
  body: string
  createdAt?: number
  comments?: number
  score?: number
  author?: string
  preview?: string
  avatar?: string
  onClose? : () => void
}


export function Post({onClose, createdAt, score, author, avatar, preview, comments, title, body, id}: IPost,) {

  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if(event.target instanceof Node && !ref.current?.contains(event.target)) {
        onClose?.()
      }
    }

    document.addEventListener('click', handleClick)
    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [])

  const node = document.querySelector('#modal_root')
  if (!node) return null

  return ReactDOM.createPortal((
    <div className={styles.modalroot} ref={ref}>
        <div className={styles.postContainer}>
          <div>
            <PostHeader title={title} createdAt={createdAt} author={author} avatar={avatar} score={score}/>
            <PostBody body={body} preview={preview}/>
            <PostFooter comments={comments}/>
          </div>
            <CommentFormContainer/>
            <CommentList id={id}/>
      </div>
    </div>
  ), node);
}
