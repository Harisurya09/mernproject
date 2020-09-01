import {Authorized_User, Unauthorized_User, LoggedOut_User, LoggedIn_User, Update_User_Profile, Remove_User_Profile} from './accessTypes';
import axios from 'axios';

const unAuthorized_User = (error) => {
    return {
        type: Unauthorized_User,
        payload: error
    }
}

const authorized_User = ({user, token}) => {
    return {
        type: Authorized_User,
        payload: {user, token}
    }
}

export const loggedIn_user = () => {
    return {
        type: LoggedIn_User
    }
}

const loggedOut_user = () => {
    return {
        type: LoggedOut_User
    }
}

const update_user_profile = (user) => {
    return {
        type: Update_User_Profile,
        payload: user
    }
}

const remove_user_profile = () => {
    return {
        type: Remove_User_Profile
    }
}

export const auth_user = (values) => {
    // console.log(values)
    return (dispatch) => {
        axios.post('/user/login', {values})
        .then(res => {
            const user = res.data.User;
            const token = res.data.token;
            dispatch(authorized_User({user, token}))
            localStorage.setItem('token', token);
        })
        .catch(err =>
            dispatch(unAuthorized_User(err)));
    }
}

export const auth_user_logout = () => {
    return (dispatch) => {
        axios.post('/user/logout')
        .then(res=> { 
            dispatch(loggedOut_user());
            localStorage.removeItem('token');
            // console.log('logged out')
        })
        .catch(err => console.log(err))
    }
}

export const update_user = (values) =>{
    return (dispatch) => {
        axios.put('/user/me', {values}, {
            headers: {
                Authorization : `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(res=> {
            const User = res.data;
            dispatch(update_user_profile(User))
            // console.log(res)
        })
        .catch(err =>
            dispatch(unAuthorized_User(err))
            // console.log(err)
        )
    }
}

export const remove_user = () =>{
    return (dispatch) => {
        axios.delete('/user/me/delete')
        .then(res=> {
            // const data = res.data;
            dispatch(remove_user_profile())
        })
        .catch(err =>
            dispatch(unAuthorized_User(err))
        )
    }
}
