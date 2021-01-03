import { Switch, Route } from 'react-router-dom'

import ModalLayout from '../../Layout/Modal'

import About from './About'
import Home from './Home'
import Inputs from './Inputs'
import Input from './Input'
import Qualities from './Qualities'
import Quality from './Quality'

const Calculator = () => (
  <ModalLayout>
    <Switch>
      <Route path="/compose/calculator" exact component={Home} />
      <Route path="/compose/calculator/about" component={About} />
      <Route path="/compose/calculator/inputs" component={Inputs} />
      <Route path="/compose/calculator/inputs/:index" component={Input} />
      <Route path="/compose/calculator/qualities" component={Qualities} />
      <Route path="/compose/calculator/qualities/:index" component={Quality} />
    </Switch>
  </ModalLayout>
)

export default Calculator
