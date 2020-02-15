import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Modal from './Components/Modal/Modal';
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
    this.setState({showModal: !this.state.showModal})
  }

  render() {return (
    <div className="App">
      <Nav />
      <Modal toggleModal={this.toggleModal} modalBool={this.state.showModal}/>
    </div>
  )};
}

export default App;
