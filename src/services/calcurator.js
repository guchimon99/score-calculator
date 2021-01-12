export const operatorToSymbol = operator => {
  switch (operator) {
    case 'less':
      return '<'
    case 'less than or equal':
      return '≦'
    case 'equal':
      return ''
    case 'greater than or equal':
      return '≧'
    case 'greater':
      return '>'
    default:
      return false
  }
}

export const operatorToSymbolForSelect = operator => {
  switch (operator) {
    case 'less':
      return '<'
    case 'less than or equal':
      return '≦'
    case 'equal':
      return '='
    case 'greater than or equal':
      return '≧'
    case 'greater':
      return '>'
    default:
      return false
  }
}

export const getScore = (calculator, values) => {
  return calculator.factors.reduce((score, factor, index) => {
    const option = factor.options[values[index]]
    return option ? option.score + score : score
  }, 0)
}

export const getEvalutionIndex = (calculator, values) => {
  const score = getScore(calculator, values)

  if (values.some(value => value === null)) return -1

  return calculator.evalutions.findIndex(({ operator, value }) => {
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
  })
}

export const createEmptyCalculator = () => ({
  title: '名称未設定',
  evalutionTitle: '',
  factors: [],
  references: [],
  evalutions: []
})

export const getEmptyValues = calculator => {
  return calculator.factors.map(() => null)
}
