import React from 'react'
import { Route, Redirect } from 'react-router';

// import Auth from '../auth';
import {useSelector} from 'react-redux';

const ProtectedRoute = ({Component, ...rest}) =>{
        const loggedIn = useSelector(state => state.access.authorized);
        // console.log(loggedIn)
    return (
        <React.Fragment> 
        {
                loggedIn ? <Route {...rest} render={ props => <Component {...props} /> } /> :
                                            <Redirect to ={{pathname: '/login'}} />  
        }
        </React.Fragment>
        )
        
}


export default ProtectedRoute