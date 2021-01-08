import StackLayout from '../Layout/Stack'

import Title from '../Title'
import Section from '../Section'
import LinkList, { Item as LinkListItem } from '../LinkList'

const Home = () => (
  <StackLayout>
    <Section>
      <Title>設定</Title>
      <LinkList>
        <LinkListItem to="/settings/account">アカウント情報</LinkListItem>
      </LinkList>
    </Section>
  </StackLayout>
)

export default Home
