import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import logo from '../assets/media/logo.svg';
import '../assets/style/App.css';

class Header extends Component {
  render(){
    return(
      <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>Media Wars</h1>
          </div>
      </div>
    )}
}

export default Header;