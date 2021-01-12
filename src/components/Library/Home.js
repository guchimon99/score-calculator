import * as Icons from 'react-feather'

import { useAllCalculators, useCreateCalculator } from '../../hooks/calculators'

import Section from '../Section'
import Title from '../Title'
import LinkList, { Item as LinkListItem } from '../LinkList'

const Home = () => {
  const calculators = useAllCalculators()
  const createCalculator = useCreateCalculator()

  return (
    <>
      <div className="flex justify-end pt-1">
        <button className="text-blue-500 p-2" onClick={createCalculator}>
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
