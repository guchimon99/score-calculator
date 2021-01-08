import { operatorToSymbolForSelect } from '../../../services/calcurator'

import { useEvalution } from '../../../hooks/entities'
// import { useUpdateEvalution } from '../../../hooks/editor/calculator'

import Form, { Label, Group, Input, Select } from '../../Form'
import EditorLayout from '../../Layout/Editor'

const operatorOptions = [
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
  const { value, operator, content } = useEvalution(calculatorId, evalutionIndex)
  // const updateEvalution = useUpdateEvalution(calculatorId, evalutionIndex)

  return (
    <EditorLayout title="評価の編集" parent={`/editor/calculators/${calculatorId}`}>
      <Form>
        <Group>
          <Label>内容</Label>
          <Input name="content" defaultValue={content} />
        </Group>
        <Group>
          <Label>スコア</Label>
          <div className="flex px-2 -mx-2">
            <Select className="flex-grow" defaultValue={operator}>
              {operatorOptions.map(value => (
                <option key={value} value={value}>{operatorToSymbolForSelect(value)}</option>
              ))}
            </Select>
            <Input className="flex-grow" name="value" defaultValue={value} />
          </div>
        </Group>
      </Form>
    </EditorLayout>
  )
}

export default Evalution
