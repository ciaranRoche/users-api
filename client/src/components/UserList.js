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

  componentWillMount(){
    this.getUsers();
  }

  getUsers(){
    let link = `http://localhost:8000/users/`
    fetch(link).then(res => {
      if(res.ok)
        return res.json()
    }).then(data => {
      if(data!=null){
        console.log(data)
      }
    })
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