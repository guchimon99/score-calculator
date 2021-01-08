import { NavLink } from 'react-router-dom'
import * as Icons from 'react-feather'

import { BottomBar } from './Bar'
import Container from './Container'

const Navigator = () => (
  <BottomBar>
    <Container className="flex justify-between px-2 items-stretch">
      <NavigatorItem to="/library"><Icons.Book/></NavigatorItem>
      <NavigatorItem to="/search"><Icons.Search/></NavigatorItem>
      <NavigatorItem to="/settings"><Icons.Settings/></NavigatorItem>
    </Container>
  </BottomBar>
)

const NavigatorItem = props => (
  <NavLink className="p-3 text-gray-400" activeClassName="text-gray-900" {...props} />
)

const Base = ({ children }) => (
  <>
    <Container className="pb-12">
      {children}
    </Container>
    <Navigator />
  </>
)

export default Base
