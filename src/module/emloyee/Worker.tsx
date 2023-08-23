import { FC } from "react";
import cl from './Worker.module.scss';
import { Employee } from "../../components/aboutUs/Staff";

interface WorkerProps {
    employee: Employee
}

const Worker: FC<WorkerProps> = ({ employee }) => {
    const iconSocials = [
        <i className="fa-brands fa-facebook-f"></i>, 
        <i className="fa-brands fa-twitter"></i>, 
        <i className="fa-brands fa-google-plus-g"></i>,
        <i className="fa-brands fa-dribbble"></i>
    ];

    return (
        <div className={cl.employee}>
            <div className={cl.block__img}>
                <img src={employee._img} alt={employee._fullName} />
                <div className={cl.socials}>
                    {employee._socials.map((social, index) => (
                        <a key={index} href={social} target="_blanck" rel="nofollow" >{iconSocials[index]}</a>
                    ))}
                </div>
            </div>
            <div className={cl.block__info}>
                <p className={cl.title}>
                    {employee._fullName}
                </p>
                <p className={cl.subtitle}>
                    {employee._position}
                </p>
                <p className={cl.desc}>
                    {employee._description}
                </p>
            </div>
        </div>
    )
};

export default Worker;