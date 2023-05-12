import React from 'react';
import { ShareIcon, ReportIcon, HideIcon, SaveIconDesktop } from '../../Icon';
import { CommentIcon } from '../../Icon/CommentIcon';
import { Text, Ecolor } from '../../Text';
import styles from './postfooter.css';

interface IPostFooter {
  comments?: number
}

export function PostFooter({comments}: IPostFooter) {
  return (
    <div className={styles.postFooter}>
      <button className={styles.postBtn}>
        <CommentIcon/>
        <span>
        <Text size={14} color={Ecolor.grey99}>{comments ? comments : 0} Комментарии</Text>
        </span>
      </button>
      <button className={styles.postBtn}>
        <ShareIcon/>
        <span>
        <Text size={14} color={Ecolor.grey99}>Поделиться</Text>
        </span>
      </button>
      <button className={styles.postBtn}>
        <HideIcon/>
        <span>
        <Text size={14} color={Ecolor.grey99}>Скрыть</Text>
        </span>
      </button>
      <button className={styles.postBtn}>
        <SaveIconDesktop/>
        <span>
        <Text size={14} color={Ecolor.grey99}>Сохранить</Text>
        </span>
      </button>
      <button className={styles.postBtn}>
        <ReportIcon/>
        <span>
        <Text size={14} color={Ecolor.grey99}>Пожаловаться</Text>
        </span>
      </button>
      <span className={styles.postPercentage}>54% проголосовали</span>
    </div>
  );
}
