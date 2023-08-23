import { FC, useState } from 'react';
import cl from './Portfolio.module.scss';
import MyH2 from '../../UI/myH2/MyH2';
import MySubH2 from '../../UI/mySubH2/MySubH2';
import btns from './BtnsValue';
import MyButton from '../../UI/myButton/MyButton';
import items from './PortfolioItem';
import ItemPortfolio from '../../module/ItemPortfolio/ItemPortfolio';

const Portfolio: FC = () => {
    const [valueSort, setValueSort] = useState('all');

    return (
        <div id='portfolio' className='scroll-top'>
            <div className={cl.portfolio}>
                <div className={cl.portfolio__container}>
                    <MyH2 text='Portfolio' />
                    <MySubH2 text='Lorem ipsum dolor sit amet, consectetuer adipiscing elit.' />
                    <div className={cl.btns__sort}>
                        {btns.map(btn => (
                            <MyButton
                                key={btn}
                                text={btn}
                                classes={valueSort === btn
                                    ? [cl.portfolio__btn, cl.active].join(' ')
                                    : cl.portfolio__btn
                                }
                                onClick={() => setValueSort(btn)}
                            />
                        ))}
                    </div>
                    <div className={cl.portfolio__items}>
                        {valueSort === 'all'
                            ? items.map((item, index) => (
                                <ItemPortfolio key={index} item={item} />
                            ))
                            : items.map((item, index) => {
                                if (item._sort.some( elem => elem === valueSort) ) {
                                    return <ItemPortfolio key={index} item={item} />
                                }
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Portfolio;