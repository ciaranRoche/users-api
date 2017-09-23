import React from 'react';
import ReactDOM from 'react-dom';
import './assets/style/index.css';
import App from './containers/App';
import {BrowserRouter} from 'react-router-dom';
import registerServiceWorker from './containers/registerServiceWorker';


ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
