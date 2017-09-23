import React, {Component} from 'react';
import logo from '../assets/media/logo.png';
import '../assets/style/App.css';

class Header extends Component {
  render(){
    return(
      <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>Rebel Alliance</h1>
          </div>
      </div>
    )}
}

export default Header;