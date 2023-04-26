import React
 from "react"
import { Link } from "react-router-dom";
function Listagem() {
    return(<div>
        <Link to="/">Voltar para Home</Link>
         <table>
            <tr>
                <th>Titulo</th>
                <th>Gênero</th>
                <th>Ano</th>
            </tr>
            <tr>
                <td>Mario</td>
                <td>Aventura</td>
                <td>2023</td>
            </tr>
        </table>
    </div>
    );
}

export default Listagem;