import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import { Provider as EntitiesProvider } from '../hooks/entities'

import Library from './Library'
import Search from './Search'
import Settings from './Settings'
import Editor from './Editor'

import Calculators from './Calculators'

import NotFound from './NotFound'

const App = () => (
  <EntitiesProvider>
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
  </EntitiesProvider>
)

export default App
