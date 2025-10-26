'use client'

import React from 'react'
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { validateLoginForm } from '@/utils/validate';

function LoginView() {
    return (
        <div>
            <Formik initialValues={{ email: '', password: '' }}
                validate={validateLoginForm}

                onSubmit={(values) => {
                    alert("Envio de form exitoso")
                }}
            >
                {({ errors }) => (
                    <Form>
                        <label>First Name</label>
                        <Field
                            name="email"
                            placeholder="johnHandcock@mail.com"
                            type="email" />
                        <ErrorMessage name="email" component="div" />

                        <label>Password</label>
                        <Field
                            name="password"
                            placeholder="*******"
                            type="password"
                        />
                        <ErrorMessage name="password" component="div" />

                        <button type="submit" disabled={errors.email || errors.password ? true : false}>
                            Submit
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default LoginView
