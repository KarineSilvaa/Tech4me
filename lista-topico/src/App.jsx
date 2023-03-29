import './App.css'

function App() {
 const lista = []

 for (let i = 0; i < 10; i++) {
  lista.push(<li>{i + 1}</li>)
 }

 return (
  <ul>
    {lista}
  </ul>
 )
}

export default App
