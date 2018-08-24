import { createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'
import { mapValues } from 'lodash'
import createSagaMiddleware from 'redux-saga'
//import apiClientMiddleware from './middleware/apiClientMiddleware'
import rootReducer from './modules/reducer'
import rootSagas from './modules/saga'

const sagaMiddleware = createSagaMiddleware()

const finalCreateStore = compose(
  //applyMiddleware(apiClientMiddleware),
  applyMiddleware(
    sagaMiddleware,
    createLogger({
      collapsed: true,
      stateTransformer: state =>
        mapValues(state, reducer => {
          if (reducer.toJS) {
            return reducer.toJS()
          }
          return reducer
        }),
    }),
  ),
  window.devToolsExtension ? window.devToolsExtension() : f => f,
)(createStore)

export default function configureStore(initialState) {
  const store = finalCreateStore(rootReducer, initialState)

  if (module.hot) {
    module.hot.accept('./modules/reducer', () => {
      const nextReducer = require('./modules/reducer')
      store.replaceReducer(nextReducer)
    })
  }

  sagaMiddleware.run(rootSagas)

  return store
}