'use client'

import React from 'react'
import { Field, Form, Formik } from 'formik';
import { validateLoginForm } from '@/utils/validate';
import SubmitButton from '../SubmitButton/SubmitButton';
import ErrorMessageCustom from '../ErrorMessageCustom/ErrorMessageCustom'

function LoginView() {
    return (
        <div>
            <Formik
                initialValues={{ email: '', password: '' }}
                validate={validateLoginForm}
                onSubmit={(values) => {
                    alert("Envio de form exitoso")
                }}
            >
                {({ errors }) => (
                    <Form
                        className="flex flex-col justify-center items-center my-6
                    
                    "
                    >
                        <div className='w-1-2 md:w-1/3'>
                            <label
                                className='flex self-start'
                            >First Name</label>
                            <Field
                                className="mb-5 w-full rounded text-black "
                                name="email"
                                placeholder="johnHandcock@mail.com"
                                type="email" />
                            <ErrorMessageCustom name="email" component="div" />
                        </div>

                        <div className='w-1-2 md:w-1/3'>
                            <label
                                className='flex self-start'
                            >Password</label>
                            <Field
                                className="mb-5 w-full rounded text-black"
                                name="password"
                                placeholder="*******"
                                type="password"
                            />
                            <ErrorMessageCustom name="password" component="div" />
                        </div>

                        <SubmitButton text="Login" disabled={errors.email || errors.password ? true : false} />
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default LoginView
