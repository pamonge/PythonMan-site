import React from 'react'
import styles from './RegisterPageStyles.module.css'
import { NavLink } from 'react-router-dom'

export const RegisterPage = () => {
	return (
		<div>
			<h3>Formulario de Registro</h3>
			<form action="">
				<div>
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
				<div>
					<label htmlFor="">Nombre/s</label>
					<input type="text" />
					<label htmlFor="">Apellido/s</label>
					<input type="text" />
					<label htmlFor="">Correo electronico</label>
					<input type="email" />
					
				</div>
				<div>
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
				<div>
					<input type="checkbox" name="" id="" />
					<label htmlFor="">Acepto los <NavLink to={"/terms-conditions"} >terminos y condiciones</NavLink></label>
					<input type="checkbox" name="" id="" />
					<label htmlFor="">Acepto las <NavLink to={"/privacy-policies"}>politicas de privacidad</NavLink></label>
				</div>
				<input type="submit" value="Registrar" />

			</form>
		</div>
	)
}
