import { useCallback } from 'react'
import styled from 'styled-components'
import * as Icons from 'react-feather'

import {
  useSetValue,
  useIsFixedFactor,
  useIsSelectedOption
} from '../../../hooks/calculate'

const OptionButton = styled.button.attrs(({ isSelectedOption, isFixedFactor }) => {
  const classNames = ['flex mb-1 items-center rounded p-2 w-full']

  if (isFixedFactor) {
    if (isSelectedOption) {
      classNames.push('bg-gray-200')
    } else {
      classNames.push('text-gray-500 text-sm')
    }
  } else {
    classNames.push('bg-gray-100')
  }

  return { className: classNames.join(' ') }
})``

const CheckWrapper = styled.div.attrs(({ isSelectedOption }) => {
  const classNames = ['w-4 h-4 mr-3 flex justify-center items-center']

  if (isSelectedOption) {
    classNames.push('text-gray-700')
  } else {
    classNames.push('text-gray-400')
  }

  return { className: classNames.join(' ') }
})``

const Option = ({
  option: {
    label,
    score,
    note
  },
  factorIndex,
  optionIndex
}) => {
  const isFixedFactor = useIsFixedFactor(factorIndex)
  const isSelectedOption = useIsSelectedOption(factorIndex, optionIndex)

  const setValue = useSetValue(factorIndex)

  const clickHandler = useCallback(() => setValue(optionIndex), [optionIndex])

  return (
    <OptionButton onClick={clickHandler} isFixedFactor={isFixedFactor} isSelectedOption={isSelectedOption}>
      <CheckWrapper isSelectedOption={isSelectedOption}>
        {isSelectedOption ? <Icons.CheckCircle /> : <Icons.Circle />}
      </CheckWrapper>
      <div className="flex-grow mr-2 text-left">
        <div>{label}</div>
        {note && <div className="text-xs text-gray-600">{note}</div>}
      </div>
      <div className="w-6 h-6 flex justify-center items-center">
        <div className="text-sm text-gray-600">{score}</div>
      </div>
    </OptionButton>
  )
}

export default Option
