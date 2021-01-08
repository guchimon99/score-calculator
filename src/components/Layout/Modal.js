import * as Icons from 'react-feather'

import Link from '../Link'

import { TopBar } from './Bar'
import Container from './Container'

const Modal = ({ children }) => (
  <>
    <Container className="py-12">
      {children}
    </Container>
    <TopBar>
      <Container className="flex items-strech h-full">
        <Link to="/" className="p-2 flex items-center justify-center">
          <Icons.X />
        </Link>
      </Container>
    </TopBar>
  </>
)

export default Modal
