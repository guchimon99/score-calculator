import { Switch, Route, Redirect } from 'react-router-dom'

import BaseLayout from '../Layout/Base'

import Home from './Home'
import Calculators from './Calculators'

const Library = () => (
  <BaseLayout>
    <Switch>
      <Route path="/library" excat component={Home} />
      <Route path="/library/calculators/:category" excat component={Calculators} />
      <Redirect to="/library" />
    </Switch>
  </BaseLayout>
)

export default Library
