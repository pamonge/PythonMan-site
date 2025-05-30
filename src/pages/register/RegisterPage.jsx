import React from 'react'
import styles from './RegisterPageStyles.module.css'
import { ButtonComponent } from '../../components/ButtonComponent'
import { RegisterFormComponent } from '../../components/RegisterFormComponent'

export const RegisterPage = () => {
	return (
		<div className={styles.registerContainer}>
			<RegisterFormComponent />
			<ButtonComponent to='/blog' description='Volver' />
		</div>
	)
}
