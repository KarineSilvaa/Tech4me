import React from "react";

function Cartao(props) {
    const { produto } = props;

    return (
        <div>
            <h2>{produto.nome}</h2>
            <p>{produto.preco}</p>
        </div>
    );
}

export default Cartao;