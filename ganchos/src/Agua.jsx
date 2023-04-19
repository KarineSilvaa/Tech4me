import React from "react";

class Agua extends React.Component {
    constructor() {
        super();
        
        this.state = { vasilhame: "copo", capacidade: 0.6 };
    }
    render() {
        return (
        <>
        <button onClick={()=> this.setState({ vasilhame:"Garrafa" })}>Trocar</button>
        <h2>
        Água {this.state.vasilhame}
        <br /> 
        Capacidade: {this.state.capacidade}
        </h2></>
        )
    };
}

export default Agua;