import React, { useContext, useState } from 'react';
import styles from './textcontent.css';
import { Post } from '../../../Post';

interface IPostTextContent {
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

export function TextContent({id, title, body, createdAt, comments, score, preview, author, avatar}: IPostTextContent) {

  const [isModalOpened, setIsModalOpened]= useState(false)

  return (
      <div className={styles.textContent}>
        <div className={styles.metaData}>
          <div className={styles.userLink}>
            {avatar ? <img className={styles.avatar} src={avatar} alt=""/> : <img className={styles.avatar} src="https://cdn.frankerfacez.com/emoticon/185868/4" alt=""/>}
            <a className={styles.username} href='#user-url'>{author ? author : "Дмитрий Гришин"}</a>
          </div>
          <span className={styles.createdAt}>
            <span className={styles.publishedLabel}>опубликовано </span>
              {createdAt ? createdAt : "4 часа назад"}
            </span>
        </div>
        <h2 className={styles.title}>
          <a className={styles.postLink} href="#post-url" onClick={() => { setIsModalOpened(true) }}>
            {title ? title : "Следует отметить, что новая модель организационной деятельности..."}
          </a>
        </h2>
        {isModalOpened && (
          <Post id={id} title={title} createdAt={createdAt} comments={comments} score={score} preview={preview} body={body} onClose={() => setIsModalOpened(false)}/>
        )}
      </div>
  );
}
