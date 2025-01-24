import React from 'react'
import styles from './BiographyComponentStyles.module.css'
import clockImg from '../assets/images/backgrounds/clock.jpeg'

export const BiographyComponent = () => {
  return (
    <div className={styles.container}>
		<div className={styles.textSection}>
			<h2 className={styles.secTitle}>BIOGRAFÍA</h2>
			<p>
				Mi nombre es Adolfo González Hernández, y desde 2021 incursioné en el sector TI de una forma casi casual,
				    habiendo sido mánager de proyectos editoriales 
				en Estudio Silveria, S.L. desde el año 2004 hasta 
				la fecha anteriormente mencionada.
			</p>
			<p>
				Mi curiosidad por aprender programación me llevaría a descubrir Python, sus increíbles frameworks 
				y convertirme en desarrollador multiplataforma en disciplinas como Desarrollo Web, Análisis de Datos,
				 Machine Learning y Ciberseguridad.
			</p>
			<p>
				Junto a mi equipo, antiguos colaboradores expertos en FrontEnd, Diseño UX y Análisis de Datos, 
				estamos iniciando una nueva aventura como consultoría informática freelance para pymes y autónomos,
				 habiendo sido previamente un equipo plenamente consolidado en un proyecto de gran envergadura, 
				 Alimenta Forma.
			</p>
		</div>
		<div className={styles.imgContainer}>
			<img className={styles.biographyClock} src={clockImg} alt="clock" />
		</div>
    </div>
  )
}
