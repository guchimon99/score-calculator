import * as Icons from 'react-feather'

import { useCalculatorId } from '../../../hooks/calculator'

import Container from '../../Layout/Container'
import Link from '../../Link'

const Header = () => {
  const calculatorId = useCalculatorId()

  return (
    <Container>
      <div className="flex justify-between">
        <Link to="/" className="w-12 h-12 flex justify-center items-center text-blue-500">
          <Icons.X />
        </Link>
        <Link to={calculatorId && `/editor/calculators/${calculatorId}`} className="w-12 h-12 flex justify-center items-center text-blue-500">
          <Icons.Edit />
        </Link>
      </div>
    </Container>
  )
}

export default Header
