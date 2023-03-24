import './App.css'

function App() {
    let lista = (
        <ol id= "lista">
            <li>kitkat</li>
            <li>Brigadeiro</li>
            <li>suspiro</li>
            <li>pudim</li>
            <li>pé de moleque</li>
            <li className="item">Prestigio</li>
            <li>Rapadura</li>
            <li>paçoca</li>
            <li>goiabada</li>
            <li>chantilly</li>
            <li>torta alemã<br />
            <input type="text" name="cpf" readOnly />
            </li>
        </ol>
    );
    return lista;
}

export default App
