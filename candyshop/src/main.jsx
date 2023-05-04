import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { BrowserRouter, Routes,Route } from 'react-router-dom';

import App from './App.jsx'
import Vitrine from './Vitrine.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={ <App />} />
    <Route path="vitrine" element={<Vitrine />} />
  </Routes>
  </BrowserRouter>
  
)
