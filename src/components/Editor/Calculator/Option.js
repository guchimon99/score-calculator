
import { useOption } from '../../../hooks/calculator'
// import { useUpdateOption } from '../../../hooks/editor/calculator'

import Form, { Label, Group, Input } from '../../Form'
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
  const { label, score, note } = useOption(factorIndex, optionIndex)
  // const updateOption = useUpdateOption(calculatorId, optionIndex)

  return (
    <StackLayout title="選択肢の編集" parent={`/editor/calculators/${calculatorId}/factors/${factorIndex}`}>
      <Form>
        <Group>
          <Label>名称</Label>
          <Input type="text" name="label" defaultValue={label} />
        </Group>
        <Group>
          <Label>スコア</Label>
          <Input type="number" name="score" defaultValue={score} ste />
        </Group>
        <Group>
          <Label>補足</Label>
          <Input type="text" name="note" defaultValue={note} />
        </Group>
      </Form>
    </StackLayout>
  )
}

export default Option
