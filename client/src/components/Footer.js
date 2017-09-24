import React, {Component} from 'react';
import '../assets/style/App.css';

// class to make applying a footer to each page a bit more dynamic
class Footer extends Component {
  render() {
    return (
      <div className="App">
        <br/>
        <div className="App-footer">
        </div>
      </div>
    )
  }
}

export default Footer;