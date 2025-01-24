import React, {useState} from 'react'
import styles from './NavBarComponentStyles.module.css'
import { NavLink } from 'react-router-dom'
import pythonManLogo from '../assets/images/site imgs/python man.png'

export const NavBarComponent = () => {

    // to change burger classes
    const [burger_class, setBurgerClass] = useState(`${styles.burgerBar} ${styles.unclicked}`)
    const [menu_class, setMenuClass] = useState(`${styles.menu} ${styles.hidden}`)
    const [isMenuClicked, setIsMenuClicked] = useState(false)

    // toggle burger menu change
    const updateMenu = () => {
        setIsMenuClicked(!isMenuClicked)
        if(isMenuClicked) {
            setBurgerClass(`${styles.burgerBar} ${styles.clicked}`)
            setMenuClass(`${styles.menu} ${styles.visible}`)
        }
        else {
            setBurgerClass(`${styles.burgerBar} ${styles.unclicked}`)
            setMenuClass(`${styles.menu} ${styles.hidden}`)
        }
    }

    return(
        <div >
            <nav>
                <div className={ styles.pythonLogo }>
                    <img src={ pythonManLogo } alt='python man logo'></img>
                </div>
                
                <div className={styles.spacer}>
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
                        {/* <li className={styles.navItem}>
                            <NavLink to="/booking" className={styles.navLink} >RESERVA ONLINE</ NavLink>
                        </li> */}
                        <li className={styles.navItem}>
                            <NavLink to="/store" className={styles.navLink} >PRODUCTOS</ NavLink>
                        </li>
                        <li className={styles.navItem}>
                            <NavLink to="/contact" className={styles.navLink} >CONTACTO</ NavLink>
                        </li>
                    </ul>

                    <div className={styles.burgerMenu} onClick={updateMenu}>
                        <div className={burger_class}></div>
                        <div className={burger_class}></div>
                        <div className={burger_class}></div>
                    </div>
                </div>
            </nav>

            <div className={menu_class} >
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
                    {/* <li className={styles.navItem}>
                        <NavLink to="/booking" className={styles.navLink} >RESERVA ONLINE</ NavLink>
                    </li> */}
                    <li className={styles.navItem}>
                        <NavLink to="/store" className={styles.navLink} >PRODUCTOS</ NavLink>
                    </li>
                    <li className={styles.navItem}>
                        <NavLink to="/contact" className={styles.navLink} >CONTACTO</ NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}
