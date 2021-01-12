import { useFactor } from '../../../hooks/calculator'
import { useAddOption, useDeleteFactor, useUpdateFactor } from '../../../hooks/editor/calculator'

import { Label, Group, Input } from '../../Form'
import Section from '../../Section'
import LinkList, { Item as LinkListItem, AddButton } from '../../LinkList'
import StackLayout from '../../Layout/Stack'
import { useCallback } from 'react'
import { useHistory } from 'react-router-dom'

const Factor = ({
  match: {
    params: {
      calculatorId,
      factorIndex
    }
  }
}) => {
  const { label, options } = useFactor(factorIndex)
  const history = useHistory()

  const addOption = useAddOption(factorIndex)
  const updateFactor = useUpdateFactor(factorIndex)
  const deleteFactor = useDeleteFactor(factorIndex)

  const addOptionHandler = useCallback(() => addOption())
  const changeLabelHandler = useCallback(({ target: { value: label } }) => updateFactor({ label, options }), [options])

  const deleteHandler = useCallback(() => {
    deleteFactor()
    history.replace(`/editor/calculators/${calculatorId}`)
  }, [])

  return (
    <StackLayout title="入力項目" parent={`/editor/calculators/${calculatorId}`}>
      <Group>
        <Label>名称</Label>
        <Input name="label" defaultValue={label} onChange={changeLabelHandler} />
      </Group>
      <Group>
        <Label>選択肢</Label>
        <Section>
        <LinkList>
          {options.map(({ label }, oIndex) =>
            <LinkListItem
              key={oIndex}
              to={`/editor/calculators/${calculatorId}/factors/${factorIndex}/options/${oIndex}`}>
                {label}
            </LinkListItem>
          )}
          <AddButton onClick={addOptionHandler}>選択肢を追加する</AddButton>
        </LinkList>
        </Section>
      </Group>
      <Group>
        <button onClick={deleteHandler} className="text-red-500 w-full p-2">この入力項目を削除する</button>
      </Group>
    </StackLayout>
  )
}

export default Factor
