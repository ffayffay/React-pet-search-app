import React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";

export default (props) => {
	console.log(props)
	return (
		<div className="search-form-item">
			<form onSubmit={ (e) => {
// When the form is submitted the getSearchPet function is called
					e.preventDefault()
					props.getSearchPet()
						.then(_ => props.history.push('/pet'))

				} }>
				<label>Enter Zip Code</label>
				<input type="text" name="location" value={props.value} onChange={(e) => props.setSearchData(e, "location")}/>
				<div className="button-wrap">
					<button type="submit">submit</button>
				</div>
			</form>
	
		</div>
	)
}