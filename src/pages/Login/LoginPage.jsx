import React from 'react'
import styles from './LoginPageStyles.module.css'
import { NavLink } from 'react-router-dom'

export const LoginPage = () => {
  return (
		<div className={styles.loginContainer} >
			<h3>Inicio de Secion</h3>
			<form action="">
				<div>
					<label htmlFor="userName">Usuario</label>
					<input type="text" id='userName' name='userName'/>
				</div>
				<div>
					<label htmlFor="userPassword">Contraseña</label>
					<input type="text" id='userPassword' name='userPassword' />
				</div>
				<input type="submit" value="Ingresar" />		
			</form>
			<p>No posees usuario?</p>
			<NavLink to={'/register'} >Registrese!</NavLink>
			<NavLink to={'/'} >Volver al inicio</NavLink>		
		</div>
	)
}
