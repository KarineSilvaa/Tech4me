import { useState } from "react";
import { useLocation } from "react-router-dom"

function Login() {
    const [login, setLogin] = useState("");

    const handleSubmit = (evento) =>{
        evento.preventDefault();

        const redirecionar = (dados) => {
            if (dados.ok) useLocation("/");
        }

        fetch(url,config).then(res = res.json).then(redirecionar);
    };
    return(
        <form onSubmit={handleSubmit}>
            <fieldset>
                <input type="text" name="login" placeholder="Login"
                value={login} onChange={(e) => setLogin(e.target.value)} />
            </fieldset>
            <fieldset>
             <input type="password" name="senha" />
            </fieldset>
             <button>Entrar</button>
        </form>
    )
}

export default Login;