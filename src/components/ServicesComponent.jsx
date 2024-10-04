import React from 'react'
import styles from './ServicesComponentStyles.module.css'
import tablet from '../assets/images/general imgs/woman with tablet.jpeg'
import dron from '../assets/images/general imgs/dron hold in hand.jpeg'
import vrGlasses from '../assets/images/general imgs/vr glasses.jpeg'

export const ServicesComponent = () => {
	return (
		<div className={styles.servicesContainer}>
			<div className={styles.overlay}>
				<h3 className={styles.secTittle} >SERVICIOS</h3>
				<p>Llevamos tu negocio al siguiente nivel</p>
				<div >
					<div className={styles.imgContainer}>
						<div>
							<img src={tablet} alt="tablet" />
						</div>
						<div>
							<h3 className={styles.thTittle}>DESARROLLO WEB</h3>
							<p>Contactame</p>
						</div>
					</div>
					<div>
						<div>
							<img src={dron} alt="dron" />
						</div>
						<div>
							<h3>SEGURIDAD INFORMÁTICA</h3>
							<p>Contactame</p>
						</div>
					</div>
					<div>
						<div>
							<img src={vrGlasses} alt="vr glasses" />
						</div>
						<div>
							<h3>ANALISIS DE DATOS</h3>
							<p>Contactame</p>
						</div>
					</div>
					
				</div>
			</div>
		</div>
	)
}
