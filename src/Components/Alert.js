import React ,{useContext}from 'react'
import AlertContext from '../context/alert/alertContext'

export const Alert = () => {
    const alertContext=useContext(AlertContext);
    return (
        alertContext.alert !== null && (
           <div className={`alert alert-${alertContext.alert.type}`}>
           <i className='fa fa-info-circle'/>  {alertContext.alert.msg}
           </div>
          )
       
    )
}
