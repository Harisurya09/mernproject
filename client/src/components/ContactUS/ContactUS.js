import React from 'react';

import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';

import './ContactUS.css'
import TextError from '../ErrorBoundry/TextError';


function ContactUS() {
    const enquireValues = {
            name: '',
            email: '',
            phoneNumber: '',
            message: ''
    }

    const onSubmit = (values) => {
        return console.log('Enquire Data ', values)
    }

    const validationSchema = Yup.object({
            name: Yup.string().required('Required'),
            email: Yup.string().email('Please enter valid email address').required('Required'),
            phoneNumber: Yup.string().required('Required'),
            message: Yup.string().required('Required')
    })

    return (
        <div className="contactUs">
            <h2>Contact US</h2>
            <div className="contact_form">
                <div className="contact">
                    <p><strong>Customer Care:</strong> +91 88XXX XXXX</p>
                    <p><strong>Office Hours:</strong> 11.00 AM to 6.30 PM</p>
                    <p>(Monday to Friday) Also 1st and 3rd Saturday.</p>
                    <p><strong>You can also email us at:</strong> contact@letsridesafe.com</p>
                </div>
                <div className="enquiry_form">
                    <h2>Enquiry</h2>
                    <Formik initialValues={enquireValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                        <Form>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <Field name="name" type="text" className='form-control' id="name"/>
                                <ErrorMessage name="name" component={TextError}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <Field name="email" type="text" className='form-control' id="email"/>
                                <ErrorMessage name="email" component={TextError}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="phoneNumber">Phone Number</label>
                                <Field name="phoneNumber" type="tel" className='form-control' id="phoneNumber"/>
                                <ErrorMessage name="phoneNumber" component={TextError}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <Field name="message" as="textarea" className='form-control' id="message"/>
                                <ErrorMessage name="message" component={TextError} />
                            </div>
                            <button type="submit">Send</button>
                        </Form>
                    </Formik>
                </div>
            </div>
        </div>
    )
}

export default ContactUS
