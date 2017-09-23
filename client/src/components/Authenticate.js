import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import Header from './Header';
import {Container, Divider, Grid, Button, Form, Image} from 'semantic-ui-react'
import img1 from '../assets/media/auth.png';
import img2 from '../assets/media/auth2.png';

class Auth extends Component{
  constructor(props){
    super(props);
    this.state ={
      userName : '',
      password : '',
      auth : false,
      sign : false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
  };

  //------ HANDLER FUNCTIONS -------

  handleChange(event){
    const name = event.target.name;
    this.setState({[name]: event.target.value});
    console.log('handle change fired')
  }

  handleSubmit(event){
    console.log('submit fired')
    this.authUser();
    event.preventDefault();
  }

  handleSignUp(event){
    this.setState({sign:true});
  }

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
          this.setState({auth:true})
        }
      }else{
        console.log('fail')
      }
    })
    console.log('auth is ' , this.state.auth)
  }

  render(){
    if(this.state.auth === true){
      return <Redirect to='/profile'/>
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
                  <h2>Log In</h2>
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
                    <Image src={img1} fluid/>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={2}>
                  <Grid.Column>
                    <Image src={img2} fluid />
                  </Grid.Column>
                  <Grid.Column>
                  <h2>Sign Up</h2>
                    <Container textAlign='center'>
                      <Divider/>
                      <br/>
                        <b><p>Want to Join the Resistance?</p></b>
                        <b><p>Just click the button below.</p></b>
                      <Divider/>
                        <Button fluid basic color='black' onClick={this.handleSignUp}>Sign Up</Button>
                    </Container>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
              <Divider/>
                <p> The Rebel Alliance stood bravely against the evil of the Galactic Empire,
                    never backing down despite overwhelming odds.Formed from resistance movements that arose during the Clone Wars,
                    the Rebellion worked in secret for decades to overthrow the Emperor and restore democracy to the galaxy.Eventually,
                    armed with the firepower of ships like the X - wing and A - wing,
                    and the leadership of figures including Princess Leia and Admiral Ackbar,
                    the Rebel Alliance triumphed over the Empire at the Battle of Endor.
                </p>
            </Container>
        </div>
      </div>
          
    )
  }

}

export default Auth;