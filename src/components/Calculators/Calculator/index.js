import { Switch, Route, Redirect } from 'react-router-dom'

import Input from './Input'
import Result from './Result'
import Infomation from './Infomation'
import { useCalculator } from '../../../hooks/entities'

const Calculator = ({ match: { params: { calculatorId } } }) => {
  const calculator = useCalculator(calculatorId)

  if (!calculator) return <div>読込中</div>

  return (
    <Switch>
      <Route path="/calculators/:calculatorId/inputs" component={Input} />
      <Route path="/calculators/:calculatorId/result" component={Result} />
      <Route path="/calculators/:calculatorId/info" component={Infomation} />
      <Redirect to={`/calculators/${calculatorId}/inputs`} />
    </Switch>
  )
}

export default Calculator
