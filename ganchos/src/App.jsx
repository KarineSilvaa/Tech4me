import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Liquido from './Liquido'
import Agua from './Agua'

import Temporizador from './Temporizador'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Agua />
      <Liquido />
      <Temporizador />
    </div>
  )
}

export default App
