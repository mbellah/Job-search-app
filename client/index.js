import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Main from './components/Main.js';

ReactDOM.render(
  <Router>
    <Main />
  </Router>,
  document.getElementById('main')
);
