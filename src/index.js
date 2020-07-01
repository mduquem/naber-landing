import React from 'react';
import { BrowserRouter as Router, Redirect } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const app = (
   <Router>
      <App />
      <Redirect to='/home' />
   </Router>
);

ReactDOM.render(app, document.getElementById('root'));
