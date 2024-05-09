import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import GetProject from './components/form/GetProject';
import Onboard from './components/Onboard';
import Home from './components/Home/Home';


export default function App() {
  return (
    <>
    <BrowserRouter>
    <NavBar />
    <Home/>
    <GetProject/>
    <Routes>
      <Route path='/getproject' element={<GetProject/>}/>
      <Route path='/onboard' element={<Onboard/>}/>
  
      
      
      

     
    </Routes>
    <Footer/>
    </BrowserRouter>
      
    </>
  )
}



