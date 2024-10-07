import React from 'react'
import styles from './ConsultingComponentStyles.module.css'
import consultingImg from '../assets/images/general imgs/thinking man.jpeg'
import consultingCellPhone from '../assets/images/general imgs/man with smartphone.jpeg'

export const ConsultingComponent = () => {
    return (
        <div className={styles.consultingContainer}>
            <div className={styles.overlay}>
                <div>
                    <img className={styles.thinkingMan} src={consultingImg} alt="" />
                    <img className={styles.imgCellPhoneMan} src={consultingCellPhone} alt="" />
                </div>
                <div className={styles.textConsulting}>
                    <h3>Consulta Gratuita</h3>
                    <p>Solo lo mejor</p>
                    <p>
                        ¡Aprovecha la oportunidad de contactarme por teléfono o WhatsApp sin compromiso alguno, pidéndome presupuesto y orientación sobre nuestros servicios sin compromiso alguno!
                    </p>
                </div>
            </div>
        </div>
    )
}
