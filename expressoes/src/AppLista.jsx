import './App.css';

function App() {
    /*
    comentário no JS
    */
   const lista = [
    <li key={`doces_${1}`}>Item 1</li>,
    <li className="par" key={2}>Item 2</li>,
    <li key={3}>Item 3</li>,
    <li key={4}>Item 4</li>,
    <li key={5}>Item 5</li>,
    <li key={6}>Item 6</li>,
    <li key={7}>Item 7</li>,
   ];
 
   const estilo = {
    fontSize:  "24px",
    backgroundColor: "green",
   }

    return (
    <div className="App">
        <ol>
            <li style={estilo}>titulo 1</li>
            {
                //<li>titulo 2</li>
                /*
                normal
                */
            }
            {lista}
            <li style={{ color: "yellow" }}>rodape 1</li>
            <li>rodape 2</li>
        </ol>
    </div>
    );
}

export default App