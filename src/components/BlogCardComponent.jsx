import React from 'react'
import styles from './BlogCardComponentStyles.module.css'
import { ButtonComponent } from './ButtonComponent.jsx'

export const BlogCardComponent = () => {
    return (
        <div className={styles.blogContainer}>
            <div className={styles.buttonContainer}>
                <ButtonComponent to='/login' description='Ingresar' />  
                <ButtonComponent to='/Register' description='Registrarse' /> 
            </div>
            <div className={styles.blogCard}>
                <p>Autor - Cuando se publico - Tiempo de lectura</p>
                <h2>Titulo del posteo</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit sapiente provident eius at maiores culpa accusantium, quasi corporis blanditiis in atque assumenda debitis. Cupiditate hic, quisquam assumenda ad ullam aspernatur.</p>  
            </div>
        </div>
    )  
}
