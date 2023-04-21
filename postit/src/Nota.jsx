import React from "react";

class Nota extends React.Component {
    render() {
        const estilo = {
        background: "yellow",
        color: "darkslateblue",
        fontSize: "18px",
        fontWeight:"bold",
         width: "100px",
         height: "10px",
         borderRadius: "2px",
         margin: "10px",
        };


        if (this.props.texto) return <div style={estilo}>{this.props.texto}</div>;
        
        return <div style={{...estilo, backgroundColor: "green"}}
        >Exemplo</div>;
    }
}

export default Nota;