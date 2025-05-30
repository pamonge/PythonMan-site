import React from 'react'
import styles from './LoginPageStyles.module.css'
import { LoginFormComponent } from '../../components/LoginFormComponent'
import { ButtonComponent } from '../../components/ButtonComponent'

export const LoginPage = () => {
  return (
		<div className={styles.loginContainer} >
			<h3>Inicio de Seción</h3>
			<LoginFormComponent />
			<p>No posees usuario?</p>
			<div className={styles.buttons} >
				<ButtonComponent to='/register' description='Registrese!' />
				<ButtonComponent to='/blog' description='Volver al Blog' />
			</div>		
		</div>
	)
}
