import { Provider } from '../../../hooks/calculator'

import Header from './Header'
import Factors from './Factors'
import Result from './Result'

const Calculator = ({
  match: {
    params: {
      calculatorId
    }
  }
}) => {
  return (
    <Provider calculatorId={calculatorId}>
      <Header />
      <Factors />
      <Result />
    </Provider>
  )
}

export default Calculator
