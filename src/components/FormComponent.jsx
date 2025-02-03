import React, { useRef, useState } from 'react'
import styles from './FormComponentStyles.module.css'
import emailjs from '@emailjs/browser';

export const FormComponent = () => {
	const emailRegEx = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
	const genRegEx = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s'-]+$/;
	const contactForm = useRef();
	const [ formData, setFormData ] = useState({
		name: '',
		email: '',
		subject: '',
		message: ''
	});
	
	const [ errors, setErrors ] = useState({});

	const validate = () => {
		const newErrors = {};

		if (formData.name.trim().length < 2) {
			newErrors.name = 'Debe ingresar un nombre valido';
		} else if (!genRegEx.test(formData.name)) {
			newErrors.name = 'El nombre contiene caracteres no permitidos';
		}
		if (!formData.email.trim()) {
			newErrors.email = 'El correo es un campo requerido';
		} else if (!emailRegEx.test(formData.email)) {
			newErrors.email = 'Debe ingresar un correo valido';
		}
		if (formData.subject.trim().length < 2) {
			newErrors.subject = 'Debe ingresar un asunto valido';
		} else if (!genRegEx.test(formData.subject)) {
			newErrors.subject = 'El campo "Asunto" Contiene caracteres no validos';
		}
		if (!formData.message.trim() < 10) {
			newErrors.message = 'El campo "Mensaje" es requerido';
		}
		return newErrors;
	}

	const handlerChange = (e) => {
		setFormData({
			...formData,
			[e.target.name] : e.target.value
		});
	};

	const sendEmail = (e) => {
		e.preventDefault();
		const validationErrors = validate();
		if (Object.keys(validationErrors).length > 0) {
			setErrors(validationErrors);
			return;
		}
		setErrors({});

		emailjs.sendForm(
			'service_cvfardd',
			'template_ern4am3',
			contactForm.current, {
			publicKey: 'eHMAkLgOdHDoUnZ9Z',
			}
		)
		.then((result) => {
			console.log(result.text);
			alert('Correo enviado');
			contactForm.current.reset();
		})
		.catch((error) => {
			console.log(error.text);
			alert('Error al enviar el correo')
		})
	}
	return (
		<div className={styles.formContactContainer} >
			<div className={styles.formContainer}>
				<p>¿Te gustaría enviarnos un mensaje en este preciso momento?</p>
				<p>¡Completa tus datos y envíalo!</p>
				<form className={styles.form} ref={contactForm} onSubmit={sendEmail}> 
					<div className={styles.formGroup}>
						<label>Nombre y apellido</label>
						<input 
						name='name'
						id='name'
						required
						value={formData.name}
						onChange={handlerChange}/>
						<span className={errors.name ? (styles.spanVisible) : (styles.spanName)}>Campo Requerido</span>
					</div>
					<div className={styles.formGroup}>
						<label>Email</label>
						<input 
						name='email'
						id='email'
						required
						/>
						<span className={styles.spanEmail}>Campo Requerido</span>
					</div>
					<div className={styles.formGroup}>
						<label>Asunto</label>
						<input 
						name='subject'
						id='subject'
						required
						/>
						<span className={styles.spanSubject}>Campo requerido</span>
					</div>
					<div className={styles.formGroup}>
						<label>Mensaje</label>
						<textarea 
						name='message'
						id='message'
						required
						/>	 
						<span className={styles.spanMessage}>Debe ingresar el mensaje</span>
					</div>
					
					<input type="submit" value="Enviar"/>
				</form>
			</div>
		
		</div>
	)
}
