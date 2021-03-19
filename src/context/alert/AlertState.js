import React,{useReducer} from 'react';
import AlertReducer from './alertReducer'
import AlertContext from './alertContext';
import {
    SET_ALERT,
    REMOVE_ALERT
} from '../types';



const AlertState=(props)=>{
const initialState={
    alert:null,
}
const[state,dispatch]=useReducer(AlertReducer,initialState);
// show error if nothing is input inn  search bar

const errorMsg=(msg,type)=>{
    dispatch({
        type:SET_ALERT,
        payload:{msg,type}
    })
    setTimeout(()=>{
        dispatch({
            type:REMOVE_ALERT,
            payload:null,
        })
    },3000)
  }
return(
    <AlertContext.Provider
    value={{
        alert:state.alert,
        errorMsg,
    }}
    >
    {props.children}
    </AlertContext.Provider>
)
}
export default AlertState;