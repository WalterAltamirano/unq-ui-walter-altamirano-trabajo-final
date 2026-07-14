import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Footer from './components/Footer'
import { Routes, Route, Navigate } from 'react-router'
import Historial from './components/Historial'
import Layout from './utils/Layout'
import Home from './components/Home'
import NotFoundContent from './utils/NotFoundContent'
function App() {

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route element={<Layout />}>
        <Route path="home" element={<Home />}/>
        <Route path="historial" element={<Historial />}/>
      </Route>
      <Route path="*" element={<NotFoundContent />} />
    </Routes>
  )
}

export default App
