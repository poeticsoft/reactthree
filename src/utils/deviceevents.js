import store from '~/redux/store'
import * as Actions from '../redux/modules/uai/node_modules/~/redux/actions'
import {
  readDeviceOrientation
} from '*/common/compatdom'

/*

let navigatorFields = {}
const navigatorFieldNames = [
  'language',
  'platform',
  'product',
  'userAgent'
]
navigatorFieldNames.forEach(field => navigatorFields[field] = navigator[field])
const calculateAgent = () => {

  const ua = navigator.userAgent
  let M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || []
  let tem

  if(/trident/i.test(M[1])) {

    tem = /\brv[ :]+(\d+)/g.exec(ua) || []
    return 'IE '+(tem[1] || '')
  }

  if(M[1]=== 'Chrome'){

    tem= ua.match(/\b(OPR|Edge)\/(\d+)/);
    if(tem!= null) return tem.slice(1).join(' ').replace('OPR', 'Opera')
  }

  M = M[2] ? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?']

  if((tem = ua.match(/version\/(\d+)/i))!= null) M.splice(1, 1, tem[1])

  return M.join(' ')
}
navigatorFields['agent'] = calculateAgent()

store.dispatch(Actions.uiSaveNavigatorFields(navigatorFields))

const registerEndEvent = () => store.dispatch(Actions.uiSendEventToAWS('end'))

window.addEventListener(
  'close',
  registerEndEvent
)
window.onclose = registerEndEvent
window.addEventListener(
  'onbeforeunload',
  registerEndEvent
)
window.onbeforeunload = registerEndEvent

*/

/* APP-Window Visibility

document.addEventListener('visibilitychange', function() {

  let hidden;

  if (typeof document.hidden !== 'undefined') { hidden = 'hidden'; } 
  else if (typeof document.msHidden !== 'undefined') { hidden = 'msHidden'; }
  else if (typeof document.webkitHidden !== 'undefined') { hidden = 'webkitHidden'; }

  const action = document[hidden] ? 'hide' : 'show'

  store.dispatch(Actions.uiSendEventToAWS(action))
});

*/

/* Orientation

const setOrientation = () => store.dispatch(
  Actions.uiSetOrientation(readDeviceOrientation())
)
window.addEventListener(
  'resize',
  setOrientation
)
setOrientation()

*/