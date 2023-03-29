import './App.css';

function App() {
    let m1 = <strong>negrito</strong>
    const m2 = <em>itálico</em>
    const fusca ={modelo: "Fusca Itamar", anoFeb: 1996, possuiAr: true };
 
    return (
    <div className="App">
       <p>Conteúdo de {m1} e também {m2}</p>
       {fusca.modelo}
       {fusca.anoFeb}
       <p>Não renderiza: {fusca.possuiAr}</p>
       <p>Possui ar: {fusca.possuiAr ? "Sim" : "Claro que não"}</p>
       <input type={"checkbox"} />
      <input type="text" value="Nome completo" />
    </div>
  );
}

export default App