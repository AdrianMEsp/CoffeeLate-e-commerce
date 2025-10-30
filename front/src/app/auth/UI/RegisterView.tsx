'use client'

import React from 'react'
import { Form, Formik } from 'formik';
import { validateSchemaRegister } from '@/utils/validate';
import SubmitButton from '../../components/SubmitButton/SubmitButton';
import FieldCustom from '../../components/FieldCustom/FieldCustom'
import { register } from '@/utils/auth.helper';
import { useRouter } from 'next/navigation';

function RegisterView() {
    const router = useRouter()

    return (
        <div className='form-bg'>
            <Formik
                initialValues={{ email: '', password: '', validatePassword: '', name: '', address: '', phone: '' }}
                validationSchema={validateSchemaRegister}
                onSubmit={async (values, {resetForm}) => {
                    await register(values)
                    resetForm();
                    router.push("/auth/login")
                }}
            >
                {({ errors }) => (
                    <Form
                        className="flex flex-col justify-center items-center my-6 h-160"
                    >
                        <FieldCustom label="Email:" nameField="email" type="email" placeholder="johnHandcock@mail.com" />

                        <FieldCustom label="Password:" nameField="password" type="password" placeholder="*******" />

                        <FieldCustom label="Validate Password:" nameField="validatePassword" type="password" placeholder="*******" />

                        <FieldCustom label="Full Name:" nameField="name" type="text" placeholder="John Handcock" />

                        <FieldCustom label="Address:" nameField="address" type="text" placeholder="123 Av Mitre" />

                        <FieldCustom label="Phone Number:" nameField="phone" type="text" placeholder="155 555 5555" />

                        <SubmitButton text="Register" disabled={
                            errors.email
                                || errors.password
                                || errors.validatePassword
                                || errors.address
                                || errors.name
                                || errors.phone 
                                
                                ? true : false} />
                    </Form>
                )}
            </Formik>
        </div >
    )
}

export default RegisterView