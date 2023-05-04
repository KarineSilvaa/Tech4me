/** @jsxImportSource @emotion/react */
import React from "react";

function App() {
    const claro = { background: "beige", background: "chocolate"};
    const escuro = { background: "darkslateblue",  color: "white"};
     
    const [marcado, setMarcado] = React.useState(false);
    return(
        <>
        <h1>Trocar a cor</h1>
        <input type="checkbox" checked={marcado} onChange={(e) => setMarcado (e.target.checked)}  ></input> Inverter as cores
        <div css={[{margin: 10 }, marcado ? escuro : claro]}>
            {marcado ? "Escuro" : "Claro"}
            <br/>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim, incidunt praesentium eum cum commodi error odit facere veritatis voluptates ex sequi laborum? Tempora qui necessitatibus facilis repellendus accusamus porro tempore.</div>
        
        </>
    )
}

export default App;
