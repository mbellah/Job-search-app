import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Root from './components/Root.jsx';

ReactDOM.render(
  <Router>
    <Root />
  </Router>,
  document.getElementById('main')
);

// document.write('welcome to my app');

// console.log('app loaded');
