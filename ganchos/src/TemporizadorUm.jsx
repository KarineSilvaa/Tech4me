import React from "react";

function TemporizadorUm(){
    const state = React.useState("Inicial");
    const setState = state[1];

    function manipulador(){
        console.log("passou effect")

        const cbTimeout = () => setState("atualização")
        setTimeout(cbTimeout, 1000);
    }

    React.useEffect(manipulador)
    
    return (
        <>
        <button onClick={() => setState("botao")}>Texto</button>
        {new Date().toLocaleString()}
        </>

    )
    
}

export default TemporizadorUm;