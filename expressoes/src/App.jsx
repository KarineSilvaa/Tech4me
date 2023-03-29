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
            <li className="par" 
            key={2} 
            onClick={function() { 
                console.log("clique no item")
                }}>Item 2</li>
            <li>roda 2</li>
            <li style={{ color: "yellow" }}>rodape 1</li>
        </ol>
    </div>
    );
}

export default App