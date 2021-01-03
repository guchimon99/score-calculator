import { useLocation, Link } from 'react-router-dom'
import * as Icons from 'react-feather'

const Result = () => {
  const { state: { keyword } } = useLocation()

  return (
    <div className="border-b mb-4 flex items-center">
      <Link to="/search" className="p-2">
        <Icons.ChevronLeft />
      </Link>
      <div className="py-2 pr-2 flex-grow">
        &quot;{keyword}&quot; の検索結果
      </div>
    </div>

  )
}

export default Result
