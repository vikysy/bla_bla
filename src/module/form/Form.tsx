import { FC, useState } from "react";
import cl from './Form.module.scss';
import MyInput from "../../UI/myInput/MyInput";
import MyButton from "../../UI/myButton/MyButton";
import MyTextarea from "../../UI/myTextarea/MyTextarea";

const Form: FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    function submitForm(e:any) {
        e.preventDefault();
        if(name && email) {
            alert('The form has been sent');
            setName('');
            setEmail('');
            setMessage('');
        }
    }

    return (
        <form className={cl.form} onSubmit={(e) => submitForm(e)}>
            <div className={cl.required}>
                <MyInput 
                    type="text"
                    placeholder="Your name"
                    value={name}
                    setValue={setName}
                    required={true}
                />
                <MyInput 
                    type="email"
                    placeholder="Your email"
                    value={email}
                    setValue={setEmail}
                    required={true}
                />
            </div>
            <MyTextarea 
                placeholder="Your message"
                value={message}
                setValue={setMessage}
                classes={cl.message}
            />
            <MyButton 
                type="submit"
                text="submit"
                classes={cl.submit}
            />
        </form>
    )
};

export default Form;