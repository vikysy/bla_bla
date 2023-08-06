import { FC, useEffect } from 'react';
import cl from './Modal.module.scss';

interface ModalProps {
    visible: boolean,
    setVisible: React.Dispatch<React.SetStateAction<boolean>>,
    children?: any
}

const Modal:FC <ModalProps> = ({visible, setVisible, children}) => {

    function close() {
        setVisible(false);
    }

    useEffect(() => {
        if(visible) {
            document.body.style.overflow="hidden";
        } else {
            document.body.style.overflow="visible";
        }
    }, [visible])

    return (
        <div 
            className={visible ? [cl.modal, cl.active].join(' ') : cl.modal}
            onClick={close}
        >
            <div 
                className={cl.modal__container}
                onClick={(e) => e.stopPropagation()}
            >
                <div 
                    className={cl.btn__close}
                    onClick={close}
                >
                    <i className="fa-solid fa-xmark"></i>
                </div>
                <div>
                    {children}
                </div>
            </div>
        </div>
    )
};

export default Modal;