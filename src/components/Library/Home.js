import * as Icons from 'react-feather'

import Section from '../Section'
import Title from '../Title'
import LinkList, { Item as LinkListItem } from '../LinkList'
import { useCalculators } from '../../hooks/entities'
import { useCallback } from 'react'

const Home = () => {
  const calculators = useCalculators()

  const createHandler = useCallback(() => {
    console.log('create')
  }, [])

  return (
    <>
      <div className="flex justify-end pt-1">
        <button className="text-blue-500 p-2" onClick={createHandler}>
          <Icons.Plus />
        </button>
      </div>
      <Section>
        <Title className="flex-grow" size={1}>ライブラリ</Title>
        <LinkList>
          {calculators.map(({ id, title }) =>
            <LinkListItem key={id} to={{
              pathname: `/calculators/${id}`,
              state: { from: '/library' }
            }}>{title}</LinkListItem>
          )}
        </LinkList>
      </Section>
    </>
  )
}

export default Home
