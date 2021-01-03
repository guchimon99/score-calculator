import Title from '../Title'
import Section from '../Section'
import LinkList, { Item as LinkListItem } from '../LinkList'

const Home = () => (
    <Section>
      <Title>設定</Title>
      <LinkList>
        <LinkListItem to="/settings/profile">プロフィール</LinkListItem>
      </LinkList>
    </Section>
)

export default Home
