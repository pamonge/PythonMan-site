import React, { useEffect, useRef, useState } from "react";

export const useContactForm = (previousState) => {
	
	const [formData, setFormData] = useState(previousState);
	const [errors, setErrors] = useState({});
	const [isValid, setIsValid] = useState(false);
	const [mailSend, setMailSend] = useState(false);
	const [mailFailed, setMailFailed] = useState(false);
	const form = useRef();

	const validate = () => {
		const newError = {};
		if (!formData.user_name) {
			newError.user_name = 'El Nombre y Apellido es requerido.';
		}

		if (!formData.user_email) {
			newError.user_email = 'El Correo electrónico es requerido.';
		}

		if (!formData.subject) {
			newError.subject = 'El Asunto es requerido';
		}

		if (!formData.message) {
			newError.message = 'El Mensaje es requerido';
		}

		setErrors(newError);
		return Object.keys(newError).length === 0;
	}

	useEffect(() => {
		setIsValid(validate());
	}, [formData]);

	const handleChange = (e) => {
		const {name, value} = e.target;
		setFormData({
			...formData,
			[name]: value,
		})
	} 

	const sendEmail = (e) => {
		e.preventDefault();


	}

	return {
		formData,
		handleChange,
		sendEmail,
		errors,
		isValid,
		mailSend,
		mailFailed,
		setMailSend,
		setMailFailed,
		form,
	}
}
