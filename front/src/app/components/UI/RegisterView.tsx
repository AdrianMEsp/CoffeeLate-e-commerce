'use client'

import React from 'react'
import { Field, Form, Formik } from 'formik';
import { validateSchemaRegister } from '@/utils/validate';
import SubmitButton from '../SubmitButton/SubmitButton';
import ErrorMessageCustom from '../ErrorMessageCustom/ErrorMessageCustom'

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
                    <Form
                        className="flex flex-col justify-center items-center my-6

                    "
                    >
                        <div className='w-1-2 md:w-1/3'>
                            <label
                                className='flex self-start'
                            >Email:</label>
                            <Field
                                className="mb-5 w-full rounded text-black"
                                name="email"
                                placeholder="johnHandcock@mail.com"
                                type="email" />
                            <ErrorMessageCustom name="email" component="div" />
                        </div>

                        <div className='w-1-2 md:w-1/3'>
                            <label
                                className='flex self-start'
                            >Password:</label>
                            <Field
                                className="mb-5 w-full rounded  text-black"
                                name="password"
                                placeholder="*******"
                                type="password"
                            />
                            <ErrorMessageCustom name="password" component="div" />
                        </div>

                        <div className='w-1-2 md:w-1/3'>
                            <label
                                className='flex self-start'
                            >Full Name:</label>
                            <Field
                                className="mb-5 w-full rounded  text-black"
                                name="name"
                                placeholder="John Handcock"
                                type="text" />
                            <ErrorMessageCustom name="name" component="div" />
                        </div>

                        <div className='w-1-2 md:w-1/3'>
                            <label
                                className='flex self-start'
                            >Address:</label>
                            <Field
                                className="mb-5 w-full rounded  text-black"
                                name="address"
                                placeholder="123 Av Mitre"
                                type="text" />
                            <ErrorMessageCustom name="address" component="div" />
                        </div>

                        <div className='w-1-2 md:w-1/3'>
                            <label
                                className='flex self-start'
                            >Phone Number:</label>
                            <Field
                                className="mb-5 w-full rounded text-black"
                                name="phone"
                                placeholder="155 555 5555"
                                type="text" />
                            <ErrorMessageCustom name="phone" component="div" />
                        </div>

                        <SubmitButton text="Register" disabled={
                            errors.email
                                || errors.password
                                || errors.address
                                || errors.name
                                || errors.phone ? true : false} />
                    </Form>
                )}
            </Formik>
        </div >
    )
}

export default RegisterView