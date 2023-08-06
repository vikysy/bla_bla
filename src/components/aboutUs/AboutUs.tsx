import { FC } from 'react';
import MyH2 from '../../UI/myH2/MyH2';
import MySubH2 from '../../UI/mySubH2/MySubH2';
import cl from './AboutUs.module.scss';
import staff from './Staff';
import Worker from '../../module/emloyee/Worker';

const AboutUs: FC = () => {
    return (
        <div id='about'>
            <div className={cl.about}>
                <div className={cl.about__container}>
                    <MyH2 text='About Us' classes={cl.color}/>
                    <MySubH2 
                        text='Lorem ipsum dolor sit amet, consectetuer adipiscing elit.' 
                        classes={[cl.color, cl.size].join(' ')} 
                    />
                    <div className={cl.staff}>
                        {staff.map(employee => (
                            <Worker key={employee._fullName} employee={employee}/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default AboutUs;