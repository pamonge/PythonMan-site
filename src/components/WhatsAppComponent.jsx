import React from 'react'
import whatsAppIcon from '../assets/icons/whatsapp.png'
import styles from './WhatsAppComponentStyles.module.css'

export const WhatsAppComponent = () => {

	const phoneNumber = '34617180478';
	const message = 'Me gustaría recibir más información';

	const whatsAppUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

	return (
		<a className={styles.whatsAppLink} href={whatsAppUrl} target='_blank' rel="noopener noreferrer">
			<img src={whatsAppIcon} alt='WhatsApp' />
			<p>+34 617 18 04 78</p> 
		</a>	
	)
}
