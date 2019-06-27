import axios from 'axios'

const baseUrl = 'http://localhost:3333/smurfs';

export const newSmurfy = {
  name: 'bunty Smurf',
  age: 10,
  height: 'fuck you'
}

export const GET_SMURFS = 'GET_SMURFS';
export const GET_SMURFS_SUCCESS = 'GET_SMURFS_SUCCESS';
export const GET_SMURFS_FAILURE = 'GET_SMURFS_FAILURE';
export const ADDING_SMURF = 'ADDING_SMURF';
export const ADD_SMURF_SUCCESS = 'ADD_SMURF_SUCCESS';
export const ADD_SMURF_FAILURE = 'ADD_SMURF_FAILURE';
export const DELETING_SMURF =  'DELETING_SMURF';
export const DELETE_SMURF_SUCCESS = 'DELETE_SMURF_SUCCESS';
export const DELETE_SMURF_FAILURE = 'DELETE_SMURF_FAILURE';
export const UPDATING_SMURF = 'UPDATING_SMURF';
export const UPDATE_SMURF_SUCCESS = 'UPDATE_SMURF_SUCCESS';
export const UPDATE_SMURF_FAILURE = 'UPDATE_SMURF_FAILURE';


export const getSmurfs = () => dispatch => {
  dispatch({ type: GET_SMURFS });
  axios
    .get(baseUrl)
    .then( res  => {
      dispatch({ type: GET_SMURFS_SUCCESS, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: GET_SMURFS_FAILURE, payload: err.msg })
    })
}

export const addSmurfs = (newSmurf) => dispatch => {
  dispatch({ type: ADDING_SMURF });
  axios
    .post(baseUrl, newSmurf)
    .then(res => {
      console.log('Add Smurf firing')
      dispatch({ type: ADD_SMURF_SUCCESS, payload: res.data })
    })
    .catch(err => {
      dispatch({ type: ADD_SMURF_FAILURE, payload: err.msg })
  })
}
 
export const deleteSmurf = (id) => dispatch => {
  dispatch({ type: DELETING_SMURF });
  console.log('Delete SMurf FIring')
  axios
    .delete(`${baseUrl}/${id}`)
    .then(res => {
      dispatch({ type: DELETE_SMURF_SUCCESS, payload: res.data })
      
    })
    .catch(err => {
    dispatch({ type: DELETE_SMURF_FAILURE, payload: err.msg})
  })
}
export const updateSmurf = (id) => dispatch => {
  dispatch({ type: UPDATING_SMURF });
  axios
    .put(`${baseUrl}/${id}`)
    .then(res => {
      dispatch({ type: UPDATE_SMURF_SUCCESS, payload: res.data })
    })
    .catch(err => {
      dispatch({ type: UPDATE_SMURF_FAILURE, payload: err.msg })
    })
}


