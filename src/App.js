import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
// import Modal from './Components/Modal/Modal';
import Menu from './Components/Menu/Menu';
import Nav from './Components/Nav/Nav';
import Homepage from './Components/Homepage/Homepage';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.toggleModal = this.toggleModal.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.state = {
      menuActive: false,
      showModal: false
    }
  }

  toggleMenu() {
    this.setState({menuActive: !this.state.menuActive})
  }

  toggleModal() {
    const doesShow = this.state.showModal;
    this.setState({showModal: !doesShow})
    console.log('toggle toggle')
  }

  render() {return (
    <div className="App">
      <Menu toggleMenu={this.toggleMenu} active={this.state.menuActive}/>
      <Nav  toggleModal={this.toggleModal}/>
      <Homepage />
      {/* {this.state.showModal ? <Modal toggleModal={this.toggleModal} modalBool={this.state.showModal}/> : null} */}
    </div>
  )};
}

export default App;