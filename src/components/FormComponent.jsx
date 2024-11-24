import React from 'react'
import styles from './FormComponentStyles.module.css'
import { useContactForm } from '../hook/useContactForm'

export const FormComponent = () => {

	const previousState = {
		user_name: '',
		user_email: '',
		subject: '',
		message: '',
	}

	const {
		formData,
		handleChange,
		sendEmail,
		errors,
		isValid,
		mailSend,
		mailFailed,
		setMailSend,
		setMailFailed,
		form
	} = useContactForm(previousState);

	return (
		<div className={styles.formContactContainer} >
			<div className={styles.formContainer}>
				<p>¿Te gustaría enviarnos un mensaje en este preciso momento?</p>
				<p>¡Completa tus datos y envíalo!</p>
				<form className={styles.form} ref={form} onSubmit={sendEmail}> 
					<div className={styles.formGroup}>
						<label htmlFor='user_name'>Nombre y apellido</label>
						<input 
							id='user_name'
							name='user_name'
							type='text'
							onChange={handleChange}
							autoComplete='off'
						/>
						{errors.user_name && (
							<span className={styles.error} aria-live="polite">{errors.user_name}</span>
						)}
						
					</div>
					<div className={styles.formGroup}>
						<label htmlFor='user_email'>Email</label>
						<input 
							id='user_email'
							name='user_email'
							type='email'
							onChange={handleChange}
							autoComplete='off'
						/>
						{errors.user_email && (
							<span className={styles.error} aria-live="polite">{errors.user_email}</span>
						)}
						
					</div>
					<div className={styles.formGroup}>
						<label htmlFor='subject'>Asunto</label>
						<input 
							id='subject'
							name='subject'
							type='text'
							onChange={handleChange}
							autoComplete='off'
						/>
						<div className={styles.errorsContainer} >
			
							{errors.subject && (
								<span className={styles.error} aria-live="polite">{errors.subject}</span>
							)}

						</div>
						
						
					</div>
					<div className={styles.formGroup}>
						<label htmlFor='message' >Mensaje</label>
						<textarea 
							id='message'
							name='message'
							type='textarea'
							onChange={handleChange}
							autoComplete='off'
						/>	 
						{errors.message && (
							<span className={styles.error} aria-live="polite">{errors.message}</span>
						)}
						
					</div>
					
					<input type="submit" value="Enviar"/>
				</form>
			</div>
		
		</div>
	)
}
