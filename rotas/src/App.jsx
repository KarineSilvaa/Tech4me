import { useState } from 'react'
import './App.css'
import { Link } from 'react-router-dom';


function App() {
  const [count, setCount] = useState(0);

  const logo = "https://p2.trrsf.com/image/fget/cf/1200/1600/middle/images.terra.com/2023/03/03/super-mario-bros-filme_capa3-1hbg1how7onqs.jpg";

  return (
    <>
      <nav>
        <Link to="listagem">Ver a listagem</Link> | <Link to="login">Login</Link>
      </nav>
      <div>
      <img src={logo} alt="logo" style={{weight: "100px",height: "150px"}}/>
      </div>
     <button>
      <Link to="sobre">Sobre</Link>
     </button>
     <Link to="sinopse">
      <button>Sinopse</button>
     </Link>
    </>
  );
}

export default App
