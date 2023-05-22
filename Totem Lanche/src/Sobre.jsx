import React from "react"
import './sobre.css'


function Sobre() {
 const foto = "https://cdn.discordapp.com/attachments/1110000716325589024/1110001217968541819/IMG-20220616-WA0004.jpg";

    return(
        <>
        <div className="imagem">
        <img src={foto} alt="foto" className="foto" />
        </div>
        <h3 className="eu">Sou Karine no momento sou iniciante em front-end, esse é meu primeiro projeto em React. Esse projeto é sobre um Totem de Lanche.</h3>
        </>
    )
}

export default Sobre;