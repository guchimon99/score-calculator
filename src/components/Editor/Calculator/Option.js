import { useCallback } from 'react'
import { useHistory } from 'react-router-dom'

import { useOption } from '../../../hooks/calculator'
import { useDeleteOption, useUpdateOption } from '../../../hooks/editor/calculator'

import { Label, Group, Input } from '../../Form'
import StackLayout from '../../Layout/Stack'

const Option = ({
  match: {
    params: {
      calculatorId,
      factorIndex,
      optionIndex
    }
  }
}) => {
  const history = useHistory()
  const { label, score, note } = useOption(factorIndex, optionIndex)
  const updateOption = useUpdateOption(factorIndex, optionIndex)
  const deleteOption = useDeleteOption(factorIndex, optionIndex)

  const labelChangeHandler = useCallback(({ target: { value: label } }) => updateOption({ label, score, note }), [score, note])
  const scoreChangeHandler = useCallback(({ target: { value: score } }) => updateOption({ label, score, note }), [label, note])
  const noteChangeHandler = useCallback(({ target: { value: note } }) => updateOption({ label, score, note }), [label, score])

  const deleteHandler = useCallback(() => {
    deleteOption()
    history.replace(`/editor/calculators/${calculatorId}/factors/${factorIndex}`)
  }, [])

  return (
    <StackLayout title="選択肢の編集" parent={`/editor/calculators/${calculatorId}/factors/${factorIndex}`}>

        <Group>
          <Label>名称</Label>
          <Input type="text" name="label" defaultValue={label} onChange={labelChangeHandler} />
        </Group>
        <Group>
          <Label>スコア</Label>
          <Input type="number" name="score" defaultValue={score} onChange={scoreChangeHandler} />
        </Group>
        <Group>
          <Label>補足</Label>
          <Input type="text" name="note" defaultValue={note} onChange={noteChangeHandler} />
        </Group>
        <Group>
          <button className="text-red-500 py-2 w-full" onClick={deleteHandler}>この選択肢を削除する</button>
        </Group>
    </StackLayout>
  )
}

export default Option
