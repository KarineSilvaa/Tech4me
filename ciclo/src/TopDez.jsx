import React from "react";

class TopDez extends React.Component {
    constructor(props) {
        super(props);

        this.state = { filmes: [] };
    }

    componentDidMount() {
        const processar = (dados) => {
            this.setState({ filmes: dados });
        }
        const url = 'https://b571-189-113-68-7.ngrok-free.app/filmes'

        fetch(url)
        .then(res => res.json())
        .then(processar);
    }

    componentDidUpdate() {
        console.log("didUpdate", this.state.filmes.length);
    }

    componentWillUnmount() {
        console.log("Wiil");
    }

    render() {
        const lista = [];
        
        for (const filme of this.state.filmes) {
           lista.push(
           <li key={`f_${filme.id}`}>
            <div>
            {filme.titulo} | Gênero: {filme.genero}
            </div>
            <small>Quem assistiu? {filme.pessoa}</small>
            </li>
            );
        }
        
        if (lista.length > 0) 
        return (
            <>
            <button onClick={() => {
                const novo = {id: new Date(), titulo: "Deu a louca na chapeuzinho"}
                const cb = (atual) => ({filmes: [novo, ...atual.filmes]})
                this.setState(cb)
            }}>Novo</button>
            <ol>{lista}</ol>;
            </>
            );
            
        return <h2>Carregando.... </h2>
    }
} 

export default TopDez;