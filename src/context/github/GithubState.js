import React, { useReducer } from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
import {
    SEARCH_USER,
    SET_LOADING,
    CLEAR_USER,
    GET_USER,
    GET_REPOS,
    UNSET_LOADING
} from '../types';

let githubClientId;
let githubClientSecretId;

if (process.env.NODE_ENV !== 'production') {
    githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
    githubClientSecretId = process.env.REACT_APP_GITHUB_CLIENT_SECRET_ID;
}
else {
    githubClientId = process.env.GITHUB_CLIENT_ID;
    githubClientSecretId = process.env.GITHUB_CLIENT_SECRET_ID;

}

const GithubState = props => {
    const initialState = {
        users: [],
        singelUser: {},
        singelUserRepos: [],
        loading: false,
    }

    const [state, dispatch] = useReducer(GithubReducer, initialState)

    // search users
    const submit = async (text) => {

        setloading()
        const searchdata = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${githubClientId}&client_secret=${githubClientSecretId}`);

        dispatch(
            {
                type: SEARCH_USER,
                payload: searchdata.data.items
            }
        )
    }
    // get user
    const getUser = async (username) => {
        setloading();
        const SingelUserData = await axios.get(`https://api.github.com/users/${username}?client_id=${githubClientId}&client_secret=${githubClientSecretId}`);

        dispatch({
            type: GET_USER,
            payload: SingelUserData.data
        })
    }
    // get repos
    const getUserRepo = async (username) => {
        setloading()
        const SingelUserReposData = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${githubClientId}&client_secret=${githubClientSecretId}`);

        dispatch({
            type: GET_REPOS,
            payload: SingelUserReposData.data
        })

    }

    // clear users

    const clear = () => dispatch({
        type: CLEAR_USER
    })
    // set loading
    const setloading = () => {
        dispatch({
            type: SET_LOADING
        })

    }
    // unset loading
    const unsetloading = () => dispatch({
        type: UNSET_LOADING
    })



    return (
        <GithubContext.Provider
            value={{
                users: state.users,
                singelUser: state.singelUser,
                singelUserRepos: state.singelUserRepos,
                loading: state.loading,
                submit,
                clear,
                getUser,
                getUserRepo,
                setloading,
                unsetloading,
            }}
        >
            {props.children}
        </GithubContext.Provider>
    )

}
export default GithubState;