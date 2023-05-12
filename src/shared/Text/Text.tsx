import React, { Children } from 'react';
import styles from './text.css';
import classNames from 'classnames'

export enum Ecolor {
  black = 'black',
  orange = 'orange',
  green = 'green',
  white = 'white',
  greyF4 = 'greyF4',
  greyF3 = 'greyF3',
  greyD9 = 'greyD9',
  greyC4 = 'greyC4',
  grey99 = 'grey99',
  grey66 = 'grey66',
}

type Tsizes = 28 | 20 | 16 | 14 | 12 | 10;

interface ITextProps {
  As?: 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'div';
  children?: React.ReactNode;
  size: Tsizes;
  mobileSize?: Tsizes;
  tabletSize?: Tsizes;
  desktopSize?: Tsizes;
  color?: Ecolor
}

export function Text(props: ITextProps) {
  const {As = 'span', children, size, mobileSize, tabletSize, desktopSize, color = Ecolor.black} = props

  const classes = classNames(
    styles[`s${size}`],
    { [styles[`m${mobileSize}`]]: mobileSize },
    { [styles[`t${tabletSize}`]]: tabletSize },
    { [styles[`d${desktopSize}`]]: desktopSize },
    styles[color]
  );

  return (
      <As className={classes}>
        {children}
      </As>
  );
}
