import cl from './Header.module.scss';
import logo from '../../assets/icons/b-logo.png';
import { FC, useState } from 'react';

const Header: FC = () => {
    const [visible, setVisible] = useState(false);

    function closeMenu() {
        setVisible(false);
    }

    return (
        <header id='header'>
            <div className={cl.header__container}>
                <div className={cl.header}>

                    <div className={cl.logo}>
                        <a href="#">
                            <div className={cl.logo__img}>
                                <img src={logo} alt="logo" />
                            </div>
                            <div className={cl.logo__text}>
                                <div className={cl.logo__text_title}>BLA BLA</div>
                                <div className={cl.logo__text_subtitle}>One Page Flat Template</div>
                            </div>
                        </a>
                    </div>

                    <div className={visible ? [cl.nav, cl.active].join(' ') : cl.nav} >
                        <nav>
                            <ul>
                                <li>
                                    <a href="#brand" onClick={closeMenu}>HOME</a>
                                </li>
                                <li>
                                    <a href="#portfolio" onClick={closeMenu}>PORTFOLIO</a>
                                </li>
                                <li>
                                    <a href="#about" onClick={closeMenu}>ABOUT</a>
                                </li>
                                <li>
                                    <a href="#contact" onClick={closeMenu}>CONTACT</a>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <div
                        className={cl.menu}
                        onClick={() => setVisible(!visible)}
                    >
                        {visible
                            ? <i className="fas fa-times"></i>
                            : <i className="fas fa-bars"></i>
                        }
                    </div>
                    
                </div>
            </div>
        </header>
    )
};

export default Header;