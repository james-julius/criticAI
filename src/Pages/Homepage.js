import React from 'react';
import { Link } from 'react-router-dom';
import { useGlobalState } from '../Hooks/useGlobalState';
import Menu from '../Components/Menu';
import Nav from '../Components/Nav';
import '../Master.scss';

export default function Homepage() {
  const [menuActive, setMenuActive] = useGlobalState('menuActive');
  const [inverseColor, setInverseColor] = useGlobalState('inverseColor');
  const [showModal, setShowModal] = useGlobalState('showModal');

    return(
        <div className="App">
            <Menu active={menuActive}/>
            <Nav colorState={inverseColor} toggleModal={() => setShowModal(!showModal)}/>
            <div id="home">
                {/* <h1>CriticAI</h1> */}
                <h2>Discover new restaurants. <br/><br/> Tell us your favourites and we'll give you personalised recommendations.</h2>
                <Link to="/restaurant-input">
                    <button>Get Started</button>
                </Link>
            </div>
        </div>
    )
}