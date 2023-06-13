import React, { useState, useContext } from 'react'
import GithubContext from '../context/github/githubContext';
import AlertContext from '../context/alert/alertContext';
const Search = ({ errorMsg }) => {
    // using context
    const githubContext = useContext(GithubContext)
    // using alert6 context
    const alertContext = useContext(AlertContext);
    const [text, settext] = useState('')
    const onTextChange = (e) => {

        settext(e.target.value)
    }
    const onSubmit = (e) => {
        e.preventDefault();
        if (text.trim()) {
            githubContext.submit(text.trim())
            //  if(githubContext.users.length == 0 ){

            //      alertContext.errorMsg('User not available, please check spelling...',"danger")
            //  }
        }
        else {
            alertContext.errorMsg('please enter some text', "danger")
        }
        settext('')
    }
    const onClear = () => {
        githubContext.clear()
    }

    return (
        <div>
            <form className="form" onSubmit={onSubmit}>
                <input type="text"
                    name="text"
                    placeholder="Search Users..."
                    value={text}
                    onChange={onTextChange}
                />

                <input type="submit" className="btn btn-dark btn-block" value="Search" />
                {githubContext.users.length > 0 &&
                    <input
                        type="button"
                        className="btn btn-primary btn-block"
                        value="Clear"
                        onClick={onClear}
                    />
                }

            </form>
        </div>
    )

}

export default Search
