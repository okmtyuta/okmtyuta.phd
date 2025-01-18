import { ComponentProps } from 'react'
import styles from './header.module.css'

type HeaderProps = {} & ComponentProps<'header'>

export const Header = (props: HeaderProps) => {
  return (
    <div className={styles['header']}>
      <div className={styles['header-content']}>
        <a className={styles['logo']} href="/">
          {props.children}
        </a>
      </div>
    </div>
  )
}
