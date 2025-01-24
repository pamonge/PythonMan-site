import React from 'react'
import styles from './ContactPageStyles.module.css'
import { FormComponent } from '../../components/FormComponent'
import { LocationComponent } from '../../components/LocationComponent'
import { MailComponent } from '../../components/MailComponent'
import { WhatsAppComponent } from '../../components/WhatsAppComponent'

export const ContactPage = () => {
	return (
		<div className={styles.contactContainer}>
			<div className={styles.dataContainer}>
				<div className={styles.title}>
					<h3>CONTACTO</h3>
				</div>
				<LocationComponent />
				<div className={styles.contact}>
					<MailComponent />
					<WhatsAppComponent />
				</div>
			</div>
			<div>
				<FormComponent />	
			</div>
		</div>
	)
}
