import { useLocation } from 'react-router-dom'

import BaseLayout from '../Layout/Base'

import Input from './Input'
import Result from './Result'

const Search = () => {
  const { state } = useLocation()

  const content = state ? <Result /> : <Input />

  return (
    <BaseLayout>
      {content}
    </BaseLayout>
  )
}

export default Search
