import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {
const location=useLocation()
console.log("location", location);
    const {user ,loading}=use(AuthContext)

if(loading){
    <span className="loading loading-bars loading-xl"></span>
}

    if(user && user?.email){
        return children
    }
    return <Navigate to='/login' state={location.pathname} >Login</Navigate>
};

export default PrivateRoute;