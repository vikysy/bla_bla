import { FC, useState } from 'react';
import MyButton from '../../UI/myButton/MyButton';
import cl from './AboutBrand.module.scss';
import Modal from '../../module/modal/Modal';

const AboutBrand: FC = () => {
    const [openModal, setOpenModal] = useState(false);

    return (
        <div id="brand">
            <div className={cl.brand}>
                <div className={cl.brand__container}>
                    <h1>We Build <strong>Brand</strong></h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
                        nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                    </p>
                    <MyButton 
                        text='LEARN MORE'
                        onClick={() => setOpenModal(true)} 
                    />
                    <div className={cl.arrow_button}>
                        <a href="#portfolio">
                            <i className="fas fa-chevron-down"></i>
                        </a>
                    </div>
                    <Modal visible={openModal} setVisible={setOpenModal} >
                        <p>
                            zdes dolzhna byt kakaya-to vazhnaya informaciya
                        </p>
                    </Modal>
                </div>
            </div>
        </div>
    )
};

export default AboutBrand;