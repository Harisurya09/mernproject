import React from 'react'
import {Link} from 'react-router-dom';

import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
// import axios from 'axios';
import { useDispatch } from 'react-redux';
import {auth_user} from '../../redux/Access/actions/accessActions';
import { useHistory } from "react-router-dom";

import './LoginRegister.css'
import TextError from '../ErrorBoundry/TextError';

function LoginRegister() {
    const history = useHistory();
    const dispatch = useDispatch()
     const loginValues = {
        emailID: '',
        password: ''
    };

    const onSubmit = (values) => {
        dispatch(auth_user(values))

        // console.log(values)
        history.push('/')
        
    }

    const validationSchema = Yup.object({
        emailID: Yup.string().email('Invalid Email').required('Required'),
        password: Yup.string().required('Required')
    })

    


    return (
        <div className="form_container">
            <div className="login_form">
                <h2>Sign-in</h2>
                <Formik initialValues={loginValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                    <Form>
                    <div className='form-group'>
                        <label htmlFor="emailID">Email Id</label>
                        <Field type='email' name='emailID' id="emailID" className="form-control" />
                        <ErrorMessage name="emailID" component={TextError}/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor="password">Password</label>
                        <Field type='password' name='password' id="password" className="form-control"/>
                        <ErrorMessage name="password"  component={TextError}/>
                    </div>
                        <button type='submit' style={{backgroundColor:'green', color: 'white', border: '1px solid green'}}>Sign In</button>
                    </Form>
                </Formik>
                <p>If not registered. Please <Link to="/user/register">Sign Up</Link></p>
            </div>
            
        </div>
    )
}

export default LoginRegister;