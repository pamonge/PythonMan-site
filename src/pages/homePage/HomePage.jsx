import React from 'react'
import styles from './HomePageStyles.module.css'
import pythonBackImg from '../../assets/images/site imgs/Big transparent Python Man.png'
import { BiografiComponent } from '../../components/BiografiComponent'


export const HomePage = () => {
  return (
    <div className={styles.container}>
        <img className={styles.initialBigLogo} src={pythonBackImg} alt="Logo" />
        <BiografiComponent />
    </div>
  )
}
