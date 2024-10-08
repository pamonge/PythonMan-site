import React from 'react'
import styles from './AboutPageStyles.module.css'
import { TeamComponent } from '../../components/TeamComponent'


export const AboutPage = () => {

return (
	<div className={styles.aboutContainer}>
		<div className={styles.textContainer}>
			<h3>NUESTRO EQUIPO</h3>
			<p>DEDICACIÓN. EXPERIENCIA. PASIÓN POR LO QUE HACEMOS. COMPROMETIDOS CON LA EXCELENCIA</p>
			<p>
				Este es el actual equipo de colaboradores y desarrolladores o especialistas en diversas disciplinas en PYTHON MAN. Aquí mostramos una breve descripción de todos ellos, sin excluir a ninguno, como una pequeña biografía de sus habilidades y destrezas profesionales:
			</p>	
		</div>
		<TeamComponent />
	</div>
)
}
