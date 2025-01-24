import React from 'react'
import styles from './FormComponentStyles.module.css'

export const FormComponent = () => {
	return (
		<div className={styles.formContactContainer} >
			<div className={styles.formContainer}>
				<p>¿Te gustaría enviarnos un mensaje en este preciso momento?</p>
				<p>¡Completa tus datos y envíalo!</p>
				<form className={styles.form}> 
					<div className={styles.formGroup}>
						<label>Nombre y apellido</label>
						<input />
						<span>Campo Requerido</span>
					</div>
					<div className={styles.formGroup}>
						<label>Email</label>
						<input />
						<span>Campo Requerido</span>
					</div>
					<div className={styles.formGroup}>
						<label>Asunto</label>
						<input />
						<span>Campo requerido</span>
					</div>
					<div className={styles.formGroup}>
						<label>Mensaje</label>
						<textarea />	 
						<span >Debe ingresar el mensaje</span>
					</div>
					
					<input type="submit" value="Enviar"/>
				</form>
			</div>
		
		</div>
	)
}
