import f1 from '/public/images/female/1.png'
import f2 from '/public/images/female/2.png'
import f3 from '/public/images/female/3.png'
import f4 from '/public/images/female/4.png'
import f5 from '/public/images/female/5.png'
import f6 from '/public/images/female/6.png'
import f7 from '/public/images/female/7.png'
import f8 from '/public/images/female/8.png'
import f9 from '/public/images/female/9.png'
import m1 from '/public/images/male/1.png'
import m2 from '/public/images/male/2.png'

import {StaticImageData} from 'next/image';

export interface Products { 
    id: number;
    name: string;
    category: string;
    categoryname: string;
    price: number;
    images: StaticImageData[];
    productDetails: string;
    productCare: string[];
}

export const products: Products[] = [{
    "id": 1,
    "name": "Brushed Raglan Sweatshirt",
    "category": "female",
    'categoryname': 'Sweater',
    "price": 195,
    "images": [f1],
    "productDetails": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "productCare": ["Hand wash using cold water.",
        "Do not using bleach.",
        "Hang it to dry.",
        " Iron on low temperature."]
    },
    {
        "id": 2,
        "name": "Cameryn Sash Tie Dress",
        "category": "female",
        'categoryname': 'Dress',
        "price": 545,
        "images": [f2],
        "productDetails": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        "productCare": ["Hand wash using cold water.",
            "Do not using bleach.",
            "Hang it to dry.",
            " Iron on low temperature."]
    },
    {
        "id": 3,
        "name": "Flex Sweatshirt",
        "category": "female",
        'categoryname': 'Sweater',
        "price": 175,
        "images": [f3],
        "productDetails": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "productCare": ["Hand wash using cold water.",
            "Do not using bleach.",
            "Hang it to dry.",
            " Iron on low temperature."]
    },
    {
        "id": 4,
        "name": "Flex Sweatpants",
        "category": "female",
        'categoryname': 'Pants',
        "price": 175,
        "images": [f4],
        "productDetails": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "productCare": ["Hand wash using cold water.",
            "Do not using bleach.",
            "Hang it to dry.",
            " Iron on low temperature."]
    },
    {
        "id": 5,
        "name": "Pink Fleece Sweatpants",
        "category": "female",
        'categoryname': 'Pants',
        "price": 195,
        "images": [f5],
        "productDetails": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "productCare": ["Hand wash using cold water.",
            "Do not using bleach.",
            "Hang it to dry.",
            " Iron on low temperature."]
    },
    {
        "id": 6,
        "name": "Lite Sweatpants",
        "category": "female",
        'categoryname': 'Pants',
        "price": 150,
        "images": [f6],
        "productDetails": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "productCare": ["Hand wash using cold water.",
            "Do not using bleach.",
            "Hang it to dry.",
            " Iron on low temperature."]
    },
    {
        "id": 7,
        "name": "Imperial Alpace Hoodie",
        "category": "female",
        'categoryname': 'Jackets',
        "price": 525,
        "images": [f7],
        "productDetails": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "productCare": ["Hand wash using cold water.",
            "Do not using bleach.",
            "Hang it to dry.",
            " Iron on low temperature."]
    },
    {
        "id": 8,
        "name": "Muscle Tank",
        "category": "female",
        'categoryname': 'T Shirt',
        "price": 75,
        "images": [f8],
        "productDetails": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "productCare": ["Hand wash using cold water.",
            "Do not using bleach.",
            "Hang it to dry.",
            " Iron on low temperature."],
    },
    {
        "id": 9,
        "name": "Brushed Bomber",
        "category": "female",
        'categoryname': 'Jackets',
        "price": 225,
        "images": [f9],
        "productDetails": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "productCare": ["Hand wash using cold water.",
            "Do not using bleach.",
            "Hang it to dry.",
            " Iron on low temperature."]
    },
    {
        "id": 10,
        "name": "Flex Push Button Bomber",
        "category": "male",
        'categoryname': 'Jackets',
        "price": 225,
        "images": [m1],
        "productDetails": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "productCare": ["Hand wash using cold water.",
            "Do not using bleach.",
            "Hang it to dry.",
            " Iron on low temperature."]
    },
    {
        "id": 11,
        "name": "Raglan Sweatshirt",
        "category": "male",
        'categoryname': 'Sweater',
        "price": 225,
        "images": [m2],
        "productDetails": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "productCare": ["Hand wash using cold water.",
            "Do not using bleach.",
            "Hang it to dry.",
            " Iron on low temperature."]
    }
]