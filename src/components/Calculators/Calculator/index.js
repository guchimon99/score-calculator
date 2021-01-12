import { Provider as CalculatorProvider } from '../../../hooks/calculator'
import { Provider as CalculateProvider } from '../../../hooks/calculate'

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
    <CalculatorProvider calculatorId={calculatorId}>
      <CalculateProvider>
        <Header />
        <Factors />
        <Result />
      </CalculateProvider>
    </CalculatorProvider>
  )
}

export default Calculator
