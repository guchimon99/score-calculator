import { Provider as EntitiesProvider } from '../hooks/entities'
import { Provider as AuthProvider } from '../hooks/auth'
import { Provider as ErrorProvider } from '../hooks/error'

import Splash from './Splash'
import Main from './Main'
import Errors from './Errors'

const App = () => (
  <ErrorProvider>
    <AuthProvider>
      <EntitiesProvider>
        <Main />
        <Splash />
      </EntitiesProvider>
    </AuthProvider>
    <Errors />
  </ErrorProvider>
)

export default App
