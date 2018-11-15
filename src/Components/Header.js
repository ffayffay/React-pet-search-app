import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default () => {
	return (

		<header>
			<h1>PetSearch</h1>
			<nav>
				<Link to="/searchanimaltype">Search</Link>
				<Link exact to="/">Featured Pets</Link>
			</nav>
		</header>

	)
}