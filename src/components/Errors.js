import * as Icons from 'react-feather'

import { useError } from '../hooks/error'

const Errors = () => {
  const error = useError()

  if (!error) return null

  return (
    <div className="fixed top-0 left-0 right-0">
      <div className="max-w-2xl mx-auto p-2">
        <div className="shadow-lg rounded bg-white p-2 text-sm flex items-center">
          <div className="text-red-500 mr-2">
            <Icons.AlertCircle />
          </div>
          <div className="flex-grow text-sm py-1">{error.message}</div>
        </div>
      </div>
    </div>
  )
}

export default Errors
