import * as React from 'react'
import { Route, Switch } from 'react-router-dom'
import LoginPage from '../pages/Login/index.tsx'

const routers = (
  <Switch>
    <Route exact path="/" component={LoginPage} />
  </Switch>
)

export default routers