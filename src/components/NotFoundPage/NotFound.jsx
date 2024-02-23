import React from 'react'
import styles from './found.module.css'

const NotFound = () => {
  return (
    <div className={styles.box}>
        <img className={styles.notfound} src="https://cdn-icons-png.flaticon.com/128/2587/2587646.png" alt="error" />
    </div>
  )
}

export default NotFound