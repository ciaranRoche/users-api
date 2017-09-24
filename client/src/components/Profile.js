import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import Header from './Header';
import {
  Container,
  Divider,
  Grid,
  Button,
  Image,
  Menu
} from 'semantic-ui-react'

// class to display profile information of users
class Profile extends Component{
  constructor(props){
    super(props);
    // all state below are taking from the user json file from the server
    this.state = {
      // state is assigned as a prop that is passed in as a param on the url
      'id' : props.match.params.id,
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
      },
      // used to trigger a redirect when a profile has been deleted
      'del':false
    };
    // cleans up the handlers
    this.handleDelete = this.handleDelete.bind(this);
  };

  // uses the component lifecycle method to call the getuser function on dom load
  componentDidMount(){
    this.getUser(this.state.id);
  }

  // handler function for deleting a user
  handleDelete(){
    let link = `http://localhost:8000/users/delete/${this.state.id}`;
    fetch(link,{
      method: 'DELETE'
    }).then(res => {
      if (res.status===200)
        //triggers the redirect
        this.setState({del:true});
    })
  }

  // simple menu system for displaying two buttons one to go back to users and one to delete a user
  profileMenu(){
    return(<div>
      <Menu secondary>
        <Menu.Item>
          <Link to={`/users`}>
            <Button basic fluid color='black'>View Users</Button>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <div><Button basic color='black' onClick={this.handleDelete}>Delete Profile</Button></div>
        </Menu.Item>
      </Menu>
      </div>
    )
  }

  // called from the componentwillmount function to get users information and populate it into state
  getUser(id){
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
    if(this.state.del === true){
      return(<Redirect to='/users'/>)
    }
    return(<div>
      <Header/>
      {this.profileMenu()}
      <Container textAlign='justified'>
        <h1>{this.state.name.first} {this.state.name.last}</h1>
          <Divider />
          <Grid divided = 'vertically'>
            <Grid.Row columns={2}>
              <Grid.Column>
                <Image size='large' centered src={this.state.picture.large} />
              </Grid.Column>
              <Grid.Column>
                <h2>Address</h2>
                <Divider/>
                <p>{this.state.location.street}</p>
                <p>{this.state.location.city}</p>
                <p>{this.state.location.state}</p>
                <p>{this.state.location.zip}</p>
                <h2>Contact</h2>
                <p><b>Email</b> : {this.state.email}</p>
                <p><b>Phone</b> : {this.state.phone}</p>
                <p><b>Cell</b> : {this.state.cell}</p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
      </Container>
      </div>
    )
  }
}
export default Profile