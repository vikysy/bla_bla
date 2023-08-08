import cl from './Header.module.scss';
import logo from '../../assets/icons/b-logo.png';
import { FC, useState } from 'react';
import NavLink from '../../UI/navLink/NavLink';

const Header: FC = () => {
    const [visible, setVisible] = useState(false);

    const links = [
        {href: '#brand', text: 'home'},
        {href: '#portfolio', text: 'portfolio'},
        {href: '#about', text: 'about'},
        {href: '#contact', text: 'contact'}
    ]

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
                                {links.map( link => (
                                    <NavLink
                                        key={link.text}
                                        href={link.href}
                                        text={link.text}
                                        onClick={closeMenu}
                                    />
                                ))}
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