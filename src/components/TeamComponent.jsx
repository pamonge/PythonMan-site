import React from 'react'
import styles from './TeamComponentStyles.module.css'
import { TeamMemberComponent } from './TeamMemberComponent'

export const TeamComponent = ({ teamData }) => {
    return (
        <div className={styles.teamContainer}>
            <div className={styles.teamGrid}>

                {teamData.map((member) => (
                    <TeamMemberComponent teamMember={member} />
                ))}
                
            </div>
        </div>
    )
}
