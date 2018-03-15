import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import Sidebar from './Sidebar.js';
import JobsList from './JobsList.js';

export default class Main extends Component {

  render() {
    return(
      <div>
        <Sidebar />
      </div>
    )
  }
}

