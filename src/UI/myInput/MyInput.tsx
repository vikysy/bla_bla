import { FC } from 'react'
import cl from './MyInput.module.scss';

export interface MyInputProps {
    placeholder: string,
    value: string,
    setValue: any,
    type?: string,
    required?: boolean,
    classes?: string
}

const MyInput: FC <MyInputProps> = ({type='string', placeholder, value, setValue, required=false, classes}) => {
  return (
    <input 
        type={type} 
        placeholder={placeholder}
        value={value}
        onChange={(e:any) => setValue(e.target.value)}
        className={[cl.input, classes]. join(' ')}
        required={required}
    />
  )
}

export default MyInput