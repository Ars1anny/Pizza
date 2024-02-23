import React from 'react'
import styles from './header.module.css'

const Header = () => {
  return (
    <div>
      <header className={styles.header}>
        <img className={styles.logo} src="https://cdn-icons-png.flaticon.com/128/5107/5107465.png" alt="logo" />
        <h2 className={styles.title}>MYPIZZA.KG</h2>
      </header>
    </div>
  )
}

export default Header