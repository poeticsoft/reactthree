import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import APP from './components/app'
import { getElementById } from './utils/compatdom'

/* Render */

const render = () => {
  
  ReactDOM.render(
    <Provider store={ store }>
      <APP />
    </Provider>, 
    getElementById('ReactThree')
  )
}

if (document.readyState === 'loading') {

  document.addEventListener(
    'DOMContentLoaded', 
    render
  )

} else {

  render();
}