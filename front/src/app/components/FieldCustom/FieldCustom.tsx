import { ErrorMessage, Field } from "formik"

interface FieldCustomProps {
  label: string;
  nameField: string;
  type: string;
  placeholder?: string;
}

const FieldCustom: React.FC<FieldCustomProps> = ({ label , nameField, type, placeholder }) => {

    return (
        <div className='w-1-2 md:w-1/3 mb-5'>
            <label
                className='flex self-start'
            >{label}</label>
            <Field
                className="w-full rounded text-blackPrimary "
                name={nameField}
                placeholder={placeholder}
                type={type} />
            <ErrorMessage
            className='text-error flex justify-center'
            name={nameField} component="div"></ErrorMessage>
        </div>
    )
}

export default FieldCustom;
