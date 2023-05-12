import React from 'react';
import { UserIcon } from '../../../Icon';
import { Text, Ecolor } from '../../../Text';
import styles from './userblock.css';

interface IUserBlockProps {
  avatarSrc?: string
  username?: string
  loading?: boolean
}

export function UserBlock({avatarSrc, username, loading}: IUserBlockProps) {
  return (
    <a href="https://www.reddit.com/api/v1/authorize?client_id=vH4vV0pCtZsIvShyGFC08g&response_type=code&state=random_string&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=read submit identity" className={styles.userBox}>
      <div className={styles.avatarBox}>
        {avatarSrc ? <img src={avatarSrc} alt="user avatar" className={styles.avatarImage}/> : <UserIcon/>}
      </div>

      <div className={styles.username}>
        {loading ? (
          <Text size={20} color={Ecolor.grey99}>Загрузка...</Text>
        ) : (
          <Text size={20} color={username ? Ecolor.black : Ecolor.grey99}>{username || 'Аноним'}</Text>
        )}
      </div>
    </a>
  );
}
