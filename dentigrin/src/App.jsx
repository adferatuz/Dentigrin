import { useState } from 'react'
import Enrutamiento from './router/enrutamiento'
import { AuthProvider } from './components/auth/useAuth'

function App() {
  const [count, setCount] = useState(0)

  return ( 
      <AuthProvider>
        <Enrutamiento />
      </AuthProvider>     
  )
}

export default App
