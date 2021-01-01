import * as Icons from 'react-feather'
import { Link } from 'react-router-dom'

const Header = ({ title, parent, info }) => (
  <div className="fixed top-0 left-0 right-0 h-12 bg-white border-b">
    {parent && (
      <div className="absolute top-0 left-0">
        <Link to={parent} className="text-gray-500 p-2 w-12 h-12 flex justify-center items-center">
          <Icons.ArrowLeft />
        </Link>
      </div>
    )}

    {info && (
      <div className="absolute top-0 right-0">
        <Link to={info} className="text-gray-500 p-2 w-12 h-12 flex justify-center items-center">
          <Icons.Info />
        </Link>
      </div>
    )}

    <div className="max-w-2xl px-12 h-full flex items-center">
      <div className="px-2 w-full">
        <div className="w-full overflow-hidden">{title}</div>
      </div>
    </div>
  </div>
)

export default Header
