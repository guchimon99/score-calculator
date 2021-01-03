import { useCallback } from 'react'
import { useForm } from 'react-hook-form'

import { useCalculator } from '../../../hooks/entities'

import Header from './Header'

const Input = ({ match: { params: { calculatorId } }, history }) => {
  const calculator = useCalculator(calculatorId)

  const { register, handleSubmit } = useForm()

  const onSubmit = useCallback(data => history.push(`/calculators/${calculatorId}/result`, data), [])

  return (
    <>
      <Header
        title={`${calculator.title}`}
        parent={'/'}
        info={`/calculators/${calculatorId}/info`} />
      <form className="max-w-2xl mx-auto pt-16" onSubmit={handleSubmit(onSubmit)}>
        {calculator.inputs.map((input, iIndex) => (
          <div key={iIndex} className="mb-4 px-4 border-b">
            <div className="text-lg mb-3">{input.label}</div>
            <div className="ml-4 pb-4">
              <div className="-mx-1 flex flex-wrap text-sm">
                {input.options.map((option, oIndex) => (
                  <label key={oIndex} htmlFor={`radio_${iIndex}_${oIndex}`} className="bg-gray-200 py-2 px-3 mx-1 rounded text-center flex items-center mb-2">
                      <input className="mr-2"
                        id={`radio_${iIndex}_${oIndex}`} name={`${iIndex}`}
                        type="radio" value={oIndex} ref={register} required={true} />
                      <div className="flex flex-col items-start">
                        <div className="whitespace-nowrap">{option.label}</div>
                        {option.note && <div className="text-xs text-gray-500">({option.note})</div>}
                      </div>
                  </label>
                ))}
              </div>
            </div>
          </div>
        ))}
        <div className="px-2 py-4">
          <button type="submit" className="bg-blue-500 rounded text-white w-full p-2">
            結果表示
          </button>
        </div>
      </form>
    </>
  )
}

export default Input
