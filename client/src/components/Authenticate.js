import React, {Component} from 'react';
import {Redirect, Link} from 'react-router-dom';
import Header from './Header';
import {Container, Divider, Grid, Button, Form, Image} from 'semantic-ui-react'
import img1 from '../assets/media/poster.png';
import img3 from '../assets/media/poster3.png';

// Class Auth will be first component viewed by user, giving user to option to sign in, sign up or view all users.
class Auth extends Component{
  constructor(props){
    super(props);
    this.state ={
      // used to send username to express endpoint
      userName : '',
      // used to send password to express endpoint
      password : '',
      // these are checks that trigger redirects pending on users selection
      auth : false,
      sign : false,
    };
    // cleaning up the handles
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  //------ HANDLER FUNCTIONS -------

  // takes in the 'name' and sets state accordingly
  handleChange(event){
    const name = event.target.name;
    this.setState({[name]: event.target.value});
    console.log('handle change fired')
  }

  // called the auth method on press of submit button
  handleSubmit(event){
    console.log('submit fired')
    this.authUser();
    event.preventDefault();
  }

  //function that sends username and password as params to end point, where
  //a look up on db verifies if user and password match, a boolean is sent back
  authUser(){
    // todo: sha password before sending it as a request
    // todo: set a trigger on failed auth
    let link = `http://localhost:8000/users/auth/${this.state.userName}/${this.state.password}`
    fetch(link).then(res => {
      if (res.ok)
        return res.json()
    }).then(data => {
      if (data!=null){
        console.log(data.response)
        if(data.response===true){
          sessionStorage.setItem('logged_id', data.id)
          this.setState({auth:true})
        }
      }else{
        console.log('fail')
      }
    })
  }

  viewUsers(){
    return(<Link to={`/users`}>
            <Button basic fluid color='black'>View Users</Button>
          </Link>)
  }

  signUp(){
    return(<Link to={`/signup`}>
            <Button basic fluid color='black'>Sign Up</Button>
          </Link>)
  }

  render(){
    // hacky way to handle routes, avoids using router history by using dom changes
    if(this.state.auth === true){
      let link = `/profile/${sessionStorage.getItem('logged_id')}`;
      return <Redirect to={link}/>
    }
    if(this.state.sign === true){
      return <Redirect to='/signup'/>
    }
    return(<div>
      <Header/>
      <div>
          <br/>
            <Container textAlign='justified'>
              <h2>Fight in the Rebellion</h2>
              <Divider />
              <Grid divided = 'vertically'>
                <Grid.Row columns={2}>
                  <Grid.Column>
                    <Form onSubmit={this.handleSubmit}>
                      <Form.Field>
                        <input type='text' name='userName' onChange={this.handleChange} placeholder='Username' />
                      </Form.Field>
                      <Divider />
                      <Form.Field>
                        <input type='password' name='password' onChange={this.handleChange} placeholder='Password' />
                      </Form.Field>
                      <Divider />
                      <Button basic fluid color='black' type='submit'>Log In</Button>
                    </Form>
                  </Grid.Column>
                  <Grid.Column>
                    <p> 
                    The Rebel Alliance stood bravely against the evil of the Galactic Empire,
                    never backing down despite overwhelming odds.Formed from resistance movements that arose during the Clone Wars,
                    the Rebellion worked in secret for decades to overthrow the Emperor and restore democracy to the galaxy.Eventually,
                    armed with the firepower of ships like the X - wing and A - wing,
                    and the leadership of figures including Princess Leia and Admiral Ackbar,
                    the Rebel Alliance triumphed over the Empire at the Battle of Endor.
                    </p>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={2}>
                  <Grid.Column>
                    <Image src={img1} fluid />
                  </Grid.Column>
                  <Grid.Column>
                      <Image src={img3} fluid />
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={2}>
                  <Grid.Column>
                    <h2>View Members</h2>
                    <Container textAlign='center'>
                      <Divider/>
                      <br/>
                        <b><p>Want to view of Resistance Members?</p></b>
                        <b><p>Just click the button below.</p></b>
                      <Divider/>
                        {this.viewUsers()}
                    </Container>
                  </Grid.Column>
                  <Grid.Column>
                  <h2>Sign Up</h2>
                    <Container textAlign='center'>
                      <Divider/>
                      <br/>
                        <b><p>Want to Join the Resistance?</p></b>
                        <b><p>Just click the button below.</p></b>
                      <Divider/>
                        {this.signUp()}
                    </Container>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
              <Divider/>
            </Container>
        </div>
      </div>
          
    )
  }

}

export default Auth;