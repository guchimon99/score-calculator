import { Link } from 'react-router-dom'
import * as Icons from 'react-feather'

const Modal = ({ children, ...props }) => (
  <>
    <div className="max-w-2xl mx-auto px-4 py-12 min-h-screen">
      {children}
    </div>
    <div className="fixed top-0 left-0 right-0 border-b bg-white">
      <div className="max-w-2xl mx-auto">
        <Link to="/" className="p-2 block">
          <Icons.X />
        </Link>
      </div>
    </div>
  </>
)

export default Modal
