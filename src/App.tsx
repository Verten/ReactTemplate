import * as React from 'react'
import { Provider } from 'react-redux'

import createStore from './redux/createStore'
import Routers from './router'
const store = createStore({})

const App = (): JSX.Element => (
  <Provider store={store}>
    <Routers />
  </Provider>
)
export default App
