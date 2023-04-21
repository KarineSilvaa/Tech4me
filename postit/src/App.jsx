import './App.css';
import Nota from './Nota';

function App() {
  let state = React.useState([{id: 1, texto: "Estudar props" , data: new Date()}]);
  const lista = state[0]
  const setLista = state[1];
  
  state = React.useState("Exemplo");
  const texto = state[0];
  const setTexto = state[1];

  const estiloCard = {
  display: "flex",
  };

  const criarNota = () => {
    const novo = {id: Date.now(), texto };
    setLista((listaAtual) => ([...listaAtual, novo]));
    setTexto("Exemplo");
  }

  return (
    <>
      <div className='App'>
        <h1>Recados</h1>
        <Nota texto={texto}></Nota>
       <form >
        <input type="text" name="texto" placeholder='Digite a nova nota' value={texto} onChange={(evento) => setTexto(evento.target.value)}/>
        <button type="button" onClick={() => criarNota()}>Criar nota</button>
      </form>
      
      <div style={estiloCard}>
        {lista.map((item)=> (
        <Nota key={item.id} texto={item.texto} />
        ))}
       </div>
       
       <p className="read-the-docs">@Karine 2023</p>
       </div>
    </>
  )
}

export default App;
