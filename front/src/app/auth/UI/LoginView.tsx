'use client'

import React from 'react'
import { Form, Formik } from 'formik';
import { validateLoginForm } from '@/utils/validate';
import SubmitButton from '../../components/SubmitButton/SubmitButton';
import FieldCustom from '../../components/FieldCustom/FieldCustom'
import { login } from '@/utils/auth.helper';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';

function LoginView() {

    const router = useRouter()
    const {setUserData} = useAuth()


    return (
        <div className='form-bg'>
            <Formik
                initialValues={{ email: '', password: '' }}
                validate={validateLoginForm}
                onSubmit={async (values) => {
                    const response = await login(values)
                    /* localStorage.setItem("userSession", JSON.stringify({token: response.token, user: response.user})) */
                    const {token, user} = response
                    setUserData({token, user})
                    router.push("/")
                }}
            >
                {({ errors }) => (
                    <Form
                        className="flex flex-col justify-center items-center my-6 h-100"
                    >
                        <FieldCustom label="Email" nameField="email" type="email" placeholder="johnHandcock@mail.com" />

                        <FieldCustom label="Password" nameField="password" type="password" placeholder="*******" />

                        <SubmitButton text="Login" disabled={errors.email || errors.password ? true : false} />
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default LoginView
