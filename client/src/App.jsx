import React from 'react';
import Home from './pages/Home';
import Notes from './pages/Notes';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import "./App.css";
import EditNote from './pages/Editnote';
import {Toaster} from "react-hot-toast";

const App = () => {

  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/notes" element={<Notes/>}/>
        <Route path="/edit-note/:id" element={<EditNote/>}/>
      </Routes>
      <Toaster/>
    </BrowserRouter>
  )
}

export default App
