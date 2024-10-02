import React from 'react'
import styles from './HomePageStyles.module.css'
import pythonBackImg from '../../assets/images/site imgs/Big transparent Python Man.png'


export const HomePage = () => {
  return (
    <div className={styles.container}>
        <img src={pythonBackImg} alt="Logo" />
    </div>
  )
}
