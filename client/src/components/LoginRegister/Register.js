import React from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import {Link} from 'react-router-dom';

import axios from 'axios'
import {useHistory} from 'react-router-dom'
import './LoginRegister.css'
import TextError from '../ErrorBoundry/TextError';

function Register() {
    const history = useHistory();
    const registerValues = {
        firstName: '',
        lastName: '',
        emailID: '',
        username: '',
        password: '',
        address: '',
        state: '',
        pincode: '',
        phoneNumber: ''
    };

    // const onSubmit = (values) =>{
    //     console.log('Form Data Two : ', values)
    // }

    const regExpPhno = /^(?:(?:\+|0{0,2})91(\s*[\ -]\s*)?|[0]?)?[789]\d{9}|(\d[ -]?){10}\d$/ ;

    const validationSchema = Yup.object({
        firstName: Yup.string().required('Required'),
        lastName: Yup.string().required('Required'),
        emailID:  Yup.string().email('Enter a valid email address').required('Required'),
        username: Yup.string().required('Required'),
        password: Yup.string().required('Required').min(8),
        address: Yup.string().required('Required'),
        state: Yup.string().required('Required'),
        pincode: Yup.number().positive('Pincode number cannot start with minus').integer('Cant have decimals').min(6).required('Required'),
        phoneNumber: Yup.number().min(10).required('Required')
    })

    // useEffect(()=>{
    //     console.log(registerValues)
    // },[registerValues])

    const onSubmit = (values) =>{
        // console.log(values)
        axios.post('/user/register', {values}).then(res=> console.log(res)).catch(err =>console.log(err));
        history.push('/user/login')
    }
    return (
        <div className="form_container">
            <div className="registration_form">
                <h2>Sign Up</h2>
                <Formik initialValues={registerValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                    <Form autoComplete='off'>
                    <div className='form-group'>
                        <label htmlFor="firstName">First Name</label>
                        <Field type='text' name='firstName' id="firstName" className="form-control" />
                        <ErrorMessage name="firstName" component={TextError}/>
                        </div>
                        <div className='form-group'>
                        <label htmlFor="lastName">Last Name</label>
                        <Field type='text' name='lastName' id="lastName" className="form-control"/>
                        <ErrorMessage name="lastName" component={TextError}/>
                        </div>
                        <div className='form-group'>
                        <label htmlFor="emailID">Email ID</label>
                        <Field type='email' name='emailID' id="emailID" className="form-control"/>
                        <ErrorMessage name="emailID" component={TextError}/>
                        </div>
                        <div className='form-group'>
                        <label htmlFor="username">User Name</label>
                        <Field type='text' name='username' id="username" className="form-control"/>
                        <ErrorMessage name="username" component={TextError}/>
                        </div>
                        <div className='form-group'>
                        <label htmlFor="password">Password</label>
                        <Field type='password' name='password' id="password" className="form-control"/>
                        <ErrorMessage name="password" component={TextError}/>
                        </div>
                        <div className='form-group'>
                        <label htmlFor="address">Address</label>
                        <Field as="textarea" name='address' id="address" className="form-control"/>
                        <ErrorMessage name="address" component={TextError}/>
                        </div>
                        <div className='form-group'>
                        <label htmlFor="state">State</label>
                        <Field type='text' name='state' id="state" className="form-control"/>
                        <ErrorMessage name="state" component={TextError}/>
                        </div>
                        <div className='form-group'>
                        <label htmlFor="pincode">Pincode</label>
                        <Field type='number' name='pincode' id="pincode" className="form-control"/>
                        <ErrorMessage name="pincode" component={TextError}/>
                        </div>
                        <div className='form-group'>
                        <label htmlFor="phoneNumber">Phone Number</label>
                        <Field type='tel' name='phoneNumber' id="phoneNumber" className="form-control"/>
                        <ErrorMessage name="phoneNumber" component={TextError}/>
                        </div>
                        <button type='submit' style={{backgroundColor:'green', color: 'white', border: '1px solid green'}} >Register</button>
                    </Form>
                </Formik>
                <p>Already registered?. Please <Link to="/user/login">Sign In</Link></p>
            </div>
        </div>
    )
}


export default Register;
