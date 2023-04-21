import React from "react";

const Nome = () => {

    React.useEffect(function () {
        console.log("montagem");

        return function willUnmount(){
            console.log("desmontagem");
        }
    })
    return <h2>Nome</h2>
}

export default Nome;