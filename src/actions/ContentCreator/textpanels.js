let nextElementId = 0

export const addTextPanel = (element, state) => ({
  type: 'ACTION_ADD',
  id: nextElementId++,
  state : state,
  element
})

export const deleteTextPanel = id => ({
    type: 'ACTION_DELETE',
    id
  })

export const updatePanelState = (element, state) => ({
    type: 'ACTION_UPDATEPANELSTATE',
    elementState : state,
    element
  })


  export const setPanelFocused = (id) => ({
    type: 'ACTION_SETPANELFOCUSED',
    id
  })
  

export const updateKeyValue = (id, key, value, level) => ({
    type: 'ACTION_UPDATEPANELVALUE',
    key,
    value,
    level,
    id
  })


export const setActive = element => ({
        type: 'ACTION_SET_ACTIVE',
        element
})

export const setZIndex = (element, direction) => ({
    type: 'ACTION_SET_ZINDEX',
    direction: direction,
    element
})


export const setTextAlignment = (id, direction) => ({
    type: 'ACTION_SET_TEXTALIGNMENT',
    direction: direction,
    id
})

