import { Provider as EntitiesProvider } from '../hooks/entities'
import { Provider as AuthProvider } from '../hooks/auth'

import Splash from './Splash'
import Main from './Main'

const App = () => (
  <AuthProvider>
    <EntitiesProvider>
      <Main />
      <Splash />
    </EntitiesProvider>
  </AuthProvider>
)

export default App
