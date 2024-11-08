import React from 'react'
import styles from './BlogCardComponentStyles.module.css'
import { ButtonComponent } from './ButtonComponent.jsx'

export const BlogCardComponent = ({ blogData }) => {
    return (
        <div className={styles.blogContainer}>
            <div className={styles.buttonContainer}>
                <ButtonComponent to='/login' description='Ingresar' />  
                <ButtonComponent to='/Register' description='Registrarse' /> 
            </div>
            <div className={styles.blogCard}>

                {blogData.map((postData) => (
                    <div key={postData.id}> 
                        <p>{postData.author} - {postData.date} - {postData.readingTime}</p>
                        <h2>{postData.title}</h2>
                        <p>{postData.content}</p>
                    </div>
                ))}

            </div>
        </div>
    )  
}
