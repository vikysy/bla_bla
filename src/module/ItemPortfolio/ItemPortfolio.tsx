import { FC, useState } from 'react';
import cl from './ItemPortfolio.module.scss';
import { PortfolioItem } from '../../components/portfolio/PortfolioItem';
import Modal from '../modal/Modal';
import InfoModal from './infoModal/InfoModal';

interface ItemPortfolioProps {
    item: PortfolioItem
}

const ItemPortfolio: FC <ItemPortfolioProps> = ({item}) => {
    const [openModal, setOpenModal] = useState(false);

    return (
        <div>
            <div className={cl.item} onClick={() => setOpenModal(true)}>
                <img src={item._img} alt="portfolio" />
                <div className={cl.item__hover}>
                    <div className={cl.item__hover_icon}>
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </div>
                </div>
            </div>
            <Modal visible={openModal} setVisible={setOpenModal}>
                <InfoModal item={item} />
            </Modal>
        </div>
    )
};

export default ItemPortfolio;