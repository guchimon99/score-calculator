import { useFactor } from '../../../hooks/entities'
// import { useUpdateFactor } from '../../../hooks/editor/calculator'

import Form, { Label, Group, Input } from '../../Form'
import Section from '../../Section'
import LinkList, { Item as LinkListItem, AddButton } from '../../LinkList'
import StackLayout from '../../Layout/Stack'

const Factor = ({
  match: {
    params: {
      calculatorId,
      factorIndex
    }
  }
}) => {
  const { label, options } = useFactor(calculatorId, factorIndex)
  // const updateFactor = useUpdateFactor(calculatorId, factorIndex)

  return (
    <StackLayout title="入力項目" parent={`/editor/calculators/${calculatorId}`}>
      <Form>
        <Group>
          <Label>名称</Label>
          <Input name="label" defaultValue={label} />
        </Group>
      </Form>
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
          <AddButton>選択肢を追加する</AddButton>
        </LinkList>
        </Section>
      </Group>
    </StackLayout>
  )
}

export default Factor
