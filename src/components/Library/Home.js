import Section from '../Section'
import Title from '../Title'
import LinkList, { Item as LinkListItem } from '../LinkList'
import { useCalculators } from '../../hooks/entities'

const Home = () => {
  const calculators = useCalculators()

  return (
    <>
      <Section>
        <Title size={1}>ライブラリ</Title>
        <LinkList>
          <LinkListItem to="/library/calculators/created">作成した計算機</LinkListItem>
          <LinkListItem to="/library/calculators/marked">マーク付き</LinkListItem>
        </LinkList>
      </Section>
      <Section>
        <Title size={2}>最近使った計算機</Title>
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
