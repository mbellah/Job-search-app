import axios from 'axios';
import { createSTore, applyMiddleware } from 'redux';
import loggingMiddle from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

//jobTitles and newJobTitle are position@company for sidebar

//Initial State
const initialState = {
  jobPostings: [],
  newJobPosting: ''
}

//Action Types
// const GET_JOB_TITLES = 'GET_JOB_TITLES';
// const GET_NEW_JOB_TITLE = 'GET_NEW_JOB_TITLE';
const GET_JOB_POSITIONS = 'GET_JOB_POSITIONS';
const GET_NEW_JOB_POSITION = 'GET_NEW_JOB_POSITION';

//Action Creators
// export function getJobTitles(jobTitles) {
//   const action = {type: GET_JOB_TITLES, jobTitles};
//   return action;
// }

// export function getNewJobTitle(newJobTitle) {
//   const action = {type: GET_NEW_JOB_TITLE, newjobTitle};
//   return action
// }

export function getJobPositions(jobPositions) {
  const action = { type: GET_JOB_POSITIONS, jobPositions }
  return action;
}

export function getNewJobPosition(newJobPosition) {
  const action = { type: GET_NEW_JOB_POSITION, newJobPosition }
  return action;
}

//Thunk Creators
export function fetchJobPositions() {
  return function thunk(dispatch) {
    return axios.get('/api/jobpostings')
      .then(res => res.data)
      .then(jobPositions => {
        const action = getJobPositions(jobPositions);
        dispatch(action);
      });
  }
}

export function postJobPosition(jobPosition) {
  return function thunk(dispatch) {
    return axios.post('/api/jobposting')
      .then(res => res.data)
      .then(newJobPositing => {
        const action = getNewJobPosition(newJobPositing)
        //return dispatch(action);
      })
  }
}

//Reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_JOB_POSITIONS:
      return action.jobPositions;
    case GET_NEW_JOB_POSITION:
      return [...state, action.newJobPosition];
    default:
      return state;
  }
}
