import React from 'react';
import '../Master.scss';
import SomSaa from '../Resources/Assets/somsaa.jpg';
import fullHeart from '../Resources/Assets/fullHeart.png';
import transparentHeart from '../Resources/Assets/transparentHeart.png';

const RestaurantCard = (props) => {
    
    return (
        <div className="restaurantCard">
            <div id="favouriteIcon">
                {props.isFavourite ? <img src={fullHeart} alt="A full heart"/> : <img src={transparentHeart} alt="A transparent heart"/>}
            </div>
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