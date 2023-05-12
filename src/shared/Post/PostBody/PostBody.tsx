import React from 'react';
import styles from './postbody.css';

interface IPostBody {
  body: string
  preview?: string
}

export function PostBody({body, preview}: IPostBody) {
  return (
    <div className={styles.postBody}>
      <div>
        <p>
          {body ? body : null}
        </p>
        <div>
           { preview ? <img className={styles.previewImg} src={preview}/> : null}
        </div>
      </div>
    </div>
  );
}
