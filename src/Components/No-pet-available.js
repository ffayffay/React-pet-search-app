import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default (props) => {
	return (
		<div className="main-content-container empty-card-info">
			<div className="empty-card-img">
				<img src="https://cdn.instructables.com/FV5/090M/GU4MC7OA/FV5090MGU4MC7OA.LARGE.jpg"
					 alt="https://www.rspcansw.org.au/wp-content/themes/noPhotoFound.png" />
			</div>
			<h2>Sorry! No pets matching that breed available near you.</h2>
			<p>Try a new search</p>

			<div className="button-wrap">
				<Link exact to="/">
					<button>Back to Search</button>
				</Link>
			</div>
		</div>
	)
}