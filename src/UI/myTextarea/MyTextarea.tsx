import { FC } from 'react';
import { MyInputProps } from '../myInput/MyInput';
import cl from '../myInput/MyInput.module.scss';

const MyTextarea: FC <MyInputProps> = ({placeholder, value, setValue, required = false, classes}) => {
    return (
        <textarea
            placeholder={placeholder}
            value={value}
            onChange={(e:any) => setValue(e.target.value)}
            className={[cl.input, classes]. join(' ')}
            required={required}
        />
    )
};

export default MyTextarea;