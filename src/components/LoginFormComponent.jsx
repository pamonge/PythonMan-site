import React from 'react'
import styles from './LoginFormComponentStyles.module.css'

export const LoginFormComponent = () => {
  return (
    <div className={styles.loginFormContainer}>
        <form action="" className={styles.loginForm}>
            <div className={styles.formInput}>
                <label htmlFor="userName">Usuario</label>
                <input type="text" id='userName' name='userName'/>
            </div>
            <div className={styles.formInput}>
                <label htmlFor="userPassword">Contraseña</label>
                <input type="text" id='userPassword' name='userPassword' />
            </div>
            <input type="submit" value="Ingresar" />		
		</form>
    </div>
  )
}
