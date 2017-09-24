import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import '../assets/style/App.css';
import Auth from '.././components/Authenticate';
import Profile from '.././components/Profile';
import SignUp from '.././components/SignUp';
import UserList from '.././components/UserList';


// App class to handle mah routes
class App extends Component {

  render() {
    return (
      <Switch>
        <Route exact path="/" component={Auth}/>
        <Route exact path="/profile/:id" component={Profile}/>
        <Route exact path="/signup" component={SignUp}/>
        <Route exact path="/users" component={UserList}/>
			</Switch>
    )
  }
}

export default App;
