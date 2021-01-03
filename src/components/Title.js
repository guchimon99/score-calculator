import { useMemo } from 'react'

const Title = ({ size = 1, ...props }) => {
  const className = useMemo(() => {
    const classNames = ['font-bold py-2 px-3 mb-2']

    switch (size) {
      case 1:
        classNames.push('text-2xl')
        break
      case 2:
        classNames.push('text-lg')
        break
      default:
    }

    return classNames.join(' ')
  }, [size])

  return <div className={className} {...props} />
}

export default Title
