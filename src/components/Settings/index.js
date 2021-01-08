import { Switch, Route, Redirect } from 'react-router-dom'

import BaseLayout from '../Layout/Base'

import Home from './Home'
import Account from './Account'

const Settings = () => (
  <BaseLayout>
    <Switch>
      <Route path="/settings" exact component={Home} />
      <Route path="/settings/account" component={Account} />
      <Redirect to="/settings"/>
    </Switch>
  </BaseLayout>
)

export default Settings
