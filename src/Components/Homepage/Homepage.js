import React from 'react';
import './Homepage.scss';

const Homepage = (props) => {
    return(
        <div id="homepage">
            {/* <h1>CriticAI</h1> */}
            <h2>Discover new restaurants. <br/><br/> Tell us your favourites and we'll give you personalised recommendations.</h2>
            <button onClick={props.getStarted}>Get Started</button>
        </div>
    )
}

export default Homepage;