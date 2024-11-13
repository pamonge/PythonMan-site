import React from 'react'
import styles from './BlogCardComponentStyles.module.css'

export const BlogCardComponent = ({ blogCardData }) => {
	return (
		<div className={styles.blogCard}>
			<div key={blogCardData.id}> 
				<p>{blogCardData.author} - {blogCardData.date} - {blogCardData.readingTime}</p>
				<h2>{blogCardData.title}</h2>
				<p>{blogCardData.content}</p>
			</div>
		</div>
	)
}
