import React from 'react';
import PetCardInfo from './Pet-card-info.js';

export default (props) => {
	return (
		<div className="pet-card-container">
			<div className="pet-card">
				<PetCardInfo pet={props.pet} />
   			</div>
		</div>
		)
}

// Using a ternary operator to display the NoPetCardInfo component if isPetEmpty is equal to true
// othewise the PetCardInfo component is displayed