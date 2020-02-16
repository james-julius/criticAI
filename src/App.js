import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
// import Modal from './Components/Modal/Modal';
import Menu from './Components/Menu/Menu';
import Nav from './Components/Nav/Nav';
import Homepage from './Components/Homepage/Homepage';
import RestaurantInput from './Components/RestaurantInput/RestaurantInput';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.toggleModal = this.toggleModal.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.state = {
      menuActive: false,
      showModal: false,
      flipColors: 0
    }
  }

  toggleMenu() {
    this.setState({menuActive: !this.state.menuActive})
    this.state.flipColors === 0 ? this.setState({flipColors: 1}) : this.setState({flipColors: 0});
    console.log('toggle toggle');
  }

  toggleModal() {
    const doesShow = this.state.showModal;
    this.setState({showModal: !doesShow});
  }

  render() {return (
    <div className="App">
      <Menu toggleMenu={this.toggleMenu} active={this.state.menuActive}/>
      <Nav colorState={this.state.flipColors} toggleModal={this.toggleModal}/>
      {this.state.menuActive ? <RestaurantInput /> : <Homepage getStarted={this.toggleMenu}/>}
      {/* {this.state.showModal ? <Modal toggleModal={this.toggleModal} modalBool={this.state.showModal}/> : null} */}
    </div>
  )};
}

export default App;