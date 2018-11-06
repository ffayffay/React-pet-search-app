import React from 'react';

export default class DetailedPetCard extends React.Component {
	constructor(props) {
		super(props);

			this.state = {
				showMore: false
			}
		}	

		toggleShowMore = () => {
			this.setState({
				showMore: !this.state.showMore
			})
		}

	}

	render() {
		return(
			<div className="pet-card-content-wrap">
				<div className="card-img">
					<img src={props.pet.picture}
						 alt="https://www.rspcansw.org.au/wp-content/themes/noPhotoFound.png" />
				</div>
				<div className="pet-info">
					<h1><small>Hi, I'm </small>{props.pet.name}</h1>
					<ul>
						<li>I am a {props.pet.breed}</li>
						<li>My age is {props.pet.age}</li>
						<li>Sex: {props.pet.sex}</li>
						<li>I am located in {props.pet.city}, {props.pet.state} {props.pet.zip}</li>
					</ul>
					<div className="contact-wrap"><p>To adopt me please call: {props.pet.phone} or email: {props.pet.email}</p></div>
					<div className="description-wrap">
						{
							!this.state.showMore 
								? <p>{ props.pet.truncatedDescription !== '' ? props.pet.truncatedDescription : props.pet.description}</p>
								: <p>{ props.pet.description }</p>
						}
						
						{
							props.pet.truncatedDescription ? <button onClick={ this.toggleShowMore }>{ !this.state.showMore ? 'See more' : 'See less' }</button> : ''
						}
						</div>
					</div>
			</div>
		)
	}
}