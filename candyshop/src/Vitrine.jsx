import React from "react";
import './sobre.css'

function Vitrine(props) {
    const { produto } = props;

    return (
        <div>
            <h2>{produto.nome}</h2>
            <p>{produto.preco}</p>
        </div>
    );
}

export default Vitrine;