import { StrictMode } from 'react'
import { Routes, Route, HashRouter } from 'react-router'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import CreatePartners from './CreatePartner'
import UpdatePartners from './UpdatePartners'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <HashRouter>
    <StrictMode>
      <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='/create' element={<CreatePartners />}/>
        <Route path='/update' element={<UpdatePartners />}/>
      </Routes>
    </StrictMode>
  </HashRouter>
)
