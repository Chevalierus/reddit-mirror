import React, { useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { generateId } from '../../../../utils/react/generateRandomIndex';
import { Dropdown } from '../../../Dropdown';
import { GenericList } from '../../../GenericList';
import { HideIcon, MenuIcon, ReportIcon, SaveIconDesktop, ShareIcon } from '../../../Icon';
import { CommentIcon } from '../../../Icon/CommentIcon';
import { Text, Ecolor } from '../../../Text';
import styles from './menu.css';

const LIST = [
  {className: `${styles.menuItem}`, value: <span className={styles.menuItemWrapper}><CommentIcon/><Text size={12} color={Ecolor.grey99}>Комментарии</Text></span>},
  {className: `${styles.menuItem}`, value: <span className={styles.menuItemWrapper}><ShareIcon/><Text size={12} color={Ecolor.grey99}>Поделиться</Text></span>},
  {className: `${styles.menuItem}`, value: <span className={styles.menuItemWrapper}><HideIcon/><Text size={12} color={Ecolor.grey99}>Скрыть</Text></span>},
  {className: `${styles.menuItem}`, value: <span className={styles.menuItemWrapper}><SaveIconDesktop/><Text size={12} color={Ecolor.grey99}>Сохранить</Text></span>},
  {className: `${styles.menuItem}`, value: <span className={styles.menuItemWrapper}><ReportIcon/><Text size={12} color={Ecolor.grey99}>Пожаловаться</Text></span>},
].map(generateId)

interface IMenuClose {
  onClose?: () => void
}

export function Menu() {
  const ref = useRef<HTMLDivElement>(null);
  const [isDropdownOpened, setIsDropdownOpened] = useState(false)
  const rect = ref.current?.getBoundingClientRect()
  const node = document.querySelector('#dropdown_root')
  if (!node) return null
  return (
    <div className={styles.menu} ref={ref}>
    <Dropdown isOpen button={<button className={styles.menuButton} onClick={() => setIsDropdownOpened(true)}>
        <MenuIcon/>
    </button>}>
      {isDropdownOpened && 
      ReactDOM.createPortal((
        <div className={styles.dropdown} style={{
          top: Math.round(rect ? rect.top + rect?.height * 1.5 : 0),
          left: Math.round(rect ? rect.left - rect?.width * 2 : 0),
        }}>
          <ul className={styles.menuItemList}>
            <GenericList list={LIST}/>
          </ul>
          <button className={styles.closeButton}>
            Закрыть
          </button>
        </div>
      ), node)}
    </Dropdown>
    </div>
  );
}
