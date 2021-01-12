import { useCallback } from 'react'
import { useHistory } from 'react-router-dom'

import { useReference } from '../../../hooks/calculator'
import { useUpdateReference, useDeleteReference } from '../../../hooks/editor/calculator'

import { Label, Group, Input } from '../../Form'
import StackLayout from '../../Layout/Stack'

const Reference = ({
  match: {
    params: {
      calculatorId,
      referenceIndex
    }
  }
}) => {
  const history = useHistory()
  const { title, url } = useReference(referenceIndex)
  const updateReference = useUpdateReference(referenceIndex)
  const deleteReference = useDeleteReference(referenceIndex)

  const titleChangeHandler = useCallback(({ target: { value: title } }) => updateReference({ title, url }), [url])
  const urlChangeHandler = useCallback(({ target: { value: url } }) => updateReference({ title, url }), [title])

  const deleteHandler = useCallback(() => {
    deleteReference()
    history.replace(`/editor/calculators/${calculatorId}`)
  }, [])

  return (
    <StackLayout title="評価の編集" parent={`/editor/calculators/${calculatorId}`}>
      <Group>
        <Label>名称</Label>
        <Input name="title" defaultValue={title} onChange={titleChangeHandler} />
      </Group>
      <Group>
        <Label>URL</Label>
        <Input name="url" defaultValue={url} onChange={urlChangeHandler} />
      </Group>
      <Group>
        <button className="text-red-500 py-2 w-full" onClick={deleteHandler}>この参考文献を削除する</button>
      </Group>
    </StackLayout>
  )
}

export default Reference
