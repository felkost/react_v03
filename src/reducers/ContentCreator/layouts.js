const initialState = [
    { activeId: 1 },
    { id: 1, backgrounds: [{ back: '#eee', video: null }] },
    { id: 2, backgrounds: [{ back: '#eee', video: null }, { back: '#ddd', video: null }] },
    { id: 3, backgrounds: [{ back: '#eee', video: null }, { back: '#ddd', video: null }, { back: '#ccc', video: null }] },
    { id: 4, backgrounds: [{ back: '#eee', video: null }, { back: '#ddd', video: null }, { back: '#ccc', video: null }, { back: '#bbb', video: null }] },
];

export default function layouts(state = initialState, action) {
    switch (action.type) {
        case 'ACTION_CHANGE_TEMPLATE':
            var newTempate = [...state];
            newTempate[0].activeId = action.id;;
            return newTempate;
        case 'ACTION_CHANGE_BACKGROUND':
            var newBackground = [...state];
            newBackground[newBackground[0].activeId].backgrounds[action.payload.index].back = action.payload.back;
            newBackground[newBackground[0].activeId].backgrounds[action.payload.index].video = null;
            return newBackground;
        case 'ACTION_SET_VIDEO_BACKGROUND':
            var newBackVideo = [...state];
            newBackVideo[newBackVideo[0].activeId].backgrounds[action.payload.index].video = action.payload.src;
            return newBackVideo;
        default:
            return state;
    }
};