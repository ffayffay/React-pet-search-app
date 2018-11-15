import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default (props) => {

	return (
		<div>

			<div className="main-content-container feat-pet-content-wrap">
					
				<div className="welcome">
					<h1>Welcome!</h1>
				</div>
				
				<div className="feat-pet-banner">
					<h2>Featured Pets</h2>
				</div>
				<div className="feat-pet-card-wrap">
				
					<div className="cat-card">
						<div className="card-img">
							<img src={props.randomCat.picture}
								 alt="Cat" />
						</div>
						<span className="fp-name-header">
							<h1 className="pet-name">{props.randomCat.name}</h1>
						</span>
						{/*<h3 className="location">
							{props.randomCat.city}, {props.randomCat.state} {props.randomCat.zip}
						</h3>*/}
					</div>

					<div className="dog-card">
						<div className="card-img">
							<img src={props.randomDog.picture}
								 alt="Dog" />
						</div>
						<span className="fp-name-header">
							<h1 className="pet-name">{props.randomDog.name}</h1>
						</span>
						{/*<h3 className="location">
							{props.randomDog.city}, {props.randomDog.state} {props.randomDog.zip}
						</h3>*/}
					</div>

				</div>

				<div className="button-wrap">
					<Link to="/searchanimaltype">
						<button className="start-search-btn">Start Search</button>
					</Link>
				</div>
			</div>
		</div>)
}