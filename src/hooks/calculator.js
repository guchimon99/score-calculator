import { useMemo } from 'react'

export const useResult = (calculator, inputs = {}) => {
  const { quality, score } = useMemo(() => {
    const score = calculator.inputs.reduce((score, input, index) => {
      const selected = inputs[+index]
      const option = input.options[selected] || {}
      return score + (option.score || 0)
    }, 0)

    const quality = calculator.qualities.find(({ operator, value }) => {
      switch (operator) {
        case 'less':
          return score < value
        case 'less than or equal':
          return score <= value
        case 'equal':
          return score === value
        case 'greater than or equal':
          return score >= value
        case 'greater':
          return score > value
        default:
          return false
      }
    }) || null

    return { score, quality }
  }, [calculator, inputs])

  return {
    quality, score
  }
}
