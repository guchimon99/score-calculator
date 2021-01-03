import { Switch, Route } from 'react-router-dom'

import About from './Calculator'

const Compose = () => (
  <Switch>
    <Route path="/compose/calculator" component={About} />
  </Switch>
)

export default Compose
