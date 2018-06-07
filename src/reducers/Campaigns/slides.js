const initialState = [
    {
        id: 'aeca-12-54-ceac',
        layout: { id: 1, backgrounds: [{ back: '#3498db', video: null }] },
        elements: ['el 1', 'el 2','el 3']
    },
    {
        id: 'ddfa-78-10-deac',
        layout: { id: 2, backgrounds: [{ back: '#2ecc71', video: null },{ back: "url('/img/preview.svg') 100% 100%/cover no-repeat", video: null }] },
        elements: ['hello', 'world']
    },    
    {
        id: '1111-78-10-vvvv',
        layout: { id: 3, backgrounds: [{ back: '#e74c3c', video: null },{ back: '#ecf0f1', video: null },{ back: '#8e44ad', video: null }] },
        elements: ['hello', 'world']
    },    
    {
        id: '0754-12-54-acdf',
        layout: { id: 4, backgrounds: [{ back: '#1abc9c', video: null },{ back: '#16a085', video: null },{ back: '#f1c40f', video: null },{ back: '#f39c12', video: null }] },
        elements: ['hello']
    },
    {
        id: 'dfsgfd-12-54-acdf',
        layout: { id: 4, backgrounds: [{ back: '#009688' },{ back: '#4CAF50' },{ back: '#8BC34A' },{ back: '#CDDC39' }] },
        elements: ['world']
    },    
    {
        id: '0754-12-ghj-acdf',
        layout: { id: 3, backgrounds: [{ back: '#009688' },{ back: '#4CAF50' },{ back: '#8BC34A' }]},
        elements: ['gfhf', 'gfh']
    },
    {
        id: '54654-n12-54-acdf',
        layout: { id: 2, backgrounds: [{ back: '#009688' },{ back: '#4CAF50' }]},
        elements: ['qwe', 'qwe']
    },
    {
        id: 'jj-12-54-ghjgh',
        layout: { id: 1, backgrounds: [{ back: "url('/img/bg4.jpg') 100% 100%/cover no-repeat" }]},
        elements: ['rty', 'rty']
    }

]

export default function slides(state = initialState, action) {
    switch (action.type) {        
        default:
            return state;
    }
};