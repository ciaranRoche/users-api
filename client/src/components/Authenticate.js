import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import {Container, Divider, Grid, Button, Form} from 'semantic-ui-react'

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
    console.log('sign up fired');
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
              <h2>The Galaxies number one social media site</h2>
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
                  
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={2}>
                  <Grid.Column>
                  
                  </Grid.Column>
                  <Grid.Column>
                  <h2>Sign Up</h2>
                    <Container textAlign='center'>
                      <Divider/>
                        <b><p>Not a member.</p></b>
                        <b><p>No problem.</p></b>
                        <b><p>Just click the button below.</p></b>
                      <Divider/>
                        <Button fluid basic color='black' onClick={this.handleSignUp}>Sign Up</Button>
                    </Container>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.</p>
            </Container>
        </div>
        <Footer/>
      </div>
          
    )
  }

}

export default Auth;