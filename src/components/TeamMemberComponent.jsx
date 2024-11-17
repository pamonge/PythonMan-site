import React from 'react'
import styles from './TeamMemberComponentStyles.module.css'

export const TeamMemberComponent = ({ teamMember }) => {
	return (
		<div>
			<div key={teamMember.id} className={styles.memberContainer}>
				<div className={styles.memberText} >
					<p>{teamMember.name}</p>
					<p>{teamMember.description}</p>
				</div>
				<img src={teamMember.picture} alt={teamMember.name} />
			</div>
		</div>
	)
}
