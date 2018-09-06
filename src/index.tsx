import * as React from 'react'
import * as ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import App from './App'

const renderApp = () => {
  ReactDOM.render(<App />, document.getElementById('root'))
}

renderApp()
registerServiceWorker()

// if (module.hot) {
//   module.hot.accept(() => {
//     renderApp()
//   })
// }
// https://github.com/reduxjs/react-redux/issues/356#issuecomment-302298695
// https://blog.csdn.net/dengdengda/article/details/78746208
