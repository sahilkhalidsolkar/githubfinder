import React ,{useContext}from 'react'
import Spinner from './Spinner';
import Users from './Users';
import GithubContext from '../context/github/githubContext';
export const SpinnerOrUsers = () => {
    const githubContext =useContext(GithubContext);
    return (
        <div>
        {githubContext.loading ?  <Spinner/> :<Users/> }
        </div>
    )
}
