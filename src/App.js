import React, {
  Component
} from 'react'
import {
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import Login from './pages/login/Login'
import Admin from './pages/admin/Admin'
export default class App extends Component {
  render() {
    return (
      <Switch>
        <Route path='/login' component={Login} />
        <Route path='/admin' component={Admin} />
        <Redirect to='/login' />
      </Switch>
    )
  }

}