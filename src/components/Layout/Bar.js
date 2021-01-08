import { useMemo } from 'react'

const Bar = ({ position, ...props }) => {
  const className = useMemo(() => {
    const classNames = ['fixed', 'h-12', 'left-0', 'right-0', 'bg-white']

    switch (position) {
      case 'top':
        classNames.push('border-b-2', 'top-0')
        break
      case 'bottom':
        classNames.push('border-t-2', 'bottom-0')
        break
    }

    return classNames.join(' ')
  }, [position])

  return (
    <div className={className} {...props} />
  )
}

export const TopBar = props => <Bar position="top" {...props} />

export const BottomBar = props => <Bar position="bottom" {...props} />

export default Bar
