import { Switch, Redirect, Route } from 'react-router-dom'

import Calculator from './Calculator'

const Compose = () => (
  <Switch>
    <Route path="/editor/calculators/:calculatorId" component={Calculator} />
    <Redirect to="/" />
  </Switch>
)

export default Compose
