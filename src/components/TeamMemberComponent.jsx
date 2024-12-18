import React, {useState} from 'react'

export const TeamMemberComponent = ({ teamMember}) => {

	return (
		<div>
			
			<div key={teamMember.id}>
				<img src={teamMember.picture} alt={teamMember.name} />
				<h3>{teamMember.name}</h3>
				<p>
					{teamMember.description}
				</p>
			</div>
		</div>
	)
}
