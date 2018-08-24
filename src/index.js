import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import createStore from './redux/createStore'
import routers from './router'
const store = createStore()

const renderApp = (store, routers) => {
  render(
    <Provider store={store}>
      <Router>{routers}</Router>
    </Provider>,
    document.getElementById('root'),
  )
}

renderApp(store, routers)
