import React, { Component, useEffect, useRef, useState } from 'react';
import { ReportIcon, ShareIcon } from '../../Icon';
import { CommentIcon } from '../../Icon/CommentIcon';
import { Text, Ecolor } from '../../Text';
import styles from './commentitem.css';

interface ICommentData {
  id?: string
  author?: string
  text?: string
}

export function CommentItem({id, author, text}: ICommentData) {
  const ref = useRef<HTMLTextAreaElement>(null)
  const [isAnswerFormOpened, setIsAnswerFormOpened] = useState(false)
  useEffect(() => {
    ref.current?.focus()
  })

  return (
    <li id={id} className={styles.comment}>
        <div className={styles.karmaSection}>
          <div className={styles.commentKarma}>
            <button className={styles.up}>
              <svg width="19" height="10" viewBox="0 0 19 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.5 0L0 10H19L9.5 0Z" fill="#D9D9D9"/>
              </svg>
            </button>
            <button className={styles.down}>
              <svg className={styles.down} width="19" height="10" viewBox="0 0 19 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.5 0L0 10H19L9.5 0Z" fill="#D9D9D9"/>
              </svg>
            </button>
            <div className={styles.commentShow}>
              <span></span>
            </div>
          </div>
        </div>
        <div className={styles.commentSection}>
          <div className={styles.commentBlock}>
            <img src="" alt=""/>
            <a href="">
            <span className={styles.username}>
              <Text size={14} color={Ecolor.orange}>{author ? author : 'Mark'}</Text>
            </span>
            </a>
            <span className={styles.createdAt}>
              <Text size={14} color={Ecolor.grey99}>2 часа назад</Text>
            </span>
            <span className={styles.status}>
              <Text size={14} color={Ecolor.black}>League of something</Text>
            </span>
          </div>
          <div className={styles.commentBlock}>
            <Text size={14} color={Ecolor.black}>{text ? text : "lorem..."}</Text>
          </div>
          <div className={styles.commentBlock}>
            <button className={styles.commentBtn} onClick={() => setIsAnswerFormOpened(true)}>
              <CommentIcon/>
              <span>
              <Text size={14} color={Ecolor.grey99}>Ответить</Text>
              </span>
            </button>
            <button className={styles.commentBtn}>
              <ShareIcon/>
              <span>
              <Text size={14} color={Ecolor.grey99}>Поделиться</Text>
              </span>
            </button>
            <button className={styles.commentBtn}>
              <ReportIcon/>
              <span>
              <Text size={14} color={Ecolor.grey99}>Пожаловаться</Text>
              </span>
            </button>
          </div>
          {isAnswerFormOpened && (
            <div className={styles.commentAnswer}>
            <form action="">
              <textarea defaultValue={`${author ? author : 'Mark'}, `} ref={ref}></textarea>
              <button type="submit" onClick={() => setIsAnswerFormOpened(false)}>Оставить комменатрий</button>
            </form>
          </div> 
          )}
      </div>
    </li>
  );
}

