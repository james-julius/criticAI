import React from 'react';
import './Restaurants.scss';
import RestaurantCard from '../RestaurantCard/RestaurantCard';

class Restaurants extends React.Component {
    render() {return (
        <div id="Restaurants">
            <RestaurantCard />
        </div>
    )}
}

export default Restaurants;