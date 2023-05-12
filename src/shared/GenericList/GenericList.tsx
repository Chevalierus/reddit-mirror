import React from 'react';
import styles from './genericlist.css'
import classNames from 'classnames'
import {HideIcon} from '../Icon'

interface IItem {
  value: React.ReactNode,
  id: string,
  className: string
  As?: 'a' | 'li' | 'button' | 'div'
  href?: string
}

interface IMyListProps {
  list: IItem[];
}

export function GenericList({list}: IMyListProps) {

  return (
    // <ul>
    //   {list.map((item, index) => (
    //     <li onClick={item.onClick } key={item.id}>{item.value}</li>
    //   ))}
    // </ul>
    <>
      {list.map(({ As = 'li', value, className, id, href}) => (
        <As className={className} key={id} href={href}>
          {value}
        </As>
      ))}
    </>
  );
}
