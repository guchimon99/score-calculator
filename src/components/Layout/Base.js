import { NavLink } from 'react-router-dom'
import * as Icons from 'react-feather'

const Navigator = () => (
  <div className="fixed left-0 right-0 bottom-0 bg-white border-t-2 h-12">
    <div className="max-w-2xl mx-auto flex justify-between px-2 h-full items-stretch">
      <NavigatorItem to="/library"><Icons.Book/></NavigatorItem>
      <NavigatorItem to="/compose/calculator"><Icons.Edit/></NavigatorItem>
      <NavigatorItem to="/search"><Icons.Search/></NavigatorItem>
      <NavigatorItem to="/settings"><Icons.Settings/></NavigatorItem>
    </div>
  </div>
)

const NavigatorItem = props => (
  <NavLink className="p-3 text-gray-400" activeClassName="text-gray-900" {...props} />
)

const Base = ({ children }) => (
  <>
    <div className="max-w-2xl mx-auto">
      {children}
    </div>
    <Navigator />
  </>
)

export default Base
