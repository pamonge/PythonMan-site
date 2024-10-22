import React from 'react'
import styles from './ProductComponentStyles.module.css'
import basicWeb from '../assets/images/general imgs/webSiteProduct.png'
import dataAnalisis from '../assets/images/general imgs/dataAnalisisProduct.png'

export const ProductComponent = () => {
  return (
    <div className={styles.productContainer}>
        <h3>Productos</h3>
        <div className={styles.productDescription}>
            <div className={styles.product}>
                <img src={dataAnalisis} alt="Data Analisis" />
                <h4>ANALISIS DE DATOS</h4>
                <p>Permite contar con información oportuna y precisa al momento de tomar deciciones de negocios.</p>
            </div>
            <div className={styles.product}>
                <img src={basicWeb} alt="Web Site" />
                <h4>DISEÑO DE SITIOS Y APLICACIONES WEB</h4>
                <p>Permite acceso al sistema desde cualquier plataforma en cualquier lugar y momento.</p>
            </div>
            <div className={styles.product}>
                <p>aproveche al máximo el poder de la web y los datos para crecer de manera inteligente.</p>
                <p>Nosotros lo ayudamos a lograrlo, con soluciones personalizadas que impulsen su éxito.</p>
            </div>
        </div>
    </div>
  )
}
