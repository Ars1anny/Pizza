import styles from './layout.module.css'
import React from 'react'
import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import Footer from '../Footer/Footer'

const Layout = () => {
  return (
    <div>
      <Header/>
        <div className={styles.linksBox}>
            <div className={styles.links}>
                <NavLink className={styles.active} to='/'>Главная</NavLink>
            </div>
            <div className={styles.links}>
                <NavLink className={styles.active} to='snacks'>Закуски</NavLink>
            </div>
            <div className={styles.links}>
                <NavLink className={styles.active} to='/salads'>Салаты</NavLink>
            </div>
        </div>
      <Outlet/>
      <div className={styles.space}>---</div>
      <Footer/>
    </div>
  )
}

export default Layout