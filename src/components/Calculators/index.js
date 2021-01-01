import { Route, Switch } from 'react-router-dom'

import Calculator from './Calculator'

const Calculators = () => (
  <Switch>
    <Route path="/calculators/:calculatorId" component={Calculator} />
  </Switch>
)

export default Calculators
