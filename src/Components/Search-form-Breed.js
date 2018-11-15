import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default (props) => {
	console.log(props)
	return (
		<div className="search-form-item">
			<form>
				<label>Select Animal Breed</label>
				<select name="breed" value={props.value} onChange={(e) => props.setSearchData(e, "breed")}>
					{
						props.breeds.map((breed, index) =>
							<option value={ breed } key={index}>{ breed }</option>)
	// The map() method is used on the breeds array to create an options element for each breed type in the array							
					}
				</select>
			</form>

			<div className="button-wrap">
				<Link to="/searchlocation">
					<button>Next</button>
				</Link>
			</div>
		</div>
	)
}