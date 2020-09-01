import React from 'react'
import {auth_user_logout, remove_user} from '../../redux/Access/actions/accessActions';
import {useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

export default function Account() {
    const user = useSelector(state => state.access.user)
    // console.log(user)
    const dispatch = useDispatch();
    const history = useHistory()
    const logout = () => {
        dispatch(auth_user_logout())
        history.push('/')
        localStorage.removeItem('token');
    }

    const deactivate = () => {
        dispatch(remove_user())
        history.push('/')
        localStorage.removeItem('token');
    }

    const profileUpdate = () => {
        history.push('/userprofile/update')
    }

    return (
        <div>
            <h2>Account component</h2>
            <p><strong>Personal details :</strong></p>
            <p>Name : {user.firstName} {user.lastName}<br/>
            Address : {user.address}<br/>State : {user.state}<br/>Pincode : {user.pincode}<br/>Email ID : {user.emailID}
            <br/>Phone Number : {user.phoneNumber} <br/><button type="button" onClick={profileUpdate} className='button'>Edit Profile</button>
            </p>
            <p><strong>Previous Orders : N/A</strong></p>
            <button type="button" onClick={logout} className='button'>Logout</button><br/><br/>
            <button type="button" onClick={deactivate} className='button'>Deactivate Account</button>
        </div>
    )
}
