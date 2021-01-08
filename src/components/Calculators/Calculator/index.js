import { useCalculator } from '../../../hooks/entities'

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
  const calculator = useCalculator(calculatorId)

  return (
    <Provider calculator={calculator}>
      <Header />
      <Factors />
      <Result />
    </Provider>
  )
}

export default Calculator
