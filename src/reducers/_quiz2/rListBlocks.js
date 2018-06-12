import {ADD_BLOCK_TO_LIST, UPDATE_ORDER_BLOCKS, DEL_BLOCK_FROM_LIST} from '../../actions/Quiz/ActionConst'
const initialState = {
    dictionary:['Welcom', 'Short text', 'Multiple choice', 'Picture choice', 'Yes/No', 'Thank you screen'],
    listVisible:[],
    orderBloks: []
}

let findBlock = (arr, val) => {
    for(let i=0; i<arr.length; ++i)
        if(arr[i]['id']===val)
        return i;
    return -1;
}

export default function rListBlocks(state = initialState, action) {
    switch (action.type) {
        case ADD_BLOCK_TO_LIST:
            return {...state, listVisible: [...state.listVisible, +action.id]};
        case UPDATE_ORDER_BLOCKS:
            return {...state, orderBloks: action.newOrderList};
        case DEL_BLOCK_FROM_LIST:
            //listObj = state
            //ndx = findBlock(state, action.id);
           // state[ndx]['visible']=false;
            return state;
        default:
            return state;
    }
};