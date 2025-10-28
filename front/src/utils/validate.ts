import { ILoginProps, ILoginPropsErrors } from "@/types";
import * as Yup from 'yup';

export const validateLoginForm = (values: ILoginProps) => {
    const errors: ILoginPropsErrors = {};
    if (!values.email) {
        errors.email = 'Required';
    } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
        errors.email = 'Invalid email address';
    }
    if (!values.password) {
        errors.password = 'Required';
    }
    if (values.password.length < 6) {
        errors.password = 'Most have 6 or + caracters';
    }
    return errors;                   
}

export const validateSchemaRegister = Yup.object({
        email: Yup.string().email('Invalid email address').required('Required'),
        password: Yup.string().min(6, 'Most have 6 or + caracters').required('Required'),
        validatePassword: Yup.string().oneOf([Yup.ref('password')], "Passwords must be equals"),
        name: Yup.string().required('Required'),
        address: Yup.string().required('Required'),
        phone: Yup.string().required('Required').matches(/^[0-9]+$/, "Must be only digits")
    })