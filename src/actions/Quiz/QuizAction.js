import {ADD_BLOCK, EDIT_BLOCK, DESIGN_BLOCK,
        ADD_BLOCK_TO_LIST, DEL_BLOCK_FROM_LIST,
        UPDATE_ORDER_BLOCKS} from './ActionConst'

//action for tool-button
export function actionToolAddBlock(value) {
    return { type: ADD_BLOCK, isPress: value }
}

export function actionToolEditlock(value) {
    return { type: EDIT_BLOCK, isPress: value }
}

export function actionToolDesignlock(value) {
    return { type: DESIGN_BLOCK, isPress: value }
}

//action for choose blocks
export function actionAddBlockToList(id) {
  return { type: ADD_BLOCK_TO_LIST, id: id }
}

export function actionDelBlockFromList(id) {
  return { type: DEL_BLOCK_FROM_LIST, id: id }
}


export function actionUpdateOrderListBloks(list) {
    return { type: UPDATE_ORDER_BLOCKS, newOrderList: list }
}