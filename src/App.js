import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Modal from './Components/Modal/Modal';
import Menu from './Components/Menu/Menu';
import Nav from './Components/Nav/Nav';
import Homepage from './Components/Homepage/Homepage';
import RestaurantInput from './Components/RestaurantInput/RestaurantInput';
import Restaurants from './Components/Restaurants/Restaurants';
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
    <div className="App">
      <Menu toggleMenu={toggleMenu} active={menuActive}/>
      <Nav colorState={inverseColor} toggleModal={() => setShowModal(!showModal)}/>
      {menuActive ? <RestaurantInput /> : <Homepage getStarted={toggleMenu}/>}
      {/* <Restaurants /> */}
      {/* {showModal ? <Modal toggleModal={toggleModal} modalBool={showModal}/> : null} */}
    </div>
  );
}