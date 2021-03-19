
import React,{useState,Fragment,useContext} from 'react';
import {BrowserRouter , Switch ,Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Users from './Components/Users';
import Spinner from "./Components/Spinner";
import Search from "./Components/Search";
import {Alert} from './Components/Alert';
import AboutPage from './Components/AboutPage';
import SingelUser from './Components/SingelUser';
import {NotFound} from './Components/NotFound';
import {SpinnerOrUsers} from './Components/SpinnerOrUsers';
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';

const App =()=>{
 
    return(
      <GithubState>
      <AlertState>
      <BrowserRouter>
      <Fragment>
    <div className="App">
      <Navbar title="Github Finder" icon='fa fa-github'/>
      <div className="container">
      <Alert /> 
      <Switch>
      <Route
      exact
      path="/"
      render={
        (props)=>{
          return(
            <Fragment>
            <Search />
            <SpinnerOrUsers />
            </Fragment>
          )
        }
      }
      />
      <Route
      exact
      path="/about"
      component={AboutPage}
      />
      <Route
      exact
      path="/user/:login"
      render={
        (props)=>{
          return(
            <SingelUser
            {...props}
            />
          )
        }
      }
      />
      <Route component={NotFound}/>
      </Switch>
     
      </div>
     </div>
    </Fragment>
    </BrowserRouter>
    </AlertState>
    </GithubState>
  );
  
}

export default App;
