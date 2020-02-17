import React from 'react';
import './RestaurantInput.scss';

class RestaurantInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            availableCuisines: ['Italian', 'French', 'Indian', 'Thai', 'Greek', 'Turkish', 'American', 'British', 'Japanese', 'Chinese'],
            cuisines: []
        }
        this.cuisineMapper = this.cuisineMapper.bind(this);
        this.cuisineCards = this.cuisineCards.bind(this);
        this.addCuisine = this.addCuisine.bind(this);
        this.removeCuisine = this.removeCuisine.bind(this);
    }

    addCuisine(event) {
        let tempCuisines = this.state.cuisines;
        if (!tempCuisines.includes(event.target.value)) {
            tempCuisines.push(event.target.value);
            this.setState({cuisines: tempCuisines});
            this.setState({availableCuisines: this.state.availableCuisines.filter(value => value !== event.target.value)});
        }
    }

    removeCuisine(cuisine) {
        if (!this.state.availableCuisines.includes(cuisine)) {
            this.setState({cuisines: this.state.cuisines.filter(value => value !== cuisine)});
            let tempCuisines = this.state.availableCuisines;
            tempCuisines.push(cuisine);
            this.setState({availableCuisines: tempCuisines});
        }
    }

    cuisineMapper() {
        let cuisines = this.state.availableCuisines;
        // console.log('mapping the following availableCuisines array')
        // console.log(this.state.availableCuisines);
        return cuisines.map((cuisine) => <option key={cuisine} value={cuisine}>{cuisine}</option>);
    }

    cuisineCards() {
        return (
        <div id="cuisineCards">
            {this.state.cuisines.map(cuisineChoice => 
            <div className="cuisineCard">
                <h5>{cuisineChoice}</h5>
                <span onClick={() => this.removeCuisine(cuisineChoice)}>X</span>
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
             <select onChange={this.addCuisine}>
                 <option selected="selected" value="default">Select...</option>
                 {this.cuisineMapper()}
             </select>
             {this.cuisineCards()}
             <button>Get Recommendations</button>
        </div>
        )
    }
}

export default RestaurantInput;