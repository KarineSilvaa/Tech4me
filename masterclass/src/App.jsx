import './App.css'

function obterPar(){
    const agora = new Date();
    const par = agora.getSeconds();
    
    return par % 2 == 0;
}

export default function App() {
    let foto;
    let tipo;

    if (obterPar()){
        foto= "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA18WyS8.img?w=612&h=408&m=6&x=203&y=62&s=492&d=233";
        tipo = <h1>Primeira foto</h1>
    } else {
        foto= "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA18XRJ2.img?w=612&h=344&m=6&x=415&y=102&s=229&d=229";
        tipo = <h3>Segunda foto</h3>;
    }
    
    return (
        <section>
             <img src={foto} />
            {tipo}
        </section>
    );
}

