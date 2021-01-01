import { Switch, Route, Redirect } from 'react-router-dom'

import Calcuators from './Calcurators'

const Me = () => (
  <Switch>
    <Route path="/me/calcurators" component={Calcuators} />
    <Redirect to="/me/calcurators" />
  </Switch>
)

export default Me
