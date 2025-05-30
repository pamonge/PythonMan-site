import React from 'react'
import styles from './LocationComponentStyles.module.css'
import locationIcon from '../assets/icons/location.png'

export const LocationComponent = () => {
  return (
    <div className={styles.locationContainer}>
        <iframe 
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3026.4244550557532!2d-3.7760317085637682!3d40.66461578326484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sar!4v1728926781984!5m2!1ses-419!2sar" 
            width="400" 
            height="300" 
            style= {{ border:0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade">
        </iframe>
        <div className={styles.address}>
            <img src={locationIcon} alt="Location Icon" />
            <p>
                C/ Paseo del Cristo, s/n 28770 Colmenar Viejo Madrid (España).
            </p>
        </div>
        
    </div>
  )
}
