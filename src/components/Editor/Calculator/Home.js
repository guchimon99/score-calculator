import { useCallback } from 'react'
import { useHistory } from 'react-router-dom'

import {
  useCurrentCalculator
} from '../../../hooks/calculator'

import {
  useUpdate,
  useAddReference,
  useAddFactor,
  useAddEvalution,
  useDeleteCalculator
} from '../../../hooks/editor/calculator'

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
  const history = useHistory()

  const {
    title,
    evalutionTitle,
    factors,
    references,
    evalutions
  } = useCurrentCalculator()

  const update = useUpdate()
  const deleteCalculator = useDeleteCalculator()
  const addReference = useAddReference()
  const addFactor = useAddFactor()
  const addEvalution = useAddEvalution()

  const blurTitleHandler = useCallback(({ target: { value: title } }) => update({ title }), [])
  const blurEvalutionTitleHandler = useCallback(({ target: { value: evalutionTitle } }) => update({ evalutionTitle }), [])

  const addReferenceHandler = useCallback(() => addReference(), [])
  const addFactorHandler = useCallback(() => addFactor(), [])
  const addEvalutionHandler = useCallback(() => addEvalution(), [])

  const deleteHandler = useCallback(() => {
    deleteCalculator()
    history.replace('/library')
  })

  return (
    <StackLayout title="計算機の編集" parent={`/calculators/${calculatorId}/info`}>
      <Form>
        <Group>
          <Label>名称</Label>
          <Input type="text" name="title" defaultValue={title} onBlur={blurTitleHandler} />
        </Group>
        <Group>
          <Label>評価項目</Label>
          <Input type="text" name="evalutionTitle" defaultValue={evalutionTitle} onBlur={blurEvalutionTitleHandler} />
        </Group>
      </Form>
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
            <AddButton onClick={addFactorHandler}>入力項目を追加する</AddButton>
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
            <AddButton onClick={addEvalutionHandler}>評価を追加する</AddButton>
          </LinkList>
        </Section>
      </Group>
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
            <AddButton onClick={addReferenceHandler}>参考文献を追加する</AddButton>
          </LinkList>
        </Section>
      </Group>
      <Group>
        <button className="text-red-500 py-2 w-full" onClick={deleteHandler}>この計算機を削除する</button>
      </Group>
    </StackLayout>
  )
}

export default Home
