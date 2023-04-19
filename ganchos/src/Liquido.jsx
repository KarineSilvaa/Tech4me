import React from "react";

function Liquido() {
    let state = React.useState("copo");
    const vasilhame = state[0]
    const setVasilhame = state[1]
    console.log("vasilhame", vasilhame);
    state = React.useState(0.6);
    const capacidade = state[0]
    const setCapacidade = state[1]
    console.log("capacidade", capacidade);

    return (
    <>
    <button onClick={() => setState(1.0) }>Trocar capacidade</button>
        <h2>
        Liquido: {vasilhame}
        <br /> 
        Capacidade: {capacidade}
        </h2>
    </>
    );
}

export default Liquido;