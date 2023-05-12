import React from 'react';
import styles from './dropdown.css';

interface IDropdownProps {
  button: React.ReactNode
  children: React.ReactNode
  isOpen?: boolean
  onOpen?: () => void
  onClosed?: () => void
};

const NOOP = () => {};

export function Dropdown({button, children, isOpen, onOpen = NOOP, onClosed = NOOP}: IDropdownProps) {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(isOpen);
  React.useEffect(() => setIsDropdownOpen(!isDropdownOpen), [isOpen])
  React.useEffect(() => isDropdownOpen ? onOpen(): onClosed(  ), [isDropdownOpen])

  const handleOpen = () => {
    if (isOpen == undefined) {
      setIsDropdownOpen(!isDropdownOpen)
    }
  }

  return (
    <div className={styles.container}>
      <div onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
        {button}
      </div>
      {isDropdownOpen && (
        <div className={styles.listContainer}>
          <div className={styles.list} onClick={() => setIsDropdownOpen(false)}>
            {children}
          </div>
        </div>
      )}
    </div>
  );
}
