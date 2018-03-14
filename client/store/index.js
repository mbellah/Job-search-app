import { createStore, applyMiddleware } from 'redux';
import loggingMiddleware from 'redux-logger'; // https://github.com/evgenyrodionov/redux-logger
import thunkMiddleware from 'redux-thunk'; // https://github.com/gaearon/redux-thunk


const initialState = {}

const rootReducer = function (state = initialState, action) {
  switch (action.type) {
    default: return state
  }
};

export default createStore(rootReducer, applyMiddleware(thunkMiddleware, loggingMiddleware))
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
