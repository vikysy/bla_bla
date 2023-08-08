import { FC, useState } from "react";
import cl from './NavLink.module.scss';

interface NavLinkProps {
    href: string,
    text: string, 
    onClick: any
}

const NavLink: FC<NavLinkProps> = ({href, text, onClick}) => {
    const [hover, setHover] = useState<boolean>(false);

    return (
        <li 
            className={ hover ? [cl.link, cl.hover].join(' ') : cl.link }
            onClick={onClick} 
        >
            <a href={href}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            >
                {text}
            </a>
        </li>
    )
};

export default NavLink;