import { useState } from 'react'
import { AppTheme } from './theme/AppTheme'
import { AppRouter } from './router/AppRouter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <AppTheme>
      <AppRouter/>
    </AppTheme>
  )
}

export default App
