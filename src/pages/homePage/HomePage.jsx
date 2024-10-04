import React from 'react'
import styles from './HomePageStyles.module.css'
import pythonBackImg from '../../assets/images/site imgs/Big transparent Python Man.png'
import { BiographyComponent } from '../../components/BiographyComponent'
import { ServicesComponent } from '../../components/ServicesComponent'

export const HomePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.overlay}>
        <img className={styles.initialBigLogo} src={pythonBackImg} alt="Logo" />
        <BiographyComponent />
        <ServicesComponent />
      </div>
    </div>
  )
}
