import { useState } from 'react'
import './App.css'
import { Link } from 'react-router-dom'

function App() {
  const logo = "https://i.pinimg.com/originals/3d/d1/8c/3dd18c2df9247849c65bd4cf95c875da.jpg";

  return (
    <>
      <h1 className="logomarca">Mega Lanches</h1>
      <div className="imagem">
       <img src={logo} alt="logo" className= "logo" />
      </div>
       <Link to="sobre">Sobre</Link>
       <br/>
       <Link to="vitrine">Vitrine</Link>
    </>
  )
}

export default App
