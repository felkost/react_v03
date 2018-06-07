var borderUnfocused = '1px dashed gray';
//var borderFocused = '2px solid blue';


let initialstate = {
    focused: false,
    elementType: "Panel",
    renderElement: true, 
    value:  "Your text",
    panelFocused: false,
    textFocused: false,
    position: 
    {
        x: 100,
        y: 100,
        w: 320,
        h: 200
    },
    animationIn:  "none",
    animationDurationIn: 1,
    animationOut:  "none", 
    animationDurationOut:  1,
    boxStyle: {    
        display: 'flex',
        alignItems: 'center',
        zIndex: 200,
      },
    innerBoxStyle: {    
        backgroundColor: 'transparent',
        display: 'flex',
        alignItems: 'center',
        border:  borderUnfocused,
        width: "100%", 
        height: "100%",
        justifyContent: "center"
      },
    inlineStyle: {
        flex: 1,    
        textAlign: 'center',
        alignSelf:   'center',
    },
    textStyle:
    {
        color:  "black",
        fontSize :  30,
        fontStyle :  "normal",
        fontWeight :  "normal",
        cursor: 'text'
    },
}      


export default function textpanels(state = [], action) {
    switch (action.type) {
        case 'ACTION_ADD':
            return [
                ...state,
                {
                    id: action.id,
                    elementState: initialstate
                }
            ]
        case 'ACTION_DELETE':
            return state.filter(({ id }) => id !== action.id)
        case 'ACTION_UPDATEPANELSTATE':
            return state.map(item =>
                (item.id === action.id)
                    ? { ...item, elementState: item.elementState }
                    : item
            )
        case 'ACTION_UPDATEPANELVALUE':
            return state.map(item =>
                    (item.id === action.id && action.level != null)
                        ? { ...item, elementState: { ...item.elementState, [action.level]: {...item.elementState[action.level], [action.key] :  action.value}}}
                        : (item.id === action.id )
                            ? { ...item, elementState: { ...item.elementState, [action.key] :  action.value}}
                            : item
                )
        case 'ACTION_SETPANELFOCUSED':
            return state.map(item =>
                    (item.id === action.id )
                            ? { ...item, elementState: { ...item.elementState, focused :  true}}
                            : { ...item, elementState: { ...item.elementState, focused :  false}}
                )
        case 'ACTION_SET_ACTIVE':
            return state.map(item =>
                (item.id === action.id)
                    ? { ...item, elementState: !item.active }
                    : item
            )

        default:
            return state;
    }
};