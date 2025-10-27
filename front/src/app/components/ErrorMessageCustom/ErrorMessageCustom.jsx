import { ErrorMessage } from "formik"

export default function ErrorMessageCustom({ name, component }) {

    return (
        <ErrorMessage
            className='text-red-500'
            name={name} component={component}></ErrorMessage>
    )

}