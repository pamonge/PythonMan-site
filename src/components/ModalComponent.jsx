import React from 'react';
import styles from './ModalComponentStyles.module.css';
import x from '../assets/icons/x.png'

export const ModalComponent = ({ isOpen, icon, message, onClose } ) => {
  return (
    <div className={ isOpen? (styles.modalContainer) : (styles.modalHidden)}>
        <div className={styles.modalCard}>
            <button className={styles.closeButton} onClick={onClose}><img className={styles.modalImg} src={x} alt='close' /></button>
            
            <div className={styles.modalMessage}>
                <img className={styles.modalIcon} src={icon} alt='modal image' />
                <p>{message}</p>
            </div>
            <div className={styles.buttonContainer}>
                <button className={styles.button} onClick={onClose}>Aceptar</button>
            </div>
        </div>
    </div>
  )
}
