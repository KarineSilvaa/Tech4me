import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from './App';
import Listagem from './Listagem.jsx';
import NaoEncontrado from './NaoEncontrado';
import Sobre from './Sobre';
import Login from './Login';

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <h1>Filmes</h1>
    <br />
    <Routes>
    <Route path="/" element={<App />} />
    <Route path="/login" element={<Login/>} />
    <Route path="listagem" element={<Listagem />} />
    <Route path="sobre" element={<Sobre />} />
    <Route path="*" element={<NaoEncontrado/>} />
    </Routes>

    <p className="read-the-docs">@2023 Karine</p>
    </BrowserRouter>
);
