import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import { useIsReady } from '../hooks/auth'

import Library from './Library'
import Search from './Search'
import Settings from './Settings'
import Editor from './Editor'
import NotFound from './NotFound'
import Calculators from './Calculators'

const Main = () => {
  const isReady = useIsReady()

  if (!isReady) return null

  return (
    <Router>
      <Switch>
        <Redirect path="/" exact to="/library" />
        <Route path="/library" component={Library} />
        <Route path="/search" component={Search} />
        <Route path="/settings" component={Settings} />
        <Route path="/calculators" component={Calculators} />
        <Route path="/editor" component={Editor} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  )
}

export default Main
