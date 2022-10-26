import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import  { MyContext } from '../../Context/AuthContext/Authcontext';

import Spinner from 'react-bootstrap/Spinner';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(MyContext);
    console.log(user);

    const location = useLocation()
    console.log(location);

    if(loading){
        return <Spinner animation="border" />;
    }
    
    if(!user){
        return <Navigate to='/login' state={{from:location}} replace></Navigate>
    }
    return children;
};

export default PrivateRoute;