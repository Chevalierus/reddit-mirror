import React from 'react';
import styles from './postheader.css';

interface IPostHeader {
  title?: string
  createdAt?: number
  author?: string
  avatar?: string
  score?: number
}

export function PostHeader({title, createdAt, author, avatar, score}: IPostHeader) {
  return (
    <div className={styles.postHeader}>
      <div className={styles.karmaCounter}>
        <button className={styles.up}>
          <svg width="19" height="10" viewBox="0 0 19 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.5 0L0 10H19L9.5 0Z" fill="#D9D9D9"/>
          </svg>
        </button>
        <span  className={styles.karmaValue}>
          {score ? score : 0}
        </span>
        <button className={styles.down}>
          <svg className={styles.down} width="19" height="10" viewBox="0 0 19 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.5 0L0 10H19L9.5 0Z" fill="#D9D9D9"/>
          </svg>
        </button>
      </div>
      <div>
        <div className={styles.postTitle}>
          <h2>
            {title ? title : 'Пустой заголовок'}
          </h2>
        </div>
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
      </div>   
    </div>
  );
}
