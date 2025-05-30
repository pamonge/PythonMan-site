import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './PrivacyPoliciesComponentStyles.module.css'

export const PrivacyPoliciesComponent = () => {
  return (
    <div className={styles.ppContainer}>
        <div className={styles.ppText}>
            <h3>POLITICAS DE PRIVACIDAD</h3>
            <ol>
                <li>Información que Recopilamos</li>
                <p>
                    Recopilamos diferentes tipos de información, que incluyen:
                </p>
                <ul>
                    <li>Información Personal</li>
                    <p>
                        Nombre, dirección de correo electrónico, dirección física, número de teléfono, etc.
                    </p>
                    <li>Información Técnica</li>
                    <p>
                        Dirección IP, tipo de navegador, tiempo de acceso, páginas visitadas, y otras estadísticas de uso.
                    </p>
                    <li>Información de Cookies</li>
                    <p>
                        Usamos cookies y tecnologías similares para mejorar la experiencia del usuario y analizar el tráfico del sitio.
                    </p>
                </ul>
                <li>Cómo Utilizamos tu Información</li>
                <p>La información que recopilamos se usa para:</p>
                <ul>
                    <li>Proveer y mejorar nuestros servicios.</li>
                    <li>Procesar transacciones y administrar tu cuenta.</li>
                    <li>Comunicarnos contigo, enviar notificaciones y responder a consultas.</li>
                    <li>Analizar el tráfico del sitio web y mejorar la experiencia del usuario.</li>
                </ul>
                <li>Compartir tu Información</li>
                <p>
                    No vendemos ni alquilamos tu información personal a terceros. Sin embargo, podemos compartir tu información en las siguientes circunstancias:
                </p>
                <ul>
                    <li>Con proveedores de servicios que nos asisten en la operación de nuestro sitio web o la provisión de nuestros servicios.</li>
                    <li>Si es requerido por ley o en respuesta a una solicitud legal válida.</li>
                    <li>Para proteger nuestros derechos, seguridad y propiedad o los de otros usuarios.</li>
                </ul>
                <li>Protección de tu Información</li>
                <p>
                    Implementamos medidas de seguridad razonables para proteger tu información personal contra el acceso no autorizado, la alteración, divulgación o destrucción.
                </p>
                <li>Derechos de los Usuarios</li>
                <p>Tienes los siguientes derechos con respecto a tu información personal:</p>
                <ul>
                    <li>Acceso a los datos que hemos recopilado.</li>
                    <li>Corrección de cualquier dato incorrecto.</li>
                    <li>Solicitar la eliminación de tus datos personales.</li>
                    <li>Restringir o oponerte al procesamiento de tus datos.</li>
                    <li>Puedes ejercer estos derechos contactándonos a través de <NavLink to={'/contact'}>nuestros medios de contacto</NavLink>.</li>
                </ul>
                <li>Retención de Datos</li>
                <p>
                    Conservamos tu información personal solo durante el tiempo necesario para cumplir con los fines para los que fue recopilada, a menos que la ley requiera o permita un período de retención más largo.
                </p>
                <li>Enlaces a Otros Sitios</li>
                <p>
                    Nuestro sitio web puede contener enlaces a sitios web de terceros. No somos responsables por las prácticas de privacidad ni el contenido de esos sitios.
                </p>
                <li>Cambios a esta Política de Privacidad</li>
                <p>
                    Podemos actualizar esta política de privacidad de vez en cuando. Cualquier cambio será publicado en esta página y estará vigente a partir de la fecha de actualización.
                </p>
                <li>Contacto</li>
                <p>
                    Si tienes preguntas o inquietudes sobre esta política de privacidad, contáctanos a través de <NavLink to={'/contact'}>nuestros medios de contacto</NavLink>.
                </p>
            </ol>
        </div>
    </div>
  )
  
}


9. 
