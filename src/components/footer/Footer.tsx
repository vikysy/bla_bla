import { FC } from 'react';
import cl from './Footer.module.scss';
import MyButton from '../../UI/myButton/MyButton';

const Footer: FC = () => {
    return (
        <div id='footer'>
            <div className={cl.footer}>
                <div className={cl.footer__text}>
                    © Copyright 2016 Bla Bla Studio  |  One Page Flat Template
                </div>
                <div className={cl.btn__up}>
                    <a href="#">
                        <MyButton children={<i className="fa-solid fa-chevron-up"></i>} />
                    </a>
                </div>
            </div>
        </div>
    )
};

export default Footer;