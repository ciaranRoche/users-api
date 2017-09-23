import React, { Component } from 'react';
import logo from '../assets/media/logo.svg';
import '../assets/style/App.css';

class App extends Component {
getUsers() {
  let link = `http://localhost:8000/users/`;
  fetch(link).then(res => {
    if (res.ok) 
      return res.json()
  }).then(data => {
    if (data != null) {
      console.log(data)
    } else {
      console.log('fail')
    }
  })
}

componentWillMount(){
  this.getUsers();
}

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
