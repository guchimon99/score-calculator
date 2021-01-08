import { useCalculator } from '../../../hooks/entities'

import Form, { Label, Group, Input } from '../../Form'
import Section from '../../Section'
import LinkList, { Item as LinkListItem, AddButton } from '../../LinkList'
import StackLayout from '../../Layout/Stack'

const Home = ({
  match: {
    params: {
      calculatorId
    }
  }
}) => {
  const {
    title,
    evalutionTitle,
    factors,
    references,
    evalutions
  } = useCalculator(calculatorId)

  return (
    <StackLayout title="計算機の編集" parent={`/calculators/${calculatorId}/info`}>
      <Form>
        <Group>
          <Label>名称</Label>
          <Input type="text" name="title" defaultValue={title} />
        </Group>
        <Group>
          <Label>評価項目</Label>
          <Input type="text" name="evalutionTitle" defaultValue={evalutionTitle} />
        </Group>
      </Form>
      <Group>
        <Label>参考文献</Label>
        <Section>
          <LinkList>
            {references.map((reference, i) =>
              <LinkListItem
                key={i}
                to={`/editor/calculators/${calculatorId}/references/${i}`}>
                  {reference.title}
              </LinkListItem>
            )}
            <AddButton>参考文献を追加する</AddButton>
          </LinkList>
        </Section>
      </Group>
      <Group>
        <Label>入力項目</Label>
        <Section>
          <LinkList>
            {factors.map((factor, i) =>
              <LinkListItem
                key={i}
                to={`/editor/calculators/${calculatorId}/factors/${i}`}>
                  {factor.label}
              </LinkListItem>
            )}
            <AddButton>入力項目を追加する</AddButton>
          </LinkList>
        </Section>
      </Group>
      <Group>
        <Label>評価</Label>
        <Section>
          <LinkList>
            {evalutions.map((evalution, i) =>
              <LinkListItem
                key={i}
                to={`/editor/calculators/${calculatorId}/evalutions/${i}`}>
                  {evalution.content}
              </LinkListItem>
            )}
            <AddButton>評価を追加する</AddButton>
          </LinkList>
        </Section>
      </Group>
    </StackLayout>
  )
}

export default Home
