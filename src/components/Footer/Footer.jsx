import React from 'react'
import styles from './footer.module.css'

const Footer = () => {
  return (
    <div>
      <footer className={styles.footer}>
        <h5 className={styles.wish}>ПРИЯТОГО АППЕТИА!</h5>
        <p className={styles.footerTitle}>mypizza.kg</p>
      </footer>
    </div>
  )
}

export default Footer