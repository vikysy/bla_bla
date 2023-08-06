import { FC } from 'react';
import cl from './MySubH2.module.scss';

interface MySubH2Props {
    text: string,
    classes?: string
}

const MySubH2: FC <MySubH2Props> = ({text, classes}) => {
    return (
        <p className={[cl.subH2, classes].join(' ')}>{text}</p>
    )
};

export default MySubH2;