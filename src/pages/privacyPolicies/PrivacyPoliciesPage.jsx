import React from 'react'
import { PrivacyPoliciesComponent } from '../../components/PrivacyPoliciesComponent'
import styles from './PrivacyPoliciesPageStyles.module.css'

export const PrivacyPoliciesPage = () => {
  return (
    <div className={styles.ppContainer}>
        <PrivacyPoliciesComponent />
    </div>
  )
}
