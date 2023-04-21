import React from "react";
import Computação from "./Computacao";
import Historia from "./Historia";

function Roteador(props) {
   switch (props.curso) {
    case "comp": 
    return <Computação />
    case "historia":
    return <Historia />
   }
}

export default Roteador;