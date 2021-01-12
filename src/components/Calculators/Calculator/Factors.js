import {
  useCurrentCalculator
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
  const { factors } = useCurrentCalculator()

  if (factors.length < 1) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <div className="text-gray-300 text-lg font-bold">この計算機にファクターがありません</div>
      </div>
    )
  }

  return (
    <Container className="min-h-screen mb-4">
      {factors.map((factor, factorIndex) => <Factor key={factorIndex} factorIndex={factorIndex} factor={factor} />)}
    </Container>
  )
}

export default Factors
