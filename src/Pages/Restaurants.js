import React, { useState } from 'react';
import RestaurantCard from '../Components/RestaurantCard';
import Menu from '../Components/Menu';
import Nav from '../Components/Nav';
import '../Master.scss';

export default function Restaurants() {
    const [favourites, setFavourites] = useState([]);

    return (
        <div className="App">
            <Menu/>
            <Nav/>
            <div id="Restaurants">
                <RestaurantCard  isFavourite={true}/>
            </div>
        </div>
    )
}