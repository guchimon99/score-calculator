import * as Icons from 'react-feather'

import Container from './Container'
import Link from '../Link'

const Compose = ({ parent, title, children }) => {
  return (
    <>
      <Container>
        <div className="relative h-12 flex items-center py-2">
          <div className="px-12 text-center font-bold flex-grow">{title}</div>
          {parent && (
            <Link to={parent} className="flex text-blue-500 justify-center items-center absolute top-0 left-0 w-12 h-12">
              <Icons.ChevronLeft />
            </Link>
          )}
        </div>
        {children}
      </Container>
    </>
  )
}

export default Compose
