// frontend/src/components/Navigation/index.js
import React from 'react';
import {makeStyles} from '@material-ui/core/styles'
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import { Redirect } from 'react-router-dom';
import './Navigation.css';
import logo from './logo.png'



function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;


  
    if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <div>

        <NavLink to="/login" className='log'>Log In</NavLink>
        <NavLink to="/signup" className='sign'>Sign Up</NavLink>
      </div>
    );
  }

  return (
    <>
    <header >
      <NavLink exact to="/home" className='nav'>
      {/* <img className='logo' src={logo} alt="logo"/> */}
      </NavLink>


      <p className='captureIt'>Capture<span className="classes-it">It</span></p>
    <ul>
      <li className='logo-nav' >
        
        {isLoaded && sessionLinks}
      </li>
    </ul>
    </header>

    </>
  );
}

export default Navigation;


{/* <li className='logo-container'>
<img className='logo' src={logo} alt="logo"/>

</li> */}