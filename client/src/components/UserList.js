import React, {Component} from 'react';
import Header from './Header';
import {
  Container,
  Divider,
  Grid,
  Button,
  Form,
  Image,
  List
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
        this.setState({users:data});
      }else{
        console.log('failed to load users');
      }
    })
  }

  buildUserList(users){
    return users.map((data) => {
        return <List key={data._id} animated celled verticalAlign='middle' size='big'>
          <List.Item>
            <Image avatar src={data.picture.thumbnail}/>
          <List.Content>
            <List.Header>{data.name.first} {data.name.last}</List.Header>
          </List.Content>
          <List.Content floated='right'>
            <Button>View Profile</Button>
          </List.Content>
          </List.Item>
        </List>
    })
  }

  render(){
    return(<div>
        <Header/>
        <Container textAlign='justified'>
        <br/>
          <h1>List of Resistance Members</h1>
            <Divider/>
              {this.buildUserList(this.state.users)}
        </Container>
      </div>
    )
  }

}
export default UserList;