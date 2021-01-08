import {
  Link as RRLink,
  NavLink as RRNavLink
} from 'react-router-dom'

import { useToWithFrom } from '../hooks/history'

const Link = ({ to, ...props }) => {
  const toWithFrom = useToWithFrom(to)

  return <RRLink to={toWithFrom} {...props} />
}

export const NavLink = ({ to, ...props }) => {
  const toWithFrom = useToWithFrom(to)

  return <RRNavLink to={toWithFrom} {...props} />
}

export default Link
