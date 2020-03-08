import React from 'react';
import RestaurantCard from '../Components/RestaurantCard';
import Menu from '../Components/Menu';
import Nav from '../Components/Nav';
import '../Master.scss';

class Restaurants extends React.Component {
    render() {return (
        <div className="App">
            <Menu/>
            <Nav/>
            <div id="Restaurants">
                <RestaurantCard />
            </div>
        </div>
    )}
}

export default Restaurants;