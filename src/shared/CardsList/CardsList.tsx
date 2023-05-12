import React from 'react';
import { usePostsData } from '../../hooks/usePostsData';
import { Card } from './Card/Card';
import styles from './cardslist.css';

export function CardsList() {
  const [data] = usePostsData()
  return (
        <ul className={styles.cardsList}>
          {data.map((el) =>
            <Card key={el.id} id={el.id} title={el.title} body={el.body} createdAt={el.createdAt} score={el.score} comments={el.comments} author={el.author} preview={el.preview}
            avatar={el.avatar}></Card>
          )}
        </ul>
  );
}
