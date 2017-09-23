import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import '../assets/style/App.css';
import Auth from '.././components/Authenticate';
import Profile from '../components/Profile';



class App extends Component {

  render() {
    return (
      <Switch>
        <Route exact path="/" component={Auth}/>
        <Route exact path="/profile" component={Profile}/>
			</Switch>
    )
  }
}

export default App;
