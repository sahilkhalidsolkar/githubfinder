import React, { Fragment, useContext, useEffect } from 'react'
import AlertContext from '../context/alert/alertContext'
import GithubContext from '../context/github/githubContext'
import spinner from './loading.gif'
export const Spinner = () => {
    const { loading, unsetloading } = useContext(GithubContext)
    const { errorMsg } = useContext(AlertContext)
    // useEffect(() => {
    //     setTimeout(() => {
    //         if (loading == true) {
    //             unsetloading()
    //             // errorMsg('such user does not exists', "danger")

    //         }
    //     }, 5000)
    // }, [])
    // setInterval(
    //     () => {
    //         if (loading == true) {
    //             unsetloading()
    //             errorMsg('such user does not exists', "danger")

    //         }
    //     }, 5000
    // )

    return (
        <Fragment>
            <img src={spinner} alt="loading..." style={{ width: "200px", margin: "auto", display: "block" }} />

        </Fragment>
    )
}
export default Spinner;
