import React from 'react';
import './RestaurantInput.scss';

class RestaurantInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cuisines: ['Thai', 'Turkish']
        }
        this.cuisineMapper = this.cuisineMapper.bind(this);
        this.cuisineCards = this.cuisineCards.bind(this);
    }

    cuisineMapper() {
        let cuisinesOnOffer = ['Italian', 'French', 'Indian', 'Thai', 'Greek', 'Turkish', 'American', 'British', 'Japanese', 'Chinese'];
        return cuisinesOnOffer.map((cuisine) => <option key={cuisine} value="cuisine">{cuisine}</option>);
    }
    cuisineCards() {
        return (
        <div id="cuisineCards">
            {this.state.cuisines.map(cuisineChoice => 
            <div className="cuisineCard">
                <h5>{cuisineChoice}</h5>
                <span>X</span>
            </div>)}
        </div>
        )
    }

    render() {return (
        <div id="restaurantInput">
             <h2>Let's understand your taste</h2>
             <h3>What are your favourite restaurants?</h3>
                <input type="text"/>
            <h3>Favourite cuisines?</h3>
             <select>
                 {this.cuisineMapper()}
             </select>
             {this.cuisineCards()}
        </div>
        )
    }
}

export default RestaurantInput;