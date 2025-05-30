import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './RegisterFormComponentStyles.module.css'

export const RegisterFormComponent = () => {
  return (
    <div className={styles.formContainer}>
        <form action="">
            <h3>FORMULARIO DE REGISTRO</h3>
            <div className={styles.formData}>
                <label htmlFor="">Nombre de usuario</label>
                <input type="text" />
                {/* Falta la logica del condicional */}
                <span>Este campo es requerido</span>
                <span>El nombre de usuario elegido no se encuentra disponible.</span>
                <p>
                    El nombre de usuario debe contener 150 caracteres o menos.
                    Puede contener:
                    <ul>
                        <li>Letras</li>
                        <li>Números</li>
                        <li>Simbolos, unicamente: @, ., +, -, _ </li>
                    </ul>
                </p>
            </div>
            <div className={styles.formData}>
                <label htmlFor="">Nombre/s</label>
                <input type="text" />
                <label htmlFor="">Apellido/s</label>
                <input type="text" />
                <label htmlFor="">Correo electronico</label>
                <input type="email" />
                
            </div>
            <div className={styles.formData}>
                <label htmlFor="">Contraseña</label>
                <input type="password" />
                <span>Contraseña invalida</span>
                <span>Campo requerido</span>
                <p>
                    Su contraseña debe cumplir con:
                    <ul>
                        <li>no puede ser similar a su información personal</li>
                        <li>Contener al menos 8 caracteres</li>
                        <li>No ser contraseñas de uso común</li>
                        <li>No puede ser enteramente numerica</li>
                    </ul>
                </p>
                <label htmlFor="">Confirmar contraseña</label>
                <input type='text' />
                <p>Ingrese por favor la misma contraseña anterior</p>
                <span>Las contraseñas no son iguales</span>
                <span>Campo requeerido</span>
            </div>
            <div className={styles.formData}>
                
                <label htmlFor=""><input type="checkbox" name="" id="" /> Acepto los <NavLink to={"/terms-conditions"} >terminos y condiciones</NavLink></label>
                
                <label htmlFor=""><input type="checkbox" name="" id="" /> Acepto las <NavLink to={"/privacy-policies"}> politicas de privacidad</NavLink></label>
            </div>
            <div className={styles.buttonContainer}>
                <input type="submit" value="Registrar" />
            </div> 
        </form>
    </div>
  )
}
