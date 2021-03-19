import React ,{Fragment}from 'react';
import RepoItem from './RepoItem';
import PropTypes from 'prop-types';
export const Repo = ({repos}) => {
    return (
        <Fragment>
            {
                repos.map((repo)=>{
                    return(
                        <RepoItem repo={repo} key={repo.id}/>
                    )
                })
            }
        </Fragment>
    )
}
Repo.propType={
    repo:PropTypes.array.isRequired,
}
export default Repo;
