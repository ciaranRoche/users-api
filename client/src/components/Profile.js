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
        this.setState({gender:data.gender,
          name:{
            title:data.name.title,
            first:data.name.first,
            last:data.name.last
          },
          location:{
            street:data.location.street,
            city:data.location.city,
            state:data.location.state,
            zip:data.location.zip
          },
          email:data.email,
          username:data.username,
          phone:data.phone,
          cell:data.cell,
          PPS:data.PPS,
          picture:{
            large:data.picture.large,
            medium:data.picture.medium,
            thumbnail:data.picture.thumbnail
          }
        });
      };
    });
  }

  render(){
    return(<div>
      <Header/>
      <Container textAlign='justified'>
        <h2>Welcome {this.state.username}</h2>
      </Container>
      </div>
    )
  }
}
export default Profile