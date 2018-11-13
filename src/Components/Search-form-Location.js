import React from 'react';

export default (props) => {
	return (
		<div className="search-form-item">
			<form onSubmit={ (e) => {
// When the form is submitted the getSearchPet function is called
					e.preventDefault()
					props.getSearchPet()
				} }>
				<label>Enter Zip Code</label>
				<input type="text" name="location" value={props.value} onChange={(e) => props.setSearchData(e, "location")}/>
				<div className="button-wrap">
					<button>Submit</button>
				</div>
			</form>
	
		</div>
	)
}