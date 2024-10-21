import React from 'react'
import styles from './ServicesComponentStyles.module.css'
import tablet from '../assets/images/general imgs/woman with tablet.jpeg'
import dron from '../assets/images/general imgs/dron hold in hand.jpeg'
import vrGlasses from '../assets/images/general imgs/vr glasses.jpeg'
import { ButtonComponent } from './ButtonComponent'

export const ServicesComponent = () => {
	return (
		<div className={styles.servicesContainer}>
			<div className={styles.overlay}>
				<h3 className={styles.secTitle}>SERVICIOS</h3>
				<p>Llevamos tu negocio al siguiente nivel</p>
				<div className={styles.imgContainer}>
					<div >
						<div className={styles.imgCard}>
							<img className={styles.img} src={tablet} alt="tablet" />
						</div>
						<div>
							<h3 className={styles.thTitle}>DESARROLLO WEB</h3>
						</div>
					</div>
					<div>
						<div className={styles.imgCard}>
							<img className={styles.img} src={dron} alt="dron" />
						</div>
						<div>
							<h3>SEGURIDAD INFORMÁTICA</h3>
						</div>
					</div>
					<div>
						<div className={styles.imgCard}>
							<img className={styles.img} src={vrGlasses} alt="vr glasses" />
						</div>
						<div>
							<h3>ANALISIS DE DATOS</h3>
						</div>
					</div>
				</div>
				<ButtonComponent to='/contact' description='Contactame' />
			</div>
		</div>
	)
}
