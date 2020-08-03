import immutableUpdate from 'immutable-update'

const initialState = {
  message: {
    visible: true,
    type: 'info',
    text: 'Selecciona para publicar'
  },
  ready: false,
  editor: {
    type: 'image'
  }
}

const reducers = { 

  /* Message */

  UI_MESSAGE_SHOW: (state, action) => {

    action.payload.data.type = action.payload.data.type ? 
                                  action.payload.data.type 
                                  :
                                  'info'
    return immutableUpdate(
      state,
      {
        message: {
          visible: true,
          ...action.payload.data
        }
      }
    )
  },

  UI_MESSAGE_CLEAR: (state, action) => {

    return immutableUpdate(
      state,
      {
        message: {
          visible: false,
          hold: false
        }
      }
    )
  },

  /* Ready ? */

  UI_READY: (state, action) => {

    return immutableUpdate(
      state,
      {
        ready: action.payload.ready
      }
    )
  }
}

const uai = (state = initialState, action) => {

  return reducers[action.type] ? 
    reducers[action.type](state, action)
    :
    { ...state }
}

export default uai 