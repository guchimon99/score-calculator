import { Switch, Route } from 'react-router-dom'

import Home from './Home'
import Factor from './Factor'
import Option from './Option'
import Evalution from './Evalution'
import Reference from './Reference'

const Calculator = () => (
  <Switch>
    <Route path="/editor/calculators/:calculatorId" exact component={Home} />
    <Route path="/editor/calculators/:calculatorId/references/:referenceIndex" exact component={Reference} />
    <Route path="/editor/calculators/:calculatorId/factors/:factorIndex" exact component={Factor} />
    <Route path="/editor/calculators/:calculatorId/factors/:factorIndex/options/:optionIndex" exact component={Option} />
    <Route path="/editor/calculators/:calculatorId/evalutions/:evalutionIndex" exact component={Evalution} />
  </Switch>
)

export default Calculator
