import { useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'

const Input = () => {
  const history = useHistory()
  const { register, handleSubmit } = useForm()

  const onValid = useCallback(data => {
    history.push('/search', { keyword: data.keyword })
  }, [])

  return (
    <form onSubmit={handleSubmit(onValid)} className="border-b p-2">
      <input className="border rounded w-full p-2 bg-gray-100" name="keyword" type="text" ref={register}/>
    </form>
  )
}

export default Input
