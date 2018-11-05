import React from 'react';

export default (props) => {

	return(
		<div className="card-info">

					<div className="pet-card-wrap">
						<div className="pet-card">
							<span className="pet-name-header">
								<h1 className="pet-name">{this.props.pet.name}</h1>
							</span>
							<div className="card-img">
								<img src={this.props.pet.picture}
									 alt="animal" />
							</div>
							<h3 className="location">
								{this.props.pet.city}, {this.props.pet.state} {this.props.pet.zip}
							</h3>
						</div>
					</div>
				}

			</div>
	)
}