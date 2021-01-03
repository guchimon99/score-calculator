import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import { EntitiesProvicer } from '../hooks/entities'

import Library from './Library'
import Search from './Search'
import Settings from './Settings'

import Calculators from './Calculators'
import Compose from './Compose'

import NotFound from './NotFound'

const App = () => (
  <EntitiesProvicer>
    <Router>
      <Switch>
        <Redirect path="/" exact to="/library" />
        <Route path="/library" component={Library} />
        <Route path="/search" component={Search} />
        <Route path="/settings" component={Settings} />
        <Route path="/calculators" component={Calculators} />
        <Route path="/compose" component={Compose} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  </EntitiesProvicer>
)

export default App
