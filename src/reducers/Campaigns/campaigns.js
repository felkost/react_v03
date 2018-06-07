const initialState = [
    {
        id: '92e3284e-77c5-49c5-6a3c-b…54-acdf',
        name: 'young females',
        begAge: 10,
        endAge: 40,
        genderId: 1,
        begDate: '01.01.2010',
        endDate: '01.01.2020',
        isSplashScreen: false,
        slideIds: ['aeca-12-54-ceac','0754-12-54-acdf'],
        devices: []
    },
    {
        id: '00933fef-f498-4b44-5c38-a6d79bfede0a',
        name: 'old males',
        begAge: 40,
        endAge: 80,
        genderId: 2,
        begDate: '01.01.2011',
        endDate: '01.01.2021',
        isSplashScreen: true,
        slideIds: ['dfsgfd-12-54-acdf','54654-n12-54-acdf','0754-12-ghj-acdf'],
        devices: []
    },

]

export default function campaigns(state = initialState, action) {
    switch (action.type) {
        case 'ACTION_CREATE_CAMPAIGN':
            return [...state, {
                id: getNewGUID(),
                name: action.item.name,
                begAge: action.item.begAge,
                endAge: action.item.endAge,
                genderId: action.item.genderId,
                begDate: action.item.begDate,
                endDate: action.item.endDate,
                isSplashScreen: action.item.isSplashScreen,
                slideIds: action.item.slideIds,
                devices: action.item.devices
            }];
        case 'ACTION_UPDATE_CAMPAIGN':
            return [...state.filter(item => item.id !== action.item.id), {
                id: action.item.id,
                name: action.item.name,
                begAge: action.item.begAge,
                endAge: action.item.endAge,
                genderId: action.item.genderId,
                begDate: action.item.begDate,
                endDate: action.item.endDate,
                isSplashScreen: action.item.isSplashScreen,
                slideIds: action.item.slideIds,
                devices: action.item.devices
            }];
        case 'ACTION_REMOVE_CAMPAIGN':
            return state.filter(item => item.id !== action.id);
        case 'ACTION_COPY_CAMPAIGN':
            return [...state, {
                id: getNewGUID(),
                name: action.item.name + " copy",
                begAge: action.item.begAge,
                endAge: action.item.endAge,
                genderId: action.item.genderId,
                begDate: action.item.begDate,
                endDate: action.item.endDate,
                isSplashScreen: false,
                slideIds: action.item.slideIds,
                devices: action.item.devices
            }];
        default:
            return state;
    }
};

const S4 = () => {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
}; 
const getNewGUID = () => (S4() + S4() + "-" + S4() + "-4" + S4().substr(0, 3) + "-" + S4() + "-" + S4() + S4() + S4()).toLowerCase();