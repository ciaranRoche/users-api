import React, {Component} from 'react';
import Header from './Header';
import {
  Container,
  Divider,
  Grid,
  Button,
  Form,
  Image
} from 'semantic-ui-react'

class UserList extends Component{
  constructor(props){
    super(props);
    this.state = {
      users : []
    }
  }

  render(){
    return(<div>
        <Header/>
        user list
      </div>
    )
  }

}
export default UserList;