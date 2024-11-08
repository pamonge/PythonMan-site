import React from 'react'
import styles from './BlogPageStyles.module.css'
import { DataFetcherComponent } from '../../components/DataFetcherComponent'
import { BlogCardComponent } from '../../components/BlogCardComponent'

export const BlogPage = () => {
  return (
    <div className={styles.blogContainer}>
        <DataFetcherComponent 
        endPoint='blog/'
        renderData={(data) => <BlogCardComponent blogData={data}/>}
        />        
    </div>
  )
}
