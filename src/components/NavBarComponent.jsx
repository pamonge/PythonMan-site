import React from 'react'
import styles from './NavBarComponentStyles.module.css'
import { NavLink } from 'react-router-dom'
import pythonManLogo from '../assets/images/site imgs/python man.png'

export const NavBarComponent = () => {
  return (
    <div className={styles.container}>
        
        <span className={ styles.pythonLogo }>
            <img src={ pythonManLogo } alt='python man logo'></img>
        </span>
        <ul className={styles.navLinksList}>
            <li className={styles.navItem}>
                <NavLink to="/" className="">INICIO</ NavLink>
            </li>
            <li className={styles.navItem}>
                <NavLink to="/about" className={styles.navLink} >ACERCA DE</ NavLink>
            </li>
            <li className={styles.navItem}>
                <NavLink to="/blog" className={styles.navLink} >BLOG</ NavLink>
            </li>
            <li className={styles.navItem}>
                <NavLink to="/booking" className={styles.navLink} >BOOKING</ NavLink>
            </li>
            <li className={styles.navItem}>
                <NavLink to="/store" className={styles.navLink} >PRODUCTOS</ NavLink>
            </li>
            <li className={styles.navItem}>
                <NavLink to="/contact" className={styles.navLink} >CONTACTO</ NavLink>
            </li>
        </ul>
    </div>
  )
}
