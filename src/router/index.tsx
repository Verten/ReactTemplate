import * as React from 'react'
import { Route, Switch } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { hot } from 'react-hot-loader'
import LoginPage from '../pages/Login'

const routers = (): JSX.Element => (
  <Router>
    <Switch>
      <Route exact path="/" component={LoginPage} />
    </Switch>
  </Router>
)

export default hot(module)(routers)
