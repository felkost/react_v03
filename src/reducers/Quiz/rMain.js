import {NEW_QUIZ, MODAL_WIN} from '../../actions/Quiz/ActionConst'
const initialState = { view: 'MainContainer', modal:false};

export default function rMain(state = initialState, action) {
    switch (action.type) {
        case NEW_QUIZ:
            return {...state, view: action.view} ;
        case MODAL_WIN:
            return {...state, modal: action.viewModal} ;

        default:
            return state;
    }
};