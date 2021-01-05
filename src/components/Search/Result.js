import { useLocation, Link } from 'react-router-dom'
import * as Icons from 'react-feather'

const Result = () => {
  const { state: { keyword } } = useLocation()

  return (
    <>
      <div className="border-b-2 fixed top-0 left-0 right-0 h-12">
        <div className="max-w-2xl mx-auto flex items-center h-full">
          <Link to="/search" className="p-2">
            <Icons.ChevronLeft />
          </Link>
          <div className="py-2 pr-2 flex-grow">
            &quot;{keyword}&quot; の検索結果
          </div>
        </div>
      </div>
    </>
  )
}

export default Result
