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



class Profile extends Component{
  constructor(props){
    super(props);
    this.state = {
      'id' : '',
      'gender' : '',
      'name' : {
        'title' : '',
        'first' : '',
        'last' : ''
      },
      'location' : {
        'street' : '',
        'city' : '',
        'state' : '',
        'zip' : ''
      },
      'email' : '',
      'username' : '',
      'password' : '',
      'dob' : '',
      'phone' : '',
      'cell' : '',
      'PPS' : '',
      'picture' : {
        'large' : '',
        'medium' : '',
        'thumbnail' : ''
      }
    }
  };

  componentDidMount(){
    let tempId = sessionStorage.getItem('id');
    console.log(tempId);
    this.getUser(tempId);
  }

  getUser(id){
    console.log(id)
    let link = `http://localhost:8000/users/${id}`
    fetch(link).then(res => {
      if (res.ok)
        return res.json()
    }).then(data => {
      if (data!=null){
        console.log(data);
      };
    });
  }

  render(){
    return(<div>
      <Header/>
      <Container textAlign='justified'>
        profile
      </Container>
      </div>
    )
  }
}
export default Profile