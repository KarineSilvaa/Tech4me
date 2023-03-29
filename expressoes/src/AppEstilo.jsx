import './App.css';

function App() {

   const estilo = {
    fontSize:  "24px",
    backgroundColor: "green",
   }

    return (
    <div className="App">
        <ol>
            <li style={estilo}>titulo 1</li>
            {lista}
            <li style={{ color: "yellow" }}>rodape 1</li>
            <li>rodape 2</li>
        </ol>
    </div>
    );
}

export default App