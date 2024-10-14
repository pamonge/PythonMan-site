import React from 'react'
import styles from './BlogPageStyles.module.css'
import { BlogCardComponent } from '../../components/BlogCardComponent'

export const BlogPage = () => {
  return (
    <div className={styles.blogContainer}>
        <BlogCardComponent />
    </div>
  )
}
