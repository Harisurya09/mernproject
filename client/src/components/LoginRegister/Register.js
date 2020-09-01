import React from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import {Link} from 'react-router-dom';

import axios from 'axios'
import {useHistory} from 'react-router-dom'
import './LoginRegister.css'

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

    const validationSchema = Yup.object({
        firstName: Yup.string().required('Required'),
        lastName: Yup.string().required('Required'),
        emailID:  Yup.string().required('Required'),
        username: Yup.string().required('Required'),
        password: Yup.string().required('Required'),
        address: Yup.string().required('Required'),
        state: Yup.string().required('Required'),
        pincode: Yup.string().required('Required'),
        phoneNumber: Yup.string().required('Required')
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
                    <Form>
                    <div className='form-group'>
                        <label htmlFor="firstName">First Name</label>
                        <Field type='text' name='firstName' id="firstName" className="form-control" />
                        <ErrorMessage name="firstName" />
                        </div>
                        <div className='form-group'>
                        <label htmlFor="lastName">Last Name</label>
                        <Field type='text' name='lastName' id="lastName" className="form-control"/>
                        <ErrorMessage name="lastName" />
                        </div>
                        <div className='form-group'>
                        <label htmlFor="emailID">Email ID</label>
                        <Field type='text' name='emailID' id="emailID" className="form-control"/>
                        <ErrorMessage name="emailID" />
                        </div>
                        <div className='form-group'>
                        <label htmlFor="username">User Name</label>
                        <Field type='text' name='username' id="username" className="form-control"/>
                        <ErrorMessage name="username" />
                        </div>
                        <div className='form-group'>
                        <label htmlFor="password">Password</label>
                        <Field type='text' name='password' id="password" className="form-control"/>
                        <ErrorMessage name="password" />
                        </div>
                        <div className='form-group'>
                        <label htmlFor="address">Address</label>
                        <Field as="textarea" name='address' id="address" className="form-control"/>
                        <ErrorMessage name="address" />
                        </div>
                        <div className='form-group'>
                        <label htmlFor="state">State</label>
                        <Field type='text' name='state' id="state" className="form-control"/>
                        <ErrorMessage name="state" />
                        </div>
                        <div className='form-group'>
                        <label htmlFor="pincode">Pincode</label>
                        <Field type='text' name='pincode' id="pincode" className="form-control"/>
                        <ErrorMessage name="pincode" />
                        </div>
                        <div className='form-group'>
                        <label htmlFor="phoneNumber">Phone Number</label>
                        <Field type='text' name='phoneNumber' id="phoneNumber" className="form-control"/>
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
