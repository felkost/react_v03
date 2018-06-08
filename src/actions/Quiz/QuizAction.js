import {ADD_BLOCK, EDIT_BLOCK, DESIGN_BLOCK} from './ActionConst'

export function actionToolAddBlock(value) {
    return { type: ADD_BLOCK, isPress: value }
  }

  export function actionToolEditlock(value) {
    return { type: EDIT_BLOCK, isPress: value }
  }

  export function actionToolDesignlock(value) {
    return { type: DESIGN_BLOCK, isPress: value }
  }

