import React, { Component } from 'react';
import './App.css';
import { get } from 'lodash';

import jpp from './Components/JSONPromise.js';
import SearchForm from './Components/Search-form.js';
import PetCard from './Components/Pet-card.js';
import Header from './Components/Header.js';

class App extends Component {
  constructor() {
    super();

      // Defining what the state of the app will be
      this.state = {
        searchResult: [],
        pet: '-',
        randomCat: '-',
        randomDog: '-',
        breeds: [],
        SearchData: {
          animal: "dog",
          breed: "Yorkshire Terrier",
          size: "M",
          sex: "M",
          location: "47130",
          age: "Baby"
        }
      }

      this.getBreedList()
    }

    // AJAX REQUEST **************************************

  // Makes a request to petfinder for a list of breeds on specified animal
    getBreedList = () => {
      console.log(this)
      return jpp(`http://api.petfinder.com/breed.list?format=json&key=30813f445b233300ac28d89179cd71c7&animal=${this.state.SearchData.animal}`)
        .then(res => {
          console.log(res)
          let rawBreeds = get(res, 'petfinder.breeds.breed', null);

          if (rawBreeds === null) return console.error('oopss')
          let breeds = rawBreeds.map(breed => breed['$t'])
          
          this.setBreeds(breeds)
        })
    }

  // Makes a request to petfinder using the api method pet.find to get an array of pets that match the arguments chosen from the search form
      getSearchPet = () => {
      let formData = this.state.SearchData
      let { animal, breed, size, sex, location, age } = formData
      return jpp(`http://api.petfinder.com/pet.find?format=json&key=30813f445b233300ac28d89179cd71c7&animal=${animal}&breed=${breed}&size=${size}&sex=${sex}&location=${location}&age=${age}&count=10`)
        .then(res => res.petfinder.pets.pet.map(this.formatPetResponse))
        .then(res => this.setSearchResult(res))
    }

    // A request to petfinder using pet.find to get a random cat for the featured pet component
    getCatFeatPet() {
      return jpp(`http://api.petfinder.com/pet.find?format=json&key=30813f445b233300ac28d89179cd71c7&animal=cat&location=47130`)
        .then(res => {
          let cats = res.petfinder.pets.pet
          let randomIndex = Math.floor(Math.random() * cats.length)
          let randomCat = cats[randomIndex]

          this.setFeaturedCat(this.formatPetResponse(randomCat))
        })
        
    }
      
  // A request to petfinder using pet.find to get a random dog for the featured pet component
    getDogFeatPet() {
      return jpp(`http://api.petfinder.com/pet.find?format=json&key=30813f445b233300ac28d89179cd71c7&animal=dog&location=47130`)
        .then(res => {
          let dogs = res.petfinder.pets.pet
          let randomIndex = Math.floor(Math.random() * dogs.length)
          let randomDog = dogs[randomIndex]

          this.setFeaturedDog(this.formatPetResponse(randomDog))
        })
        
    }
  // AJAX REQUEST END **********************************

  // SET STATE *****************************************

  // The following functions all are used to set the state of the app
    setFeaturedCat(randomCat) {
        this.setState({
          randomCat: randomCat
        })
      }

    setFeaturedDog(randomDog) {
      this.setState({
        randomDog: randomDog
      })
    }

     setBreeds(breeds) {
      this.setState({
        breeds: breeds
      })
    }

    setSearchData = (e, value, cb) => {
      e.preventDefault();
      this.setState({
        SearchData: {
          ...this.state.SearchData,
          [value]: e.target.value
        }
      }, cb);
    }

    setSearchResult(searchResult) {
      this.setState({
        searchResult: searchResult
      })
    }

  // FORMATTING RESPONSE ********************************
  formatPetResponse(response) {
    let photo;
    let shortDescrpt;

    if (response.petfinder && response.petfinder.pet) {
      var pet = response.petfinder.pet;
    } else {
      var pet = response
    }

    let longDescrpt = pet.description ? (pet.description['$t'] || "") : "";

   
  // Used to set the default image if pet has no photo
    if (pet.media && pet.media.photos && pet.media.photos.photo[2]) {
      console.log('has photo')
      photo = pet.media.photos.photo[2]['$t']
    } else {
      photo = "https://www.rspcansw.org.au/wp-content/themes/noPhotoFound.png"
    }

  // Checks length of description; Sets description to a 300 character max
    if(longDescrpt && longDescrpt.length > 300) {
        shortDescrpt = longDescrpt.slice(0, 300) + '...'
    }
    
    console.log(pet)
    
    if (!pet) {
      return this.getPet
    }
    return {
      age: get(pet, 'age["$t"]', "Not Known"),
      name: get(pet, 'name["$t"]', "very lovable!"),
      breed: get(pet, 'breeds.breed["$t"]', 'animal["$t"]'),
      description: get(pet, 'description["$t"]', ""),
      picture: get(pet, 'media.photos.photo[2]["$t"]', "https://www.rspcansw.org.au/wp-content/themes/noPhotoFound.png"),
      sex: get(pet, 'sex["$t"]', "N/A"),
      size: get(pet, 'size["$t"]', "N/A"),
      city: get(pet, 'contact.city["$t"]', "N/A"),
      state: get(pet, 'contact.state["$t"]', "N/A"),
      zip: get(pet, 'contact.zip["$t"]', ""),
      phone: get(pet, 'contact.phone["$t"]', "N/A"),
      email: get(pet, 'contact.email["$t"]', "N/A")

    }
  }
  // FORMATTING RESPONSE END *****************************

  // ***** RENDER *******************************************

  // Renders the main components of app
    render() {

      if(this.state.searchResult.length === 0) {
        return (
          <div className="App">

            <div className="main-content-container">
              <SearchForm
             breeds={ this.state.breeds }
             formData={ this.formData }
             setSearchData={ this.setSearchData } 
             getBreedList={ this.getBreedList } 
             getSearchPet={ this.getSearchPet.bind(this) }/>
             </div>

           </div>
         )
      } else {
        return (
          <div className="App">
            <Header />
            <div className="main-content-container">
              { this.state.searchResult.map((result, i) => <PetCard key={ i } pet={ result } />) }
            </div>
          </div>
        )
      }
      
    }
  }


export default App;
