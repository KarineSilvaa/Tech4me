import './App.css'

function App() {
    let resul = 6 + Math.round(5.6);
    let id = 8;

    return (
    <div>
        <textarea id={"textearea_"+ id } rows={resul}></textarea>
    </div>
    );
}

export default App
