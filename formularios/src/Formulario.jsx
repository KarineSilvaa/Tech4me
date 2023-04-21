import React from "react";

const Formalario = () => {
   let state = React.useState("");
   const nome= state[0];
   const setState = state[1];

    React.useEffect(function () {
        console.log("montagem");

        return function willUnmount(){
            console.log("desmontagem");
        };
    }, []);

    const handleEnvio = (evento) => {
        evento.preventDefault();

        const form = evento.target;

        console.log(form.name);
    };

    const handleChange = (evento) => {
        const campo = evento.target;
        console.log(campo.value);
        setState(campo.value);
    };

    return (
        <form name="UF" onSubmit={handleEnvio}>
            Nome: <input type="text" name="nome" placeholder="Nome completo" 
            value={nome} onChange={handleChange} />
            <div>
                <button>Enviar</button>
            </div>
        </form>
    );
};

export default Formalario;