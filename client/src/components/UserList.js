import React, {Component} from 'react';
import {Link} from 'react-router-dom';
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

  viewProfile(profileID){
    let content;
    let id = this.state.users.filter(function (data){
      return data._id === profileID._id;
    }).map(function (data){
      return data._id;
    })
    content = <div><Link to={`/profile/${id}`}>
        <Button basic fluid color='black'>View Profile</Button>
      </Link>
    </div>

    return content;
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
            {this.viewProfile(data)}
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