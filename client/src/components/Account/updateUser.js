import React from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
// import {Link} from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {update_user} from '../../redux/Access/actions/accessActions'
// import axios from 'axios'

import '../LoginRegister/LoginRegister.css'
import TextError from '../ErrorBoundry/TextError';

function UpdateUser() {

    const user = useSelector(state => state.access.user)
    const dispatch = useDispatch();
    const history = useHistory();

    const userValues = {
        firstName: user.firstName,
        lastName: user.lastName,
        emailID: user.emailID,
        username: user.username,
        address: user.address,
        state: user.state,
        pincode: user.pincode,
        phoneNumber: user.phoneNumber
    };

    const onUpdate = (values) =>{

        // console.log(values)
        dispatch(update_user(values))
        // dispatch(auth_user_logout())
        history.push('/')   
        // localStorage.removeItem('token') 
    }

    const validationSchema = Yup.object({
        firstName: Yup.string().required('Required'),
        lastName: Yup.string().required('Required'),
        emailID:  Yup.string().email().required('Required'),
        username: Yup.string().required('Required'),
        address: Yup.string().required('Required'),
        state: Yup.string().required('Required'),
        pincode: Yup.number().required('Required'),
        phoneNumber: Yup.string().required('Required')
    })

   
    return (
        <div className="form_container">
            <div className="registration_form">
                <h2> Update profile</h2>
                <Formik initialValues={userValues} onSubmit={onUpdate} validationSchema={validationSchema}>
                    <Form>
                    <div className='form-group'>
                        <label htmlFor="firstName">First Name</label>
                        <Field type='text' name='firstName' id="firstName" className="form-control" />
                        <ErrorMessage name="firstName" component={TextError} />
                        </div>
                        <div className='form-group'>
                        <label htmlFor="lastName">Last Name</label>
                        <Field type='text' name='lastName' id="lastName" className="form-control"/>
                        <ErrorMessage name="lastName" component={TextError} />
                        </div>
                        <div className='form-group'>
                        <label htmlFor="emailID">Email ID</label>
                        <Field type='email' name='emailID' id="emailID" className="form-control"/>
                        <ErrorMessage name="emailID" component={TextError} />
                        </div>
                        <div className='form-group'>
                        <label htmlFor="username">User Name</label>
                        <Field type='text' name='username' id="username" className="form-control"/>
                        <ErrorMessage name="username" component={TextError} />
                        </div>
                        <div className='form-group'>
                        <label htmlFor="address">Address</label>
                        <Field as="textarea" name='address' id="address" className="form-control"/>
                        <ErrorMessage name="address" component={TextError} />
                        </div>
                        <div className='form-group'>
                        <label htmlFor="state">State</label>
                        <Field type='text' name='state' id="state" className="form-control"/>
                        <ErrorMessage name="state" component={TextError} />
                        </div>
                        <div className='form-group'>
                        <label htmlFor="pincode">Pincode</label>
                        <Field type='number' name='pincode' id="pincode" className="form-control"/>
                        <ErrorMessage name="pincode" component={TextError} />
                        </div>
                        <div className='form-group'>
                        <label htmlFor="phoneNumber">Phone Number</label>
                        <Field type='tel' name='phoneNumber' id="phoneNumber" className="form-control"/>
                        <ErrorMessage name="phoneNumber" component={TextError} />
                        </div>
                        <button type='submit' className='button'>Save</button>
                    </Form>
                </Formik>
            </div>
        </div>
    )
}


export default UpdateUser;
