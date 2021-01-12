import { useCallback } from 'react'
import { useHistory } from 'react-router-dom'

import { operatorToSymbolForSelect } from '../../../services/calcurator'

import { useEvalution } from '../../../hooks/calculator'
import { useUpdateEvalution, useDeleteEvalution } from '../../../hooks/editor/calculator'

import { Label, Group, Input, Select } from '../../Form'
import StackLayout from '../../Layout/Stack'

const operatorEvadeleteEvalutions = [
  'less',
  'less than or equal',
  'equal',
  'greater than or equal',
  'greater'
]

const Evalution = ({
  match: {
    params: {
      calculatorId,
      evalutionIndex
    }
  }
}) => {
  const history = useHistory()
  const { value, operator, content } = useEvalution(evalutionIndex)
  const updateEvalution = useUpdateEvalution(evalutionIndex)
  const deleteEvalution = useDeleteEvalution(evalutionIndex)

  const contentChangeHandler = useCallback(({ target: { value: content } }) => updateEvalution({ content, value, operator }), [value, operator])
  const valueChangeHandler = useCallback(({ target: { value } }) => updateEvalution({ content, value, operator }), [content, operator])
  const operatorChangeHandler = useCallback(({ target: { value: operator } }) => updateEvalution({ content, value, operator }), [content, value])

  const deleteHandler = useCallback(() => {
    deleteEvalution()
    history.replace(`/editor/calculators/${calculatorId}`)
  }, [])

  return (
    <StackLayout title="評価の編集" parent={`/editor/calculators/${calculatorId}`}>
        <Group>
          <Label>内容</Label>
          <Input name="content" defaultValue={content} onChange={contentChangeHandler} />
        </Group>
        <Group>
          <Label>スコア</Label>
          <div className="flex px-2 -mx-2">
            <Select className="flex-grow" defaultValue={operator} onChange={operatorChangeHandler}>
              {operatorEvadeleteEvalutions.map(value => (
                <option key={value} value={value}>{operatorToSymbolForSelect(value)}</option>
              ))}
            </Select>
            <Input className="flex-grow" name="value" defaultValue={value} type="number" onChange={valueChangeHandler} />
          </div>
        </Group>
        <Group>
          <button className="text-red-500 py-2 w-full" onClick={deleteHandler}>この評価を削除する</button>
        </Group>
    </StackLayout>
  )
}

export default Evalution
