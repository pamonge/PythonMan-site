import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './ButtonComponentStyles.module.css'

export const ButtonComponent = ({to, description}) => {
	return (
		<div className={styles.buttonContainer}>
			<button className={styles.button}>
				<NavLink  to={to} >{description}</NavLink>
			</button>
		</div>
	)
}
