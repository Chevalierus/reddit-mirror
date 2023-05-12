import React from 'react';
import { useComments } from '../../hooks/useCommentData';
import { CommentItem } from './CommentItem';
import styles from './commentlist.css';

interface ICommentData {
  id?: string

}

export function CommentList({id}: ICommentData) {
  const [data] = useComments(id)
  console.log(data)
  return (
      <div className={styles.commentBlock}>
        <ul className={styles.commentList}>
          {data.map((el) => {
            return <CommentItem key={el.id} id={el.id} author={el.author} text={el.text}/>
          })}
        </ul>
      </div>
  );
}

