import React from 'react';
import Spinner from 'react-bootstrap'
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth'


const AdminRoute = ({ children, ...rest }) => {
    const { user , isLoading } = useAuth()
    if(isLoading){
        return  <div className = 'm-5 text-center'><Spinner animation="border" variant="warning" /></div>
    }
    return (
        <Route
        {...rest}
        render={({ location }) => user.email ? children
            :
            <Redirect
                to={{
                    pathname: "/login",
                    state: { from: location }
                }}
            />
        }
    >

    </Route>
    );
};

export default AdminRoute;