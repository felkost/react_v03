import {NEW_QUIZ, MODAL_WIN, SET_SHAPE_TEMPLATE} from './ActionConst'

//action for tool-button
export function actNewQuiz(value) {
    return { type: NEW_QUIZ, view:value }
}

export function actToggleModal(value) {
    return { type: MODAL_WIN, viewModal:value }
}

export function actSetShapeTemplate(shape) {
    return { type: SET_SHAPE_TEMPLATE, viewModal:shape }
}