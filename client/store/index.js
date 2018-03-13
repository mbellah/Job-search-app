import axios from 'axios';
import { createStore, applyMiddleware } from 'redux';
import loggingMiddleware from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

//Initial State

//Action Types
const GET_POSITION_TITLES = 'GET_POSITION_TITLES';
const GET_JOB_INFO = 'GET_JOB_INFO';
const UPDATE_JOB_INFO = 'UPDATE_JOB_INFO';
const GET_DOCUMENTS = 'GET_DOCUMENTS';
const UPDATE_DOCUMENTS = 'UPDATE_DOCUMENTS';
const GET_REFERENCES = 'GET_REFERENCES';
const UPDATE_REFERENCES = 'UPDATE_REFERENCES';


//Action Creators

//Thunk Creators

//Reducer
