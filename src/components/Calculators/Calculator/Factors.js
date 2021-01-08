import {
  useFactors
} from '../../../hooks/calculator'

import Container from '../../Layout/Container'
import Option from './Option'

const Factor = ({
  factor: {
    label,
    options
  },
  factorIndex
}) => {
  return (
    <div className="mb-6">
      <div className="mb-2 px-2 text-lg font-bold">{label}</div>
      <div className="px-2">
      {options.map((option, optionIndex) => (
        <Option
          key={optionIndex}
          factorIndex={factorIndex}
          option={option}
          optionIndex={optionIndex} />
      ))}
      </div>
    </div>
  )
}

const Factors = () => {
  const factors = useFactors()

  return (
    <Container className="min-h-screen mb-4">
      {factors && factors.map((factor, factorIndex) => <Factor key={factorIndex} factorIndex={factorIndex} factor={factor} />)}
    </Container>
  )
}

export default Factors
