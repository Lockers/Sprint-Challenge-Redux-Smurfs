import {
    GET_SMURFS,
    GET_SMURFS_SUCCESS,
    GET_SMURFS_FAILURE,
    ADDING_SMURF,
    ADD_SMURF_FAILURE,
    ADD_SMURF_SUCCESS,
    DELETING_SMURF,
    DELETE_SMURF_SUCCESS,
    DELETE_SMURF_FAILURE,
    UPDATING_SMURF,
    UPDATE_SMURF_SUCCESS,
    UPDATE_SMURF_FAILURE
} from '../actions/index'

const initialState = {
    smurfs: [],
    fetchingSmurfs: false,
    addingSmurf: false,
    updatingSmurf: false,
    deletingSmurf: false,
    error: null
}

export const getSmurfReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_SMURFS:
            return {
                ...state,
                fetchingSmurfs: true
            };
        case GET_SMURFS_FAILURE:
            return {
                ...state,
                fetchingSmurfs: false,
                error: action.payload
            };
        case GET_SMURFS_SUCCESS:
            return {
                ...state,
                fetchingSmurfs: false,
                smurfs: [...state.smurfs, ...action.payload],
                }
        case ADDING_SMURF:
            return {
                ...state,
                addingSmurf: true
            }
        case ADD_SMURF_FAILURE:
            return {
                ...state,
                addingSmurf: false,
                error: action.payload
            }
        case ADD_SMURF_SUCCESS:
            return {
                ...state,
                addingSmurf: false,
                smurfs: action.payload
            }
        case DELETING_SMURF:
            return {
                ...state,
                deletingSmurf: true
            }
        case DELETE_SMURF_FAILURE:
            return {
                ...state,
                deletingSmurf: false,
                error: action.payload
            }
        case DELETE_SMURF_SUCCESS:
            return {
                ...state,
                deletingSmurf: false,
                smurfs: action.payload
            }
        case UPDATING_SMURF:
            return {
                ...state,
                updatingSmurf: true
            }
        case UPDATE_SMURF_FAILURE:
            return {
                ...state,
                updatingSmurf: false,
                error: action.payload
            }
        case UPDATE_SMURF_SUCCESS:
            return {
                ...state,
                updatingSmurf: false,
                smurfs: action.payload
            }
        default: return state;
    }
}
