import React, {Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import {Container, Divider, Grid, Button, Form} from 'semantic-ui-react'

const title = [
  {key: 'mr', text: 'Mr', value: 'mr'},
  {key: 'mrs', text: 'Mrs', value: 'mrs'},
  {key: 'ms', text: 'Ms', value: 'ms'},
  {key: 'miss', text: 'Miss', value: 'miss'},
  {key: 'master', text: 'Master', value: 'master'},
  {key: 'maid', text: 'Maid', value: 'maid'},
  {key: 'madam', text: 'Madam', value: 'madam'},
]

const date = [
  {key: '1', text: '1', value: 1},
  {key: '2', text: '2', value: 2},
  {key: '3', text: '3', value: 3},
  {key: '4', text: '4', value: 4},
  {key: '5', text: '5', value: 5},
  {key: '6', text: '6', value: 6},
  {key: '7', text: '7', value: 7},
  {key: '8', text: '8', value: 9},
  {key: '10', text: '10', value: 10},
  {key: '11', text: '11', value: 11},
  {key: '12', text: '12', value: 12},
  {key: '13', text: '13', value: 13},
  {key: '14', text: '14', value: 14},
  {key: '15', text: '15', value: 15},
  {key: '16', text: '16', value: 16},
  {key: '17', text: '17', value: 17},
  {key: '18', text: '18', value: 18},
  {key: '19', text: '19', value: 19},
  {key: '20', text: '20', value: 20},
  {key: '21', text: '21', value: 21},
  {key: '22', text: '22', value: 22},
  {key: '23', text: '23', value: 23},
  {key: '24', text: '24', value: 24},
  {key: '25', text: '25', value: 25},
  {key: '26', text: '26', value: 26},
  {key: '27', text: '27', value: 27},
  {key: '28', text: '28', value: 28},
  {key: '29', text: '29', value: 29},
  {key: '30', text: '30', value: 30},
  {key: '31', text: '31', value: 31},
]

const month = [
   {key: 'January', text: 'January', value: 1},
  {key: 'February', text: 'February', value: 2},
  {key: 'March', text: 'March', value: 3},
  {key: 'April', text: 'April', value: 4},
  {key: 'May', text: 'May', value: 5},
  {key: 'June', text: 'June', value: 6},
  {key: 'July', text: 'July', value: 7},
  {key: 'August', text: 'August', value: 8},
  {key: 'September', text: 'September', value: 9},
  {key: 'October', text: 'October', value: 10},
  {key: 'November', text: 'November', value: 11},
  {key: 'December', text: 'December', value: 12},
]

const year = [
  {key: '2001', text: '2001', value: 2001},
  {key: '2002', text: '2002', value: 2002},
  {key: '2003', text: '2003', value: 2003},
  {key: '2004', text: '2004', value: 2004},
  {key: '2005', text: '2005', value: 2005},
  {key: '2006', text: '2006', value: 2006},
  {key: '2007', text: '2007', value: 2007},
  {key: '2008', text: '2008', value: 2009},
  {key: '2010', text: '2010', value: 2010},
  {key: '2011', text: '2011', value: 2011},
  {key: '2012', text: '2012', value: 2012},
  {key: '2013', text: '2013', value: 2013},
  {key: '2014', text: '2014', value: 2014},
  {key: '2015', text: '2015', value: 2015},
  {key: '2016', text: '2016', value: 2016},
]

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
]

class SignUp extends Component {
  constructor(props){
    super(props);
    this.state = {
      gender : '',
      title : '',
      first : '',
      last : '',
      street : '',
      city : '',
      state : '',
      zip : '',
      email : '',
      username : '',
      dob : 200948,
      phone : '',
      cell : '',
      PPS : '',
      picture : '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleGender = this.handleGender.bind(this);
    this.handleDob = this.handleDob.bind(this);
    this.handleTitle = this.handleTitle.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  };

  //------ HANDLER FUNCTIONS ------

  handleChange(event){
    const name = event.target.name;
    this.setState({[name] : event.target.value});
    console.log(this.state[name]);
  }

  handleTitle(event, {value}){
    this.setState({title:value})
  }

  handleGender(event, {value}){
    this.setState({gender:value});
  }

  //todo : edit this handler to actually handle dob for testing hard code dob
  handleDob(event, {value}){
    console.log(value);
  }

  handleSubmit(event){
    console.log(`${this.state.title}, ${this.state.first}`);
    event.preventDefault();
  }


  render(){
    const {value}=this.state;
    return(<div>
      <Header/>
      <Container textAlign='justified'>
        <h2>Sign Up for the Galaxy</h2>
        <Divider/>
        <Form onSubmit={this.handleSubmit}>
        <Form.Group widths='equal'>
          <Form.Select label='Title' options={title} placeholder='Title' onChange={this.handleTitle}/>
          <Form.Input label='First name' placeholder='First name' name='first' onChange={this.handleChange}  />
          <Form.Input label='Last name' placeholder='Last name' name='last' onChange={this.handleChange}  />
        </Form.Group>
        <Form.Group widths='equal'>
          <Form.Select label='Gender' options={options} placeholder='Gender' name='gender' onChange={this.handleGender} />
        </Form.Group>
        <h4>Date of Birth</h4>
        <Form.Group widths='equal'>
          <Form.Select label='Day' options={date} placeholder='Day' name='date' onChange={this.handeDob} />
          <Form.Select label='Month' options={month} placeholder='Month' name='month' onChange={this.handeDob} />
          <Form.Select label='Year' options={year} placeholder='Year' name='year' onChange={this.handleDob} />
        </Form.Group>
        <Form.Group widths='equal'>
          <Form.Input label='Email' placeholder='Email' name='email' onChange={this.handleChange}/>
          <Form.Input label='Username' placeholder='Username' name='username' onChange={this.handleChange} />
          <Form.Input label='Password' placeholder='Password' name='password' onChange={this.handleChange} />
        </Form.Group>
        <Form.Group widths='equal'>
          <Form.Input label='Street Address' placeholder='Street Address' name='street' onChange={this.handleChange} />
        </Form.Group>
        <Form.Group widths='equal'>
          <Form.Input label='City' placeholder='City' name='city' onChange={this.handleChange} />
          <Form.Input label='State' placeholder='State' name='city' onChange={this.handleChange} />
          <Form.Input label='Zip' placeholder='Zip' name='city' onChange={this.handleChange} />
        </Form.Group>
        <Form.Group widths='equal'>
          <Form.Input label='Phone' placeholder='Phone' name='phone' onChange={this.handleChange} />
          <Form.Input label='Cell' placeholder='Cell' name='cell' onChange={this.handleChange} />
          <Form.Input label='PPS' placeholder='PPS' name='pps' onChange={this.handleChange} />
        </Form.Group>
         <Form.Group widths='equal'>
          <Form.Input label='Profile Picture Link' placeholder='Profile Picture Link' name='picture' onChange={this.handleChange} />
        </Form.Group>
        <Form.Button fluid basic color='black' type='submit'>Submit</Form.Button>
      </Form>
      </Container>
      </div>
    )
  }

}
export default SignUp;