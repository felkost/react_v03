export const changeLayout = (id)  => {
    return {
        type: 'ACTION_CHANGE_TEMPLATE',
        id
    }
};

export const changeBackground = (index, back)  => {
    return {
        type: 'ACTION_CHANGE_BACKGROUND',
        payload: {index, back}
    }
};

export const setVideoToBackground = (index, src)  => {
    return {
        type: 'ACTION_SET_VIDEO_BACKGROUND',
        payload: {index, src}
    }
};