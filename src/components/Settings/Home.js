import { useSignOut } from '../../hooks/auth'

import StackLayout from '../Layout/Stack'

import Title from '../Title'
import Section from '../Section'
import LinkList, { Item as LinkListItem } from '../LinkList'

const Home = () => {
  const signOut = useSignOut()

  return (
    <StackLayout>
    <Section>
      <Title>設定</Title>
      <LinkList>
        <LinkListItem to="/settings/account">アカウント情報</LinkListItem>
      </LinkList>
      <div className="mt-12">
        <button onClick={signOut} className="text-red-500 text-center w-full border-t border-b p-2">
          サインアウト
        </button>
      </div>
    </Section>
  </StackLayout>
  )
}

export default Home
