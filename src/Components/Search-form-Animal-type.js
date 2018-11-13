import React from 'react';

export default (props) => {
	return (
		<div className="search-form-item">
			<form>
				<label>Select Animal Type</label>
				<select name="animal" value={props.value} onChange={(e) => { 
	// When the value of the select element is change the state is set for formData.animal to new value and getBreedList function is called
					 	props.setSearchData(e, "animal", props.getBreedList)	
					}
				}>
					<option value="dog">Dog</option>
					<option value="cat">Cat</option>
					<option value="smallfurry">Small Furry</option>
					<option value="bird">Bird</option>
					<option value="reptile">Reptile</option>
					<option value="horse">Horse</option>
					<option value="barnyard">Barnyard</option>
				</select>
			</form>

			<div className="button-wrap">
				<button>Next</button>
			</div>
		</div>
	)
}