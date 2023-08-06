import img1 from './imgs/img-1.png';
import img2 from './imgs/img-2.png';
import img3 from './imgs/img-3.png';
import img4 from './imgs/img-4.png';
import img5 from './imgs/img-5.png';
import img6 from './imgs/img-6.png';
import img7 from './imgs/img-1.png';
import img8 from './imgs/img-2.png';

export class PortfolioItem {
    _img: any;
    _sort: string[];
    _desc: {title: string, desc: string};

    constructor(img: any, sort: string[], desc: {title: string, desc: string}) {
        this._img = img;
        this._sort = sort;
        this._desc = desc;
    }
}

const item1 = new PortfolioItem(
    img1,
    ['all', 'web design'],
    {
        title: 'item_1',
        desc: 'pharetra et ultrices neque ornare aenean euismod elementum nisi quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus'
    }
);
const item2 = new PortfolioItem(
    img2,
    ['all', 'graphic design'], 
    {
        title: 'item_2',
        desc: 'pharetra et ultrices neque ornare aenean euismod elementum nisi quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus'
    }
);
const item3 = new PortfolioItem(
    img3,
    ['all', 'flat design'],
    {
        title: 'item_3',
        desc: 'pharetra et ultrices neque ornare aenean euismod elementum nisi quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus'
    }
);
const item4 = new PortfolioItem(
    img4,
    ['all', 'web design'],
    {
        title: 'item_4',
        desc: 'pharetra et ultrices neque ornare aenean euismod elementum nisi quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus'
    }
);
const item5 = new PortfolioItem(
    img5,
    ['all', 'flat design'],
    {
        title: 'item_5',
        desc: 'pharetra et ultrices neque ornare aenean euismod elementum nisi quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus'
    }
);
const item6 = new PortfolioItem(
    img6,
    ['all', 'web design'],
    {
        title: 'item_6',
        desc: 'pharetra et ultrices neque ornare aenean euismod elementum nisi quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus'
    }
);
const item7 = new PortfolioItem(
    img7,
    ['all', 'graphic design'],
    {
        title: 'item_7',
        desc: 'pharetra et ultrices neque ornare aenean euismod elementum nisi quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus'
    }
);
const item8 = new PortfolioItem(
    img8,
    ['all', 'flat design'],
    {
        title: 'item_8',
        desc: 'pharetra et ultrices neque ornare aenean euismod elementum nisi quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus'
    }
);

const items: PortfolioItem[] = [item1, item2, item3, item4, item5, item6, item7, item8];

export default items;