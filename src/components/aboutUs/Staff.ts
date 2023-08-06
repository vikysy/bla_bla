import ava1 from './imgs/ava-1.png';
import ava2 from './imgs/ava-3.png';
import ava3 from './imgs/ava-2.png';

export class Employee {
    _img: any;
    _socials: string[];
    _fullName: string;
    _position: string;
    _description: string;

    constructor(img: any, socials: string[], fullName: string, position: string, description: string) {
        this._img = img;
        this._socials = socials;
        this._fullName = fullName;
        this._position = position;
        this._description = description;
    }
}

const employee1 = new Employee (
    ava1,
    ['https://facebook.com/', 'https://twitter.com/', 'https://plus.google.com/', 'https://dribbble.com/'],
    'Melannie Doe',
    'Project Manager',
    'Ut wisi enim ad minim veniam, quis nostrud exerci tation'
);
const employee2 = new Employee (
    ava2, 
    ['https://facebook.com/', 'https://twitter.com/', 'https://plus.google.com/', 'https://dribbble.com/'],
    'Jhonnie Doe',
    'Graphic Designer',
    'Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.'
);
const employee3 = new Employee (
    ava3, 
    ['https://facebook.com/', 'https://twitter.com/', 'https://plus.google.com/', 'https://dribbble.com/'],
    'Daniel Doe',
    'Web Designer',
    'Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo'
);

const staff: Employee[] = [employee1, employee2, employee3];
export default staff;