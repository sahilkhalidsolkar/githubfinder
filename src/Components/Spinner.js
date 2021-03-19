import React,{Fragment} from 'react'
import spinner from './loading.gif'
export const Spinner = () => {
    return (
        <Fragment>
            <img src={spinner} alt="loading..." style={{width:"200px",margin:"auto",display:"block" }} />

        </Fragment>
    )
}
export default Spinner;
