
import * as Actions from '../../actions'

let timer

export const uiMessage = data => (dispatch, getState) => {

  /*
  props.dispatch(Actions.uiMessage({
    hold: true,
    type: 'fail',
    text: 'text'
  }))
  */

  if(timer) { clearTimeout(timer) }

  dispatch(Actions.uiMessageShow(data))

  if(!data.hold) {    

    timer = setTimeout(() => {
      
      dispatch(Actions.uiMessageClear())
    }, 4000)
  }
}

export const UI_MESSAGE_SHOW = 'UI_MESSAGE_SHOW'
export const uiMessageShow = data => (
  { 
    type: UI_MESSAGE_SHOW,
    payload: {
      data: data
    }
  }
)

export const UI_MESSAGE_CLEAR = 'UI_MESSAGE_CLEAR'
export const uiMessageClear = () => ({ type: UI_MESSAGE_CLEAR })

export const UI_READY = 'UI_READY'
export const uiReady = ready => (
  { 
    type: UI_READY,
    payload: {
      ready: ready
    }
  }
)