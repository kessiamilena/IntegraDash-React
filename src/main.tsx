import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './componentes/Header'
import MenuLateral from './componentes/MenuLateral'
import './index.css'
import Configuracoes from './pages/Configuracoes'
import Home from './pages/Home'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <MenuLateral />
      <section className='body'> 
       <Header />
    <Routes>
      <Route path='/' element={ <Home />}/>
      <Route path='configuracoes' element={<Configuracoes />}/>
    </Routes>
    </section>
    </BrowserRouter>
  </React.StrictMode>,
)
