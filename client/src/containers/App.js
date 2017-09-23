import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import '../assets/style/App.css';
import Auth from '.././components/Authenticate';
import Profile from '.././components/Profile';
import SignUp from '.././components/SignUp';



class App extends Component {

  render() {
    return (
      <Switch>
        <Route exact path="/" component={Auth}/>
        <Route exact path="/profile" component={Profile}/>
        <Route exact path="/signup" component={SignUp}/>
			</Switch>
    )
  }
}

export default App;
