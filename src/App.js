import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
// import Modal from './Components/Modal/Modal';
import Homepage from './Components/Homepage/Homepage';
import Nav from './Components/Nav/Nav';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.toggleModal = this.toggleModal.bind(this);
    this.state = {
      showModal: false
    }
  }

  toggleModal() {
    const doesShow = this.state.showModal;
    this.setState({showModal: !doesShow})
    console.log('toggle toggle')
  }

  render() {return (
    <div className="App">
      <Nav toggleModal={this.toggleModal}/>
      <Homepage />
      {/* {this.state.showModal ? <Modal toggleModal={this.toggleModal} modalBool={this.state.showModal}/> : null} */}
    </div>
  )};
}

export default App;