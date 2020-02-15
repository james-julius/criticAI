import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Sidebar from './Components/Sidebar/Sidebar';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.toggleSidebar = this.toggleSidebar.bind(this);

    this.state = {
      showSidebar: false
    }
  }

  toggleSidebar() {
    this.setState({showSidebar: !this.state.showSidebar})
  }

  render() {return (
    <div className="App">
      <Sidebar toggleSidebar={this.toggleSidebar}/>
    </div>
  )};
}

export default App;
