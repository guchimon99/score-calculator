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
    <>
      <div className="fixed top-0 left-0 right-0 border-b-2 h-12">
        <form onSubmit={handleSubmit(onValid)} className="max-w-2xl mx-auto p-2">
          <input
            name="keyword" type="text" placeholder="計算機を探す"
            className="border rounded w-full py-1 px-2 bg-gray-100"
            ref={register} />
        </form>
      </div>
      <div className="py-12 max-w-2xl mx-auto min-h-screen">

      </div>
    </>

  )
}

export default Input
