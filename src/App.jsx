import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom'
import Header from './Components/Integrated/Header/Header'
import Footer from './Components/Integrated/Footer/Footer'
import Home from './Components/Integrated/Home/Home'
import About from './Components/Integrated/About/About'
import Contact from './Components/Integrated/Contact/Contact'
import Login from './Components/Integrated/Login/Login';
import NotFound from './Components/Integrated/NotFound/NotFound';
import ControlPanel from './Components/Integrated/ControlPanel/ControlPanel';
window.addEventListener('storage', (e) => {
  console.log(`Key Changed: ${e.key}`);
  console.log(`New Value: ${e.newValue}`);
});

function App() {


  return (

    <>
      <BrowserRouter>
        <Header />

          <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/login' element={<Login/>} />
            <Route path='/panel' element={<ControlPanel/>} />
            <Route path='*' element={<NotFound/>} />

          </Routes>
        {/* </main> */}

        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
