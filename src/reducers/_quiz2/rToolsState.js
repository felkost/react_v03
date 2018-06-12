import {ADD_BLOCK, EDIT_BLOCK, DESIGN_BLOCK} from '../../actions/Quiz/ActionConst'
const initialState = { button: '', isPress: false};

export default function rToolsState(state = initialState, action) {
    switch (action.type) {
        case ADD_BLOCK:
            return {...state, button:ADD_BLOCK, isPress:action.isPress} ;
        case EDIT_BLOCK:
            return {...state, button:EDIT_BLOCK, isPress:action.isPress} ;
        case DESIGN_BLOCK:
            return {...state, button:DESIGN_BLOCK, isPress:action.isPress} ;
        default:
            return state;
    }
};