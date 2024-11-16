import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Carrossel from './components/Carrossel'
import NavBar from './components/NavBar'
import SobreNos from './components/SobreNos'
import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NavBar />
    <Carrossel/>
    <SobreNos/>
  </StrictMode>
)
