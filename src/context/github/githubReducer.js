import {
    SEARCH_USER,
    SET_LOADING,
    CLEAR_USER,
    GET_USER,
    GET_REPOS,
    UNSET_LOADING
} from '../types';

export default (state, action) => {
    console.log(state)
    switch (action.type) {
        case SEARCH_USER:
            return {
                ...state,
                users: action.payload,
                loading: false
            }
        case GET_USER:
            return {
                ...state,
                singelUser: action.payload,
                loading: false
            }
        case GET_REPOS:
            return {
                ...state,
                singelUserRepos: action.payload
            }
        case CLEAR_USER:
            return {
                ...state,
                users: []
            }
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }
        case UNSET_LOADING:
            return {
                ...state,
                loading: false
            }


        default:
            return state;
    }
}