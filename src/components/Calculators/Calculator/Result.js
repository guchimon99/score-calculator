import styled from 'styled-components'

import { operatorToSymbol } from '../../../services/calcurator'

import {
  useTitle,
  useEvalutionTitle,
  useEvalutions,
  useReferences,
  useScore,
  useProgress,
  useEvalutionIndex,
  useResetValues
} from '../../../hooks/calculator'

import Container from '../../Layout/Container'
import { useCallback } from 'react'

const About = styled.div`
  position: sticky;
  top: 0;
  bottom: 0;
`

const ProgressBar = styled.div.attrs(() => ({
  className: 'bg-blue-500'
}))`
  min-width: 0.1rem;
  max-width: 100%;
  width: ${({ progress }) => progress * 100}%;
  transition: width .3s ease;
`

const Score = styled.div.attrs(({ isFixed }) => {
  const classNames = []

  if (isFixed) {
    classNames.push('font-bold text-gray-900 text-2xl')
  } else {
    classNames.push('text-gray-400 text-xl')
  }

  return { className: classNames.join(' ') }
})`
  transition-property: color;
  transition-duration: .25s;
  transition-timing-function: ease;
`

const Evalution = styled.tr.attrs(({ isFixed, isSelected }) => {
  const classNames = ['broder-b']

  if (isFixed) {
    if (isSelected) {
      classNames.push('font-bold text-lg bg-gray-100')
    } else {
      classNames.push('text-gray-500 text-sm')
    }
  }

  return { className: classNames.join(' ') }
})`
  transition-property: background-color color;
  transition-duration: .25s;
  transition-timing-function: ease;
`

const Result = () => {
  const title = useTitle()
  const evalutionTitle = useEvalutionTitle()
  const evalutions = useEvalutions()
  const references = useReferences()
  const progress = useProgress()
  const evalutionIndex = useEvalutionIndex()
  const score = useScore()
  const resetValues = useResetValues()

  const retrtHandler = useCallback(() => {
    resetValues()
    window.scrollTo(0, 0)
  }, [resetValues])

  return (
    <>
      <About className="bg-white border-b">
        <div className="h-2 bg-gray-200 flex">
          <ProgressBar progress={progress} />
          <div className="bg-blue-500 w-2"></div>
        </div>
        <Container>
          <div className="flex p-2">
            <div className="flex-grow">
              <div className="text-mb font-bold leading-none mb-1">{title}</div>
              <div className="text-sm text-gray-600">{evalutionTitle}</div>
            </div>
            <div className="w-10 h-10 flex items-center justify-center">
              <Score isFixed={progress === 1}>{score}</Score>
            </div>
          </div>
        </Container>
      </About>
      <Container>
        <table className="w-full table-fixed border-collapse mb-4">
          <thead>
            <tr>
              <th className="font-normal text-sm w-20 p-1 border-b-2">スコア</th>
              <th className="font-normal text-sm w-full p-1 border-b-2">評価</th>
            </tr>
          </thead>
          <tbody>
          {evalutions.map(({ value, operator, content }, index) => (
            <Evalution key={index} className="broder-b" isFixed={evalutionIndex >= 0} isSelected={index === evalutionIndex}>
              <td className="border-b p-1 px-2 text-center">
                <span className="text-xs mr-1">{operatorToSymbol(operator)}</span>
                <span>{value}</span>
              </td>
              <td className="border-b p-1 px-2 text-right">{content}</td>
            </Evalution>
          ))}
          </tbody>
        </table>
        <div className="p-2">
          <button onClick={retrtHandler} className="p-2 rounded bg-gray-100 text-gray-600 w-full">やり直す</button>
        </div>
        <div className="py-4">
          <div className="px-2 mb-2 text-gray-800">参考文献</div>
          <ul className="pl-4">
            {references && references.map(({ title, url }, index) => (
              <li key={index}>
                <a
                  className="text-blue-500 text-xs pr-2"
                  href={url} rel="noreferrer" target="_blank">{title}</a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </>
  )
}

export default Result
