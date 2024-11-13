import React from 'react'

export const TeamMemberComponent = ({ teamMember }) => {
	return (
		<div>
			<div key={teamMember.id}>
				<img src={teamMember.picture} alt={teamMember.name} />
				<p>{teamMember.name}</p>
				<p>
					{teamMember.description}
				</p>
			</div>
		</div>
	)
}
