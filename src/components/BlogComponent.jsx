import React from 'react'
import styles from './BlogComponentStyles.module.css'
import { ButtonComponent } from './ButtonComponent.jsx'
import { BlogCardComponent } from './BlogCardComponent.jsx'

export const BlogComponent = ({ blogData }) => {
    return (
        <div className={styles.blogContainer}>
            <div className={styles.buttonContainer}>
                <h2>Noticias</h2> 
            </div>
            <div className={styles.blogCardContainer}>

                {blogData.map((postData) => (
                    <BlogCardComponent blogCardData={postData} />
                ))}

            </div>
        </div>
    )  
}
