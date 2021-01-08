import styled from 'styled-components'

import { useIsReady } from '../hooks/auth'

const Root = styled.div.attrs({
  className: 'fixed w-full h-full bg-white flex flex-col items-center justify-center top-0'
})`
  top: ${({ isShown }) => isShown ? 0 : -100}%;
  opacity: ${({ isShown }) => isShown ? 1 : 0};
  transition: ${({ isShown }) => {
    if (isShown) {
      return 'top 0s ease .5s, opacity .5s ease .5s'
    }
    return 'top 0s ease .5s, opacity .5s ease 0s'
  }};
`

const Splash = () => {
  const isReady = useIsReady()

  return (
    <Root isShown={!isReady}>
      <div className="font-bold">スコア計算機</div>
    </Root>
  )
}

export default Splash
