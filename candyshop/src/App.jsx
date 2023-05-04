import { useState } from 'react'
import Cartao from './Vitrine';
import './App.css'
import { Link } from 'react-router-dom';

function App() {
  const logo = "https://www.amazingclubs.ca/img/candyofthemonthclub.jpg";

  return (
    <>
        <h2 className="logomarca">CandyShop</h2>
      <div className="imagem">
        <img src={logo} alt="logo" className="logo" />
      </div>    
      <button>
       <Link to="vitrine">Vitrine</Link>
      </button>
    </>
  );
}

export default App;
