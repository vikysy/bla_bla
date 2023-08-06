import { FC } from "react";
import cl from './ContactUs.module.scss';
import MyH2 from "../../UI/myH2/MyH2";
import MySubH2 from "../../UI/mySubH2/MySubH2";
import Form from "../../module/form/Form";
import MyMap from "../../module/myMap/MyMap";

const ContactUs: FC = () => {
    return (
        <div id="contact">
            <div className={cl.contact}>
                <div className={cl.contact__container}>
                    <MyH2 text='Contact Us' />
                    <MySubH2 text='Lorem ipsum dolor sit amet, consectetuer adipiscing elit.' classes={cl.size} />
                    <div className={cl.flex}>
                        <Form />
                        <MyMap />    
                    </div> 
                </div>
            </div>
        </div>
    )
};

export default ContactUs;