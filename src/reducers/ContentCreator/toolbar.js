const initialState = {
    activeTab: 'tools'
};

export default function toolbar(state = initialState, action) {
    switch (action.type) {
        case 'ACTION_TOGGLE_TAB':
            return { activeTab: action.tab };
        default:
            return state;
    }
};