import { FC } from 'react';
import cl from './MyH2.module.scss';

interface MyH2Props {
    text: string,
    classes?: string
}

const MyH2: FC <MyH2Props> = ({text, classes}) => {
    return (
        <h2 className={[cl.myH2, classes].join(' ')}>{text}</h2>
    )
};

export default MyH2;