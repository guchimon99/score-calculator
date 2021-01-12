
import { useReference } from '../../../hooks/calculator'
// import { useUpdateReference } from '../../../hooks/editor/calculator'

import Form, { Label, Group, Input } from '../../Form'
import StackLayout from '../../Layout/Stack'

const Reference = ({
  match: {
    params: {
      calculatorId,
      referenceIndex
    }
  }
}) => {
  const { title, url } = useReference(referenceIndex)
  // const updateReference = useUpdateReference(calculatorId, referenceIndex)

  return (
    <StackLayout title="評価の編集" parent={`/editor/calculators/${calculatorId}`}>
      <Form>
        <Group>
          <Label>名称</Label>
          <Input name="title" defaultValue={title} />
        </Group>
        <Group>
          <Label>URL</Label>
          <Input name="url" defaultValue={url} />
        </Group>
      </Form>
    </StackLayout>
  )
}

export default Reference
