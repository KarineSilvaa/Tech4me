import React from "react";

function Temporizador(){
    const state = React.useState(0);
    const setState = state[1];

    const stt = React.useState(0);
    const contadora = stt[0];
    const setContadora = stt[1];

    const stm = React.useState([]);
    const lista = stm[0];
    const setLista = stm[1];

    function manipulador(){
        console.log("passou effect")

        const cbTimeout = () => setState((atual) => atual + 1)
        setTimeout(cbTimeout, 1000);
    }

    React.useEffect(manipulador, [contadora]);

    const UF = "RN";

    React.useEffect(()=>{
        const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${UF}/municipios`
        fetch(url)
        .then(res => res.json())
        .then(dados => setLista(dados));
    }, []);
    
    return (
        <>
        <button onClick={() => setContadora((atual) => atual 
        + 1)}>Texto</button>
        <h2>{state[0]}</h2>
        <h2>Contadora: {contadora}</h2>
        <h2>Total de municipios de {UF}: {lista.lenght}</h2>
        {new Date().toLocaleString()}
        </>
    );
    
}

export default Temporizador;