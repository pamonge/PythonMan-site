import React from 'react'
import { ButtonComponent } from '../components/ButtonComponent'
import styles from './ProductComponentStyles.module.css'
import basicWeb from '../assets/images/general imgs/webSiteProduct.png'
import dataAnalisis from '../assets/images/general imgs/dataAnalisisProduct.png'
import consulting from '../assets/images/general imgs/consulting.png'

export const ProductComponent = () => {
  return (
    <div className={styles.productContainer}>
        <h2>Productos</h2>
        <div className={styles.productDescription}>
            <div className={styles.productlist}>
                <div className={styles.product}>
                    <img src={dataAnalisis} alt="Data Analisis" />
                    <h3>ANALISIS DE DATOS</h3>
                    <p>Permite contar con información oportuna y precisa al momento de tomar deciciones de negocios.</p>
                </div>
                <div className={styles.product}>
                    <img src={basicWeb} alt="Web Site" />
                    <h3>DISEÑO DE SITIOS Y APLICACIONES WEB</h3>
                    <p>Permite acceso al sistema desde cualquier plataforma en cualquier lugar y momento.</p>
                </div>
                <div className={styles.product}>
                    <img src={consulting} alt="Consulting" />
                    <h3>CONSULTORIA INFORMÁTICA</h3>
                    <p>Contactese para agendar su reunión. Te ayudamos a tomar decisiones estratégicas para mejorar tu infraestructura tecnológica.</p>
                </div>
            </div>
            <div className={styles.product}>
                <p>Aproveche al máximo el poder de la web y los datos para crecer de manera inteligente.</p>
                <p>Nosotros lo ayudamos a lograrlo, con soluciones personalizadas que impulsen su éxito.</p>
                <ButtonComponent to='/contact' description='Contactame!'/>
            </div>
        </div>
    </div>
  )
}
