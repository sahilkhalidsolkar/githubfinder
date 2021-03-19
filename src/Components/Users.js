import React,{useContext} from 'react';
import User from './User'
import GithubContext from '../context/github/githubContext';
const Users=()=>{
    const githubContext = useContext(GithubContext);
    const {users}=githubContext;
        let gridStyle={
            display:'grid',
            gridTemplateColumns:'repeat(3,1fr)',
            gridGap:'1rem'
        };
       
        return (
            <div style={gridStyle}>
            {
                users.map((user)=><User
                key={user.id} user={user}
                />)
                
            }
            </div>
        )
       
    
}


export default Users
