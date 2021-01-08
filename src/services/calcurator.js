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

export const getScore = (calculator, values) => 0
