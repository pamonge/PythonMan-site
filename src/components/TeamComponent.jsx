import React from 'react'
import styles from './TeamComponentStyles.module.css'
import abril from '../assets/images/team/abril.png'
import adolfo from '../assets/images/team/adolfo.png'
import mirella from '../assets/images/team/mirella.png'
import pablo from '../assets/images/team/pablo.png'
import pedro from '../assets/images/team/pedro.png'
import veronica from '../assets/images/team/veronica.png'

export const TeamComponent = () => {
  return (
    <div className={styles.teamContainer}>
        <div className={styles.teamGrid}>
            <div >
                <img src={pablo} alt="Pablo Monge" />
                <p>PABLO MONGE</p>
                <p>
                    Tech Lead, FrontEnd Developer, BackEnd Developer, QA Tester, Linux Technician (Level Two)
                </p>
            </div>
            <div>
                <img src={abril} alt="Abril Gonzalez" />
                <p>ABRIL GONZÁLEZ</p>
                <p>
                    UX/UI Designer, Graphic Designer and Graduate in Business Image Design
                </p>
            </div>
            <div>
                <img src={veronica} alt="Veronica Sanchez Justicia" />
                <p>VERÓNICA SÁNCHEZ JUSTICIA</p>
                <p>
                    BackEnd Developer, FrontEnd Developer, System Administrator
                </p>
            </div>
            <div>
                <img src={adolfo} alt="Adolfo Gonzalez Hernanddez" />
                <p>ADOLFO GONZÁLEZ HERNÁNDEZ</p>
                <p>
                    Jefe de Proyectos y Scrum Master, Python Generalist (Level Two), Data Scientist, Data Analist, Machine Learning Engineer, Quantum Holographic Engineer (Level One)
                </p>
            </div>
            <div>
                <img src={pedro} alt="Pedro Duran" />
                <p>PEDRO DURÁN</p>
                <p>
                    Data Analist, Data Scientist, Pentester, Cibersecurity Engineer
                </p>
            </div>
            <div>
                <img src={mirella} alt="Mirella Picolli" />
                <p>MIRELLA PICOLLI</p>
                <p>
                    Data Analist, Data Scientist, Power BI Analist, Junior Machine Learning
                </p>
            </div>
        </div>
    </div>
  )
}
