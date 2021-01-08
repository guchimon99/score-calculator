
import { useReference } from '../../../hooks/entities'
// import { useUpdateReference } from '../../../hooks/editor/calculator'

import Form, { Label, Group, Input } from '../../Form'
import EditorLayout from '../../Layout/Editor'

const Reference = ({
  match: {
    params: {
      calculatorId,
      referenceIndex
    }
  }
}) => {
  const { title, url } = useReference(calculatorId, referenceIndex)
  // const updateReference = useUpdateReference(calculatorId, referenceIndex)

  return (
    <EditorLayout title="評価の編集" parent={`/editor/calculators/${calculatorId}`}>
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
    </EditorLayout>
  )
}

export default Reference
