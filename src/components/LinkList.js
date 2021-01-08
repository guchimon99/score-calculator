import * as Icons from 'react-feather'
import Link from './Link'

const List = ({ className, ...props }) => <div className={`border-t ${className || ''}`} {...props} />

export const Item = ({ children, ...props }) => (
  <Link {...props}>
    <div className="border-b text-blue-500 px-2 py-1 flex items-center">
      <div className="flex-grow">{children}</div>
      <div className="w-8 h-8 flex justify-center items-center"><Icons.ChevronRight/></div>
    </div>
  </Link>
)

export const AddButton = ({ className, ...props }) => (
  <button className={`${className} text-blue-500 text-center p-2 w-full border-b text-sm`} {...props} />
)

export default List
