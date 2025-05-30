import React from 'react'
import { TermsAndConditionsComponent } from '../../components/TermsAndConditionsComponent'
import styles from './TermsAndConditionsPageStyles.module.css'

export const TermsAndConditionsPage = () => {
  return (
    <div className={styles.termsContainer}>
        <TermsAndConditionsComponent />        
    </div>
  )
}
