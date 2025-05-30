import React from 'react'
import styles from './BlogPageStyles.module.css'
import { DataFetcherComponent } from '../../components/DataFetcherComponent'
import { BlogComponent } from '../../components/BlogComponent'

export const BlogPage = () => {
  return (
    <div className={styles.blogContainer}>
        <DataFetcherComponent 
        endPoint='blog/'
        renderData={(data) => <BlogComponent blogData={data}/>}
        />        
    </div>
  )
}
