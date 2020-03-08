import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Master.scss';
import { Switch, Route } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import RestaurantInput from './Pages/RestaurantInput';
import Restaurants from './Pages/Restaurants';
import { useGlobalState } from './Hooks/useGlobalState';

export default function App() {
  const [menuActive, setMenuActive] = useGlobalState('menuActive');
  const [inverseColor, setInverseColor] = useGlobalState('inverseColor');
  const [showModal, setShowModal] = useGlobalState('showModal');
  function toggleMenu() {
    setMenuActive(!menuActive)
    setInverseColor(!inverseColor);
    // console.log('toggle toggle');
  }

    return (
    <Switch>
      <Route exact path="/" component={Homepage}/>
      <Route exact path="/restaurant-input" component={RestaurantInput}/>
      <Route exact path="/restaurants" component={Restaurants}/>
    </Switch>
      // <Nav colorState={inverseColor} toggleModal={() => setShowModal(!showModal)}/>
      // {/* {showModal ? <Modal toggleModal={toggleModal} modalBool={showModal}/> : null} */}
    // </div>
  );
}