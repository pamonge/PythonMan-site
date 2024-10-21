import React from 'react'
import styles from './StorePageStyles.module.css'
import { ProductComponent } from '../../components/ProductComponent'

export const StorePage = () => {
	return (
		<div className={styles.storeContainer}>
			<ProductComponent />
		</div>
	)
}
