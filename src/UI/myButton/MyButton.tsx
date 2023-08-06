import { FC } from 'react';
import cl from './MyButton.module.scss';

interface MyButtonProps {
    text?: string,
    classes?: string,
    onClick?: (() => void) | any,
    type?: 'button' | 'submit',
    children?: any
}

const MyButton: FC <MyButtonProps> = ({text, classes, onClick, type="button", children}) => {
    return (
        <button type={type} className={[cl.myBtn, classes].join(' ')} onClick={onClick}>
            {text || children}
        </button>
    )
};

export default MyButton;