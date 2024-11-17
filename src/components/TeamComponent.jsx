import React from 'react'
import styles from './TeamComponentStyles.module.css'
import { TeamMemberComponent } from './TeamMemberComponent'

export const TeamComponent = ({ teamData }) => {
    return (
        <div className={styles.teamContainer}>
            <div className={styles.teamGrid}>

                {teamData.map((member) => (
                    <TeamMemberComponent key={member.id} teamMember={member} />
                ))}
                
            </div>
        </div>
    )
}
