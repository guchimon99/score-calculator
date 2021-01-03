import * as Icons from 'react-feather'
import { Link } from 'react-router-dom'

const List = props => <div {...props} />

export const Item = ({ children, ...props }) => (
  <Link {...props}>
    <div className="border-b ml-2 text-blue-500 p-2 flex items-center">
      <div className="flex-grow">{children}</div>
      <div className="w-8 h-8 flex justify-center items-center"><Icons.ChevronRight/></div>
    </div>
  </Link>
)

export default List
