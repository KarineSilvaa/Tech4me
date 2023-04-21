import React, { useState } from 'react'
import './App.css'
import Formalario from './Formulario'
import Roteador from './Roteador'

function App() {
  let state = React.useState("comp");
  const curso = state[0];
  const setCurso = state[1];

  return (
    <>
      <div>
        <h2>Cadastre-se</h2>
      </div>
      <div className="card">
        <input type="radio" name='curso' value="comp" checked={curso === "comp"}/> Computação 
        <br />
        <input type="radio" name='curso' value="historia" checked={curso === "comp"}/> Historia
        <br />
        <br />
        <br />
        <Roteador />
      </div>
      <p className="read-the-docs">@Tech4me</p>
    </>
  )
}

export default App
