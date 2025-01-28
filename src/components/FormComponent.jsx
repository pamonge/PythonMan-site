import React, { useEffect, useState } from 'react'
import styles from './FormComponentStyles.module.css'
import axiosInstance from '../axiosInstance';

export const FormComponent = () => {

	const [formData, setFormData] = useState({
		name: '',
		email: '',
		subject: '',
		message: '',
	});

	useEffect (() => {
		axiosInstance.get ('/csrf/')
			.then(response => {
				console.log ('CSRF set');
			})
			.catch(error => {
				console.error(`Error setting CSRF: ${error}`);
			}) 
	}, []);

	const handleChange = (e) => {
		const {name, value} = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	}

	const handleSubmit = (e) => {
		e.preventDefault();

		axiosInstance.post('/contact/', formData)
			.then(response => {
				console.log(`Form Submit success: ${response}`)
			})
			.catch(error => {
				console.error(`Error submiting form: ${error}`);
			});
	};

	return (
		<div className={styles.formContactContainer} >
			<div className={styles.formContainer}>
				<p>¿Te gustaría enviarnos un mensaje en este preciso momento?</p>
				<p>¡Completa tus datos y envíalo!</p>
				<form className={styles.form} onSubmit={handleSubmit}> 
					<div className={styles.formGroup}>
						<label>Nombre y apellido</label>
						<input 
						name='name'
						value={formData.name}
						onChange={handleChange}/>
						<span>Campo Requerido</span>
					</div>
					<div className={styles.formGroup}>
						<label>Email</label>
						<input 
						name='email'
						value={formData.email}
						onChange={handleChange}/>
						<span>Campo Requerido</span>
					</div>
					<div className={styles.formGroup}>
						<label>Asunto</label>
						<input 
						name='subject'
						value={formData.subject}
						onChange={handleChange}/>
						<span>Campo requerido</span>
					</div>
					<div className={styles.formGroup}>
						<label>Mensaje</label>
						<textarea 
						name='message'
						value={formData.message}
						onChange={handleChange}/>	 
						<span >Debe ingresar el mensaje</span>
					</div>
					
					<input type="submit" value="Enviar"/>
				</form>
			</div>
		
		</div>
	)
}
