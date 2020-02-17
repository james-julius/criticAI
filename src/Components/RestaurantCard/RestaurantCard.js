import React from 'react';
import './RestaurantCard.scss';
import SomSaa from './somsaa.jpg';

const RestaurantCard = (props) => {
    return (
        <div className="restaurantCard">
            <img src={SomSaa} alt="picture of restaurant"/>
            <h2>1.</h2>
            <span className="accentcol"></span>
            <h3>Som Saa</h3>
            <p>Som Saa is a delightful Thai restaurant that has a bustling atmosphere, serves delicious dishes, and is the perfect stop for date-night or a culinary adventure. Must try.</p>
            <span className="accentbar"></span>
            <span className="cuisine">Thai</span>
            <span className="price">£££</span>
            <span className="cta">Book Now</span>
        </div>
    )
}

export default RestaurantCard;