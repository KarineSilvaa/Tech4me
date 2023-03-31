
import './App.css'
import BemVindo from './BemVindo'
import Bacana from './Bacana'
import Lista from './Lista'

function App() {
  return(
    <div className='App'>
      <h1>Lista de doces</h1>
      <Lista />

      <BemVindo></BemVindo>
      <BemVindo />
      <Bacana />
    </div>
  )
}

export default App
