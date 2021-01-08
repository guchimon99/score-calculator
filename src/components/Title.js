import { useMemo } from 'react'

const Title = ({ size = 1, className: _className, ...props }) => {
  const className = useMemo(() => {
    const classNames = ['font-bold', _className || '']

    switch (size) {
      case 1:
        classNames.push('text-3xl mb-5')
        break
      case 2:
        classNames.push('text-2xl mb-4')
        break
      case 3:
        classNames.push('text-lg mb-3')
        break
      default:
    }

    return classNames.join(' ')
  }, [size, _className])

  return <div {...props} className={className} />
}

export default Title
