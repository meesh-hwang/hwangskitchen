
export function getAllFoods(){
    return FOODDATA;
}

export function getFoodById(id){

    return FOODDATA.find(item => item.id === id);    
}

// Menu items
export const FOODDATA = 
[
    {
        id: '001',
        name: 'Kimchi Soup', 
        active: false, 
        keyImage: 'https://i.ibb.co/VtH5LRw/001.png',
        price: '9.95'
    },
    {
        id: '002', 
        name: 'Bibimbap', 
        active: false, 
        keyImage:'https://i.ibb.co/NWBMS0B/002.png',
        price: '9.95'
    },
    {
        id: '003', 
        name: 'Japchae', 
        active: false, 
        keyImage:'https://i.ibb.co/ZN4txpk/003.png',
        price: '9.95' 
    },
    {
        id: '004', 
        name: 'Galbi Combo', 
        active: false, 
        keyImage:'https://i.ibb.co/pvWmBpk/004.png',
        price: '17.95'
    },
    {
        id: '005', 
        name: 'Beef Soup', 
        active: false, 
        keyImage:'https://i.ibb.co/wwY7S4h/005.png',
        price: '9.95'
    },
    {
        id: '006', 
        name: 'Crispy Chicken', 
        active: false, 
        keyImage:'https://i.ibb.co/HK1zSD7/006.png',
        price: '9.95' 
    },
    {
        id: '007', 
        name: 'KMP', 
        active: false,
        keyImage:'https://i.ibb.co/ZWLCRGp/007.png',
        price: '9.95'
    },
    {
        id: '008', 
        name: 'Spicy Tofu Soup', 
        active: false, 
        keyImage:"https://i.ibb.co/bFX7gjy/008.png",
        price: '9.95'
    }
];

export default FOODDATA;