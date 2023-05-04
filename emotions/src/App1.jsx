import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
/** @jsxImportSource @emotion/react */

function App() {
const caramelo = {
  background: "aquamarine",
};

  return (
    <>
      <div></div>
      <h1>Vite + React</h1>
      <div className="card">
        <button>teste</button>
        <p css={{color: "blue"}}>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p css={{fontSize: 24, color: "orange"}}>
        Click on the Vite and React logos to learn more
      </p>

      <p css={[caramelo, {color: "chocolate"}]}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem aspernatur quo at dolorem tenetur fugiat exercitationem assumenda doloremque unde. Nostrum illum sapiente maxime perspiciatis, at dignissimos accusantium deleniti totam dicta.
      </p>
    </>
  );
}

export default App
