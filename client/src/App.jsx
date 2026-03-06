import React from 'react'
import Home from './pages/Home'
import Notes from './pages/Notes'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import "./App.css";

const App = () => {

  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/notes" element={<Notes/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
