import Section from '../../Section'
import LinkList, { Item as LinkListItem } from '../../LinkList'

const Home = () => (
  <>
    <Section>
      <LinkList>
        <LinkListItem to="/compose/calculator/about">基本情報</LinkListItem>
        <LinkListItem to="/compose/calculator/inputs">入力項目</LinkListItem>
        <LinkListItem to="/compose/calculator/qualities">評価</LinkListItem>
      </LinkList>
    </Section>
    <button className="w-full rounded bg-blue-500 text-white p-2">保存</button>
  </>
)

export default Home
