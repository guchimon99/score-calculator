import { Provider as ErrorProvider } from '../hooks/error'
import { Provider as AuthProvider } from '../hooks/auth'
import { Provider as UserProvider } from '../hooks/user'
import { Provider as CalculatorsProvider } from '../hooks/calculators'

import Splash from './Splash'
import Main from './Main'
import Errors from './Errors'

const App = () => (
  <ErrorProvider>
    <AuthProvider>
      <UserProvider>
        <CalculatorsProvider>
          <Main />
        </CalculatorsProvider>
      </UserProvider>
      <Splash />
    </AuthProvider>
    <Errors />
  </ErrorProvider>
)

export default App
