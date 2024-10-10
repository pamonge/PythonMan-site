import React from 'react'
import styles from './MailComponentStyles.module.css'
import mailIcon from '../assets/icons/mail.png'

export const MailComponent = () => {
  return (
    <a className={styles.mailLink} href="mailto:adolfogonzal@gmail.com" target='_blank'>
        <img src={mailIcon} alt="Mail" /> 
        <p>adolfogonzal@gmail.com</p>
    </a>
  )
}
