import React from 'react'
import styles from './TeamComponentStyles.module.css'

export const TeamComponent = ({ teamData }) => {
  return (
    <div className={styles.teamContainer}>
        <div className={styles.teamGrid}>

            {teamData.map((member) => {
                <div key={member.key}>
                    <img src={member.picture} alt={member.name} />
                    <p>{member.name}</p>
                    <p>
                        {member.description}
                    </p>
                </div>
            })}
            
        </div>
    </div>
  )
}
