import store from '../redux/store'
import * as Actions from '../redux/actions'
import {
  throttle
} from 'lodash'

const saveState = data => {

  try {

    const serializedState = JSON.stringify(data);
    localStorage.setItem('PlayCloudUIState', serializedState);

  } catch(e) {

    console.log(e)
  }
}

const loadState = () => {

  try {

    const serializedState = localStorage.getItem('PlayCloudUIState');    
    if (serializedState === null) {
      return {};
    }

    return JSON.parse(serializedState);

  } catch (err) {

    return {};
  }
}

store.subscribe(throttle(() => {

  const UIState = { ...store.getState().ui }
  UIState.ready = false
  UIState.content = null
  UIState.content = null
  UIState.typeselected = UIState.typeselected == 'post' ? 'posts' : UIState.typeselected
  UIState.typeselectedstatus = ''
  UIState.typetransition = ['none', UIState.typeselected]
  UIState.rankingdetailstate = 'hidden'
  UIState.postselectedid = null

  delete UIState.message

  saveState(UIState);
  
}, 1000))

export const setSavedState = () => {  

  const savedUIState = loadState()
  store.dispatch(Actions.uiSetSavedState(savedUIState)) 
  store.dispatch(Actions.userSetData())
  store.dispatch(Actions.gameSetData())
  store.dispatch(Actions.uiLoadPlayer())
}

