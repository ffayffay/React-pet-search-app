import React from 'react';

export default (props) => {

	return(
		<div className="card-info">

					<div className="pet-card-wrap">
						<div className="pet-card">
							<span className="pet-name-header">
								<h2 className="pet-name">{props.pet.name}</h2>
							</span>
							<div className="card-img">
								<img src={props.pet.picture}
									 alt="animal" />
							</div>
							<h3 className="location">
								{props.pet.city}, {props.pet.state} {props.pet.zip}
							</h3>
						</div>
					</div>

			</div>
	)
}