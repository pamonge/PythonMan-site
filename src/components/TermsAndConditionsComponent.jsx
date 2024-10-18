import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './TermsAndConditionsComponentStyles.module.css'
import { ButtonComponent } from './ButtonComponent'

export const TermsAndConditionsComponent = () => {
  return (
    <div className={styles.tycContainer}>
        <div className={styles.tycText}>
            <h3>TÉRMINOS Y CONDICIONES</h3>
            <ol>
                <li> Aceptación de los Términos</li>
                <p>
                    Al acceder y utilizar este sitio web, usted acepta estar sujeto a estos términos y condiciones. Si no está de acuerdo con alguna parte de los términos, debe dejar de usar el sitio inmediatamente.
                </p>
                <li>Uso del Sitio</li>
                <p>
                    El contenido y los servicios ofrecidos en este sitio web son solo para su uso personal y no comercial. No puede modificar, distribuir, transmitir, exhibir, ejecutar, reproducir, publicar, licenciar, crear trabajos derivados de, transferir o vender cualquier información o contenido obtenido de este sitio sin el consentimiento expreso por escrito del propietario.
                </p>
                <li>Propiedad Intelectual</li>
                <p>
                    Todo el contenido de este sitio, incluyendo texto, gráficos, logotipos, imágenes, y software, es propiedad del propietario del sitio y está protegido por las leyes de derechos de autor y otras leyes de propiedad intelectual. El uso no autorizado de dicho contenido puede violar estas leyes y los términos establecidos aquí.
                </p>
                <li>Privacidad</li>
                <p>
                    El uso de este sitio está sujeto a nuestra [Política de Privacidad], la cual detalla cómo recopilamos, usamos y protegemos su información personal.
                </p>
                <li>Enlaces a Sitios Externos</li>
                <p>
                    Este sitio puede contener enlaces a otros sitios web operados por terceros. No nos hacemos responsables del contenido o las prácticas de privacidad de esos sitios. El uso de sitios de terceros es bajo su propio riesgo.
                </p>
                <li>Limitación de Responsabilidad</li>
                <p>
                    El propietario del sitio no se responsabiliza por ningún daño directo, indirecto, incidental, especial o consecuente que surja del uso o la imposibilidad de usar el sitio, incluidos daños por pérdida de beneficios, interrupción comercial, pérdida de programas u otros datos.
                </p>
                <li>Cambios en los Términos</li>
                <p>
                    Nos reservamos el derecho de modificar estos términos y condiciones en cualquier momento. Cualquier cambio será efectivo inmediatamente después de ser publicado en el sitio. Es su responsabilidad revisar regularmente los términos y condiciones para asegurarse de que entiende los términos que se aplican.
                </p>
                <li>Ley Aplicable</li>
                <p>
                    Estos términos y condiciones se regirán e interpretarán de acuerdo con las leyes [país o jurisdicción], y cualquier disputa relacionada será resuelta en los tribunales competentes de dicha jurisdicción.
                </p>
                <li>Contacto</li>
                <p>
                    Si tiene alguna pregunta sobre estos términos, puede contactarnos a través de <NavLink to={"/contact"} >los siguiente medios</NavLink>.
                </p>
            </ol>
            <div className={styles.buttonContainer}>
                <ButtonComponent to='/register' description='Volver' />
                <ButtonComponent to='/' description='Inicio' />
            </div>
        </div>
    </div>
  )
}