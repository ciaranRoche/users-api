import React, {Component} from 'react';
import logo from '../assets/media/logo.png';
import '../assets/style/App.css';

// class to make applying a header more dynamic
class Header extends Component {
  render(){
    return(
      <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>The Resistance</h1>
          </div>
      </div>
    )}
}

export default Header;