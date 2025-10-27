import { ErrorMessage, Field } from "formik"

const FieldCustom = ({ label, nameField, type, placeholder }) => {

    return (
        <div className='w-1-2 md:w-1/3 mb-5'>
            <label
                className='flex self-start'
            >{label}</label>
            <Field
                className="w-full rounded text-black "
                name={nameField}
                placeholder={placeholder}
                type={type} />
            <ErrorMessage
            className='text-red-500 flex justify-center'
            name={nameField} component="div"></ErrorMessage>
        </div>
    )
}

export default FieldCustom;
