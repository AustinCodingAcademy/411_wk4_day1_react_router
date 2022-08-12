/* 
    Write code for React Router here
Import the Home and About components from 
the component folder. Assign the default
path "/" to the Home component and "/about"
to the About component.

Remember to export the component at the end
*/

import React from 'react'
import { Routes, Route } from 'react-router'
import { Navigate } from "react-router-dom"
// import cookie from "cookie"
// Write component imports here //
import Home from './components/Home'
import About from './components/About'
import Car from './components/Car'




// Start Router function here //

const checkAuth = () => {
    return true
    // const cookies = cookie.parse(document.cookie);
    // return cookies["loggedIn"] ? true : false;
  };



const ProtectedRoute = (props) => {

    const { component: Component, ...rest } = props;
  
    return (
      checkAuth() === true ? ( <Component {...rest} /> ) : ( <Navigate to="/" /> )
    );
  };
  

const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<ProtectedRoute component={About}/>}/>
            <Route path='car/:id' element={<ProtectedRoute component={Car}/>} />
        </Routes>
    )
}
export default Router