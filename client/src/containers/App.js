import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import '../assets/style/App.css';
import Auth from '.././components/Authenticate';
import Profile from '.././components/Profile';
import SignUp from '.././components/SignUp';
import UserList from '.././components/UserList';



class App extends Component {

  render() {
    return (
      <Switch>
        <Route exact path="/" component={Auth}/>
        <Route exact path="/profile" component={Profile}/>
        <Route exact path="/signup" component={SignUp}/>
        <Route exact path="/user" component={UserList}/>
			</Switch>
    )
  }
}

export default App;
