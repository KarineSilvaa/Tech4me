import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import App from './App.jsx'
import Sobre from './Sobre'
import Vitrine from './Vitrine'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
  <Route path="/" element={<App />} />
  <Route path="sobre" element={<Sobre />} />
  <Route  path="vitrine" element={<Vitrine/>}/>
  </Routes>
  </BrowserRouter>
)
