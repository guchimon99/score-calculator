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

const Infomation = ({ match: { params: { calculatorId } } }) => {
  const calculator = useCalculator(calculatorId)

  return (
    <>
      <Header
        title={`${calculator.title} の情報`}
        parent={`/calculators/${calculatorId}`}
        info={null} />
      <div className="py-16 mx-auto max-w-2xl">
        <div className="mb-6">
          <div className="text-xl px-4">基本情報</div>
          <div className="pl-2">
            <div className="border-b py-2 mb-2 px-4">
              <div className="mb-2">名前</div>
              <div className="pl-2 text-gray-800">{calculator.title}</div>
            </div>
            <div className="border-b py-2 mb-2 px-4">
              <div className="mb-2">文献</div>
              <div className="pl-2 text-gray-800">
                <ul>
                  {calculator.references.map((reference, i) =>
                    <li key={i}>
                      <a className="text-blue-500 underline" rel="noreferrer" href={reference.url} target="_blank" key={i}>{reference.title}</a>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-6">
          <div className="text-xl px-4">入力値</div>
          <div className="pl-2">
          {calculator.inputs.map((input, i) =>
            <div key={i} className="border-b py-2 mb-2 px-4">
              <div className="mb-2">{input.label}</div>
              <div className="pl-2 text-gray-800">
                {input.options.map((option, o) =>
                  <div className="border-b flex py-1" key={o}>
                    <div className="flex-grow">{option.label}</div>
                    <div className="text-right">{option.score}</div>
                  </div>
                )}
              </div>
            </div>
          )}
          </div>
        </div>
        <div className="mb-6">
          <div className="text-xl px-4">評価</div>
          <div className="pl-2 py-2">
            {calculator.qualities.map((quality, q) =>
              <div key={q} className="flex py-1 px-4 border-b">
                <div className="w-12 text-center">
                  {operatorToSymbol(quality.operator)}{quality.value}
                </div>
                <div className="flex-grow text-right">{quality.label}</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Infomation
