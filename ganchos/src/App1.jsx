import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Temporizador from './TemporizadorUm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Temporizador />
    </div>
  )
}

export default App
