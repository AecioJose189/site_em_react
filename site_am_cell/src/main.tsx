import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Carrossel from './components/Carrossel'
import NavBar from './components/NavBar'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NavBar />
    <Carrossel/>
  </StrictMode>
)
