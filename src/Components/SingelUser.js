import React, { useEffect, Fragment, useContext } from 'react'
import Spinner from './Spinner';
import Repo from './Repo';
import { Link } from 'react-router-dom';
import GithubContext from '../context/github/githubContext';

const SingelUser = (props) => {
    const githubContext = useContext(GithubContext)
    useEffect(() => {
        githubContext.getUser(props.match.params.login);
        githubContext.getUserRepo(props.match.params.login);


    }, []);


    const {
        name,
        avatar_url,
        location,
        bio,
        blog,
        login,
        html_url,
        followers,
        following,
        public_repos,
        public_gists,
        company,
        hireable,
    } = githubContext.singelUser;

    const {
        loading,
        singelUserRepos,
    } = githubContext;
    if (loading) {
        return (<Spinner />)
    }
    return (
        <Fragment>

            <Link to="/" className="btn btn-light">Back</Link>
            Hireable:{' '}
            {hireable ?
                <i className="fa fa-check text-success" /> :
                <i className="fa fa-times-circle text-danger" />
            }
            <div className="card grid-2">
                <div className="all-center">
                    <img
                        src={avatar_url}
                        className='round-img'
                        style={{ width: '150px' }}
                        alt=''
                    />
                    <h1>{name}</h1>
                    <p>Location: {location}</p>
                </div>
                <div>
                    {bio && <Fragment>
                        <h3>Bio</h3>
                        <p>{bio}</p>
                    </Fragment>}
                    <a href={html_url} className='btn btn-dark my-1'>
                        Visit Github Profile
                    </a>
                    <ul>
                        <li>
                            {
                                login && <Fragment>
                                    <strong>Username:</strong> {login}
                                </Fragment>
                            }
                        </li>
                        <li>
                            {
                                company && <Fragment>
                                    <strong>Company:</strong> {company}
                                </Fragment>
                            }
                        </li>
                        <li>
                            {
                                blog && <Fragment>
                                    <strong>Website: </strong><a href={blog}>{blog}</a>
                                </Fragment>
                            }
                        </li>
                    </ul>
                </div>

            </div>
            <div className="card text-center">
                <div className="badge badge-primary">
                    Followers:{followers}
                </div>
                <div className="badge badge-success">
                    Following:{following}
                </div>
                <div className="badge badge-light">
                    Public Repos:{public_repos}
                </div>
                <div className="badge badge-dark">
                    Public Gists:{public_gists}
                </div>
            </div>
            <Repo repos={singelUserRepos} />
        </Fragment>
    )

}


export default SingelUser
