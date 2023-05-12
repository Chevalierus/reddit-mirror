import React, { useContext, useState } from 'react';
import styles from './card.css';
import { Controls } from './Controls';
import { Menu } from './Menu';
import { Preview } from './Preview';
import { TextContent } from './TextContent';

export interface IPostsCards {
  id: string
  title: string
  body: string
  createdAt?: number
  comments?: number
  score?: number
  author: string
  preview?: string
  avatar?: string
}

interface ICardId {
  onCardId: () => void
}


export function Card({id, title, body, createdAt, comments, score, author, preview, avatar}: IPostsCards) {
  const [cardId, setCardId] = useState('')
  const handleClickId = (id: string) => {
    setCardId(id)
  }

  return (
      <li id={id} className={styles.card} onClick={() => handleClickId(id)}>
        <TextContent id={id} avatar={avatar} title={title} body={body} author={author} createdAt={createdAt} score={score} comments={comments} preview={preview}/>
        <Preview preview={preview}/>
        <Menu/>
        <Controls comments={comments} score={score}/>
      </li>
  );
}
