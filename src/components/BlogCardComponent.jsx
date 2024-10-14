import React from 'react'
import styles from './BlogCardComponentStyles.module.css'
import { NavLink } from 'react-router-dom'

export const BlogCardComponent = () => {
    return (
        <div className={styles.blogContainer}>
            <p className={styles.blogLinks}>
                <NavLink to={'/login'} >Ingresar</NavLink> / 
                <NavLink to={'/register'} >Registrarse</NavLink>     
            </p>
            
            <div className={styles.blogCard}>
                <p>Autor - Cuando se publico - Tiempo de lectura</p>
                <h2>Titulo del posteo</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit sapiente provident eius at maiores culpa accusantium, quasi corporis blanditiis in atque assumenda debitis. Cupiditate hic, quisquam assumenda ad ullam aspernatur.</p>  
            </div>
        </div>
    )  
}
