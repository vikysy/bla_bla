import { FC } from "react";
import { PortfolioItem } from "../../../components/portfolio/PortfolioItem";

interface InfoModalProps {
    item: PortfolioItem
}

const InfoModal: FC <InfoModalProps> = ({item}) => {
    return (
        <div>
            <h2>{item._desc.title}</h2>
            <p>{item._desc.desc}</p>
        </div>
    )
};

export default InfoModal;