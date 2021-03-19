import React from 'react'
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const User =({user:{id,login,avatar_url,html_url}}) =>{
    // const {id,login,avatar_url,html_url}=props.user
  
        return (
            <div className="card text-center" >
            <img
            alt={id}
            src={avatar_url}
            className="round-img"
            style={{width:'60px'}}
            />
            <h3>{login}</h3>
            <Link
            to={`user/${login}`}
            className="btn btn-dark btn-sm my-1"
            >
            More
            </Link>
           </div>
        )
    
}
User.propType={
user:PropTypes.object.isRequired,
}

export default User
