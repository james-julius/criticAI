import React, { useState } from 'react';
import Menu from '../Components/Menu';
import Nav from '../Components/Nav';
import { Link } from 'react-router-dom';
import '../Master.scss';

export default function RestaurantInput() {
    const [availableCuisines, setAvailableCuisines] = useState(['Italian', 'French', 'Indian', 'Thai', 'Greek', 'Turkish', 'American', 'British', 'Japanese', 'Chinese']);
    const [activeCuisines, setActiveCuisines] = useState([]);

    function addCuisine(event) {
        let tempCuisines = activeCuisines;
        if (!tempCuisines.includes(event.target.value)) {
            tempCuisines.push(event.target.value);
            setActiveCuisines(tempCuisines);
            setAvailableCuisines(availableCuisines.filter(value => value !== event.target.value));
        }
    }

    function removeCuisine(cuisine) {
        if (!availableCuisines.includes(cuisine)) {
            setActiveCuisines(activeCuisines.filter(value => value !== cuisine));
            let tempCuisines = availableCuisines;
            tempCuisines.push(cuisine);
            setAvailableCuisines(tempCuisines);
        }
    }

    function cuisineMapper() {
        let cuisines = availableCuisines;
        // console.log('mapping the following availableCuisines array')
        // console.log(availableCuisines);
        return cuisines.map((cuisine) => <option key={cuisine} value={cuisine}>{cuisine}</option>);
    }

    function cuisineCards() {
        return (
        <div id="cuisineCards">
            {activeCuisines.map(cuisineChoice => 
            <div className="cuisineCard">
                <h5>{cuisineChoice}</h5>
                <span onClick={() => removeCuisine(cuisineChoice)}>X</span>
            </div>)}
        </div>
        )
    }

    return (
        <div className="App">
            <Menu/>
            <Nav/>
            <div id="restaurantInput">
                <h2>Let's understand your taste</h2>
                <h3>What are your favourite restaurants?</h3>
                    <input type="text"/>
                <h3>Favourite cuisines?</h3>
                <select onChange={addCuisine}>
                    <option selected="selected" value="default">Select...</option>
                    {cuisineMapper()}
                </select>
                {cuisineCards()}
                <Link to="restaurants">
                    <button>Get Recommendations</button>
                </Link>
            </div>
        </div>
    )
    
}