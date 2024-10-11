import React from 'react'
import styles from './ContactPageStyles.module.css'
import { FormComponent } from '../../components/FormComponent'

export const ContactPage = () => {
	return (
		<div className={styles.contactContainer}>
			<FormComponent />
		</div>
	)
}
