import { useEffect, useState } from 'react'
import { Redirect } from 'react-router-dom'
import * as Icons from 'react-feather'

import { useResult } from '../../../hooks/calculator'
import { useCalculator } from '../../../hooks/entities'

import Header from './Header'

const operatorToSymbol = operator => {
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

const Result = ({ location: { state: inputs, pathname }, match: { params: { calculatorId } } }) => {
  const calculator = useCalculator(calculatorId)
  const { score, quality } = useResult(calculator, inputs)
  const [isOpenBreakdown, setIsOpenBreakdown] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  if (!inputs) return <Redirect to={`/calculators/${calculatorId}`} />

  return (
    <>
      <Header
        title={`${calculator.title} の結果`}
        parent={`/calculators/${calculatorId}`}
        info={`/calculators/${calculatorId}/info`} />
      <div className="max-w-2xl mx-auto py-16">
        <div className="pl-4 border-b pb-4 mb-4">
          <div className="text-xl mb-3">結果</div>
          <div className="pl-4">
            <div className="mb-4 border-b pb-2 pl-2 px-4">
              <div className="mb-2 text-lg">{calculator.qualityTitle}</div>
              <div className="text-right text-xl">{quality.label}</div>
            </div>
          </div>
        </div>
        <div className="pl-4 border-b pb-4 mb-4">
          <button className="text-xl w-full mb-3 flex items-center pr-2" onClick={() => setIsOpenBreakdown(!isOpenBreakdown)}>
            <div className="flex-grow text-left">内訳</div>
            <div className="w-8 h-8 flex items-center justify-center text-gray-800">
              {isOpenBreakdown ? <Icons.ChevronUp/> : <Icons.ChevronDown/>}
            </div>
          </button>
          {isOpenBreakdown && (
            <div className="pl-2">
              {calculator.inputs.map((input, iIndex) => (
                <div key={iIndex} className="border-b mb-2 py-1 px-4">
                  <div className="mb-2">{input.label}</div>
                  <div className="pl-2">
                    {input.options.map((option, oIndex) => (
                      <div key={oIndex} className={`flex py-1 ${oIndex === +inputs[iIndex] ? 'text-sm' : 'text-xs text-gray-400'}`}>
                        <div className="flex-grow">{option.label} {option.note && (<span>({option.note})</span>)}</div>
                        <div>{option.score}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
              <div className="border-b mb-2 py-1 px-4">
                <div className="mb-2">スコア</div>
                <div className="pl-2 text-right">{score}</div>
              </div>
              <div className="border-b mb-2 py-1 px-4">
                <div className="mb-2">結果</div>
                <div className="pl-2">
                  {calculator.qualities.map((q, qIndex) => (
                    <div key={qIndex} className={`flex py-1 flex ${quality === q ? '' : 'text-xs text-gray-400'}`}>
                      <div className="w-12 text-center">
                        <span className="text-xs">{operatorToSymbol(q.operator)}</span> {q.value}
                      </div>
                      <div className="flex-grow text-right">{q.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Result

/*
<div className="fixed inset-0 bg-white">
      <div className="max-w-2xl mx-auto pt-4">
        <div className="px-4 mb-4">
          <div className="text-lg text-left mb-2">PHASES scores</div>
          <div className="text-xl text-right mb-2">7</div>
        </div>
        <div className="px-4 mb-4">
          <div className="text-lg text-left mb-2">５年間破裂リスク</div>
          <div className="text-xl text-right mb-2">2.4％</div>
        </div>
        <div>
          {Array.from({ length: 10 }).fill(null).map((_, key) => (
            <div key={key} className="py-2 mb-4">
              <div className="flex items-start px-4 justify-between text-lg mb-2">
                <div className="">人種</div>
              </div>
              <div className="mx-2 pl-6">
                <div className="flex justify-between py-1 border-b mb-1 px-2 text-xs text-gray-400">
                  <div className="flex-grow">北米 or 欧州</div><div>0</div>
                </div>
                <div className="flex justify-between py-1 border-b mb-1 px-2">
                  <div className="flex-grow">日本</div><div>3</div>
                </div>
                <div className="flex justify-between py-1 border-b mb-1 px-2 text-xs text-gray-400">
                  <div className="flex-grow">フィンランド</div><div>7</div>
                </div>
              </div>
            </div>
          ))}
          <div className="py-2 mb-4">
            <div className="flex items-start px-4 justify-between text-lg mb-2">
              <div className="">PHASES scores</div>
            </div>
            <div className="mx-2 pl-6">
              <div className="flex justify-between py-1 border-b mb-1 px-2 text-xs text-gray-400">
                <div className="flex-grow">1</div><div>0.02%</div>
              </div>
              <div className="flex justify-between py-1 border-b mb-1 px-2 text-xs text-gray-400">
                <div className="flex-grow">2</div><div>0.09%</div>
              </div>
              <div className="flex justify-between py-1 border-b mb-1 px-2 text-xs text-gray-400">
                <div className="flex-grow">3</div><div>0.16%</div>
              </div>
              <div className="flex justify-between py-1 border-b mb-1 px-2 text-xs text-gray-400">
                <div className="flex-grow">4</div><div>0.23%</div>
              </div>
              <div className="flex justify-between py-1 border-b mb-1 px-2">
                <div className="flex-grow">5</div><div>0.30%</div>
              </div>
              <div className="flex justify-between py-1 border-b mb-1 px-2 text-xs text-gray-400">
                <div className="flex-grow">6</div><div>0.37%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
*/
