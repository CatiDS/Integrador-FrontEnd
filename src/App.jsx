import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom'
import Header from './Components/Integrated/Header/Header'
import Footer from './Components/Integrated/Footer/Footer'
import Home from './Components/Integrated/Home/Home'
import About from './Components/Integrated/About/About'
import Contact from './Components/Integrated/Contact/Contact'
// import './Components/Basic/Button/Buttons.css'
import Login from './Components/Integrated/Login/Login';
import ControlPanel from './Components/Integrated/ControlPanel/ControlPanel';

function App() {

  return (

    <>
      <BrowserRouter>
        <Header />
        {/* <main>
          <h1>Novillo</h1>
          <button className='add change'>+</button> */}

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/login' element={<Login/>} />
            <Route path='/panel' element={<ControlPanel/>} />
            <Route path='*' element={<Home/>} />

          </Routes>
        {/* </main> */}

        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
