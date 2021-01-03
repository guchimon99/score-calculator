import { Switch, Route, Redirect } from 'react-router-dom'

import BaseLayout from '../Layout/Base'

import Home from './Home'

const Settings = () => (
  <BaseLayout>
    <Switch>
      <Route path="/settings" excat component={Home} />
      <Redirect to="/settings"/>
    </Switch>
  </BaseLayout>
)

export default Settings
