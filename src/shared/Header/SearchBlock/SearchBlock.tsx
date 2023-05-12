import axios from 'axios';
import React, { useEffect, useState, useContext } from 'react';
import { useUserData } from '../../../hooks/useUserData';
import styles from './searchblock.css';
import { UserBlock } from './UserBlock';

export function SearchBlock() {
  const {data, loading} = useUserData()

  return (
    <div className={styles.searchBlock}>
      <UserBlock avatarSrc={data.iconImg} username={data.name} loading={loading}/>
    </div>
  );
}
