'use client'

import React from 'react'
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { validateSchemaRegister } from '@/utils/validate';

function RegisterView() {

    return (
        <div>
            <Formik
                initialValues={{ email: '', password: '', name: '', address: '', phone: '' }}

                validationSchema={validateSchemaRegister}


                onSubmit={(values) => {
                    alert("Envio de form exitoso")
                }}
            >
                {({ errors }) => (
                    <Form>
                        <label>Email:</label>
                        <Field
                            name="email"
                            placeholder="johnHandcock@mail.com"
                            type="email" />
                        <ErrorMessage name="email" component="div" />

                        <label>Password:</label>
                        <Field
                            name="password"
                            placeholder="*******"
                            type="password"
                        />
                        <ErrorMessage name="password" component="div" />

                        <label>Full Name:</label>
                        <Field
                            name="name"
                            placeholder="John Handcock"
                            type="text" />
                        <ErrorMessage name="name" component="div" />

                        <label>Address:</label>
                        <Field
                            name="address"
                            placeholder="123 Av Mitre"
                            type="text" />
                        <ErrorMessage name="address" component="div" />

                        <label>Phone Number:</label>
                        <Field
                            name="phone"
                            placeholder="155 555 5555"
                            type="text" />
                        <ErrorMessage name="phone" component="div" />

                        <button type="submit" disabled={
                            errors.email
                                || errors.password
                                || errors.address
                                || errors.name
                                || errors.phone ? true : false}>
                            Submit
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default RegisterView