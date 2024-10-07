import React, { useEffect } from 'react'
import styles from './HomePageStyles.module.css'
import pythonBackImg from '../../assets/images/site imgs/Big transparent Python Man.png'
import { BiographyComponent } from '../../components/BiographyComponent'
import { ServicesComponent } from '../../components/ServicesComponent'
import { ConsultingComponent } from '../../components/ConsultingComponent'

export const HomePage = () => {

	useEffect (() => {
		const sr = ScrollReveal({
		distance: '75px',
		duration: 2000,
		delay: 450,
		reset: true
		});
		sr.reveal(`.${styles.initialBigLogo}`, { delay: 400, origin: 'top' });
	} ,[])

return (
	<div className={styles.container}>
	<div className={styles.overlay}>
		<img className={styles.initialBigLogo} src={pythonBackImg} alt="Logo" />
		<BiographyComponent />
		<ServicesComponent />
		<ConsultingComponent />
	</div>
	</div>
)
}
