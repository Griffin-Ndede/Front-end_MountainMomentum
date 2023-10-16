
import React from 'react';
import './App.css';
import Home from './Components/Home';
// import LoginAndRegistration from './components/Loginandregistration'; 
// import PackageDetails from './components/PackageDetails.js';
import Navbar from "./Components/NavBar"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthenticationPage from './Components/AuthPage';
// import Footer from './components/Footer';
import About from './Components/About';


function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <div>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/login" element={<LoginAndRegistration />} /> */}
        <Route path='/login' element= {<AuthenticationPage/>}/>
        {/* <Route path="/package/:id" element={<PackageDetails />} /> */}
        <Route path='/about' element= {<About/>}/>
      </Routes>
      </div>
      {/* <Footer/> */}
    </BrowserRouter>
  );
}

export default App;

