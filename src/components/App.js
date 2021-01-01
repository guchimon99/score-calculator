import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import { EntitiesProvicer } from '../hooks/entities'

import Me from './Me'
import Calcurators from './Calculators'
import NotFound from './NotFound'

const App = () => (
  <EntitiesProvicer>
    <Router>
      <Switch>
        <Redirect path="/" exact to="/me" />
        <Route path="/me" component={Me} />
        <Route path="/calculators" component={Calcurators} />
        <Route path="*" component={NotFound} />
        <Redirect to="/me" />
      </Switch>
    </Router>
  </EntitiesProvicer>
)

export default App
