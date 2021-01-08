import { useMemo } from 'react'
import { useLocation } from 'react-router-dom'

export const useFrom = () => {
  const { state } = useLocation()
  const from = (state || {}).from || null
  return from
}

export const useToWithFrom = (to) => {
  const { pathname } = useLocation()

  return useMemo(() => {
    if (!to) {
      return {
        state: { from: pathname }
      }
    }
    if (typeof to === 'string') {
      return {
        pathname: to,
        state: { from: pathname }
      }
    }
    return {
      state: {
        from: pathname,
        ...(to.state || {})
      },
      ...to
    }
  }, [to, pathname])
}
