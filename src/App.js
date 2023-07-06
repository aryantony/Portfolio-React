import React, { useEffect, useState } from "react";
import "./assets/css/main.css"
import "./assets/css/style.css"
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";
import Services from "./pages/Services";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
function App() {
 
const [langType,setLangType]=useState(true);
const statprop={langType,setLangType}
  return (
    <>
      <Router>
      <Navbar {...statprop}/>
      <section className="topNavbar">
        <Routes>
         
          <Route path='/' element={<Home {...statprop}/>} />
          <Route path='/about' element={<About {...statprop}/>} />
          <Route path='/services' element={<Services {...statprop}/>} />
          <Route path='/pricing' element={<Pricing {...statprop}/>} />
          <Route path='/contact' element={<Contact {...statprop}/>} />
          <Route path='/blog' element={<Blog {...statprop}/>} />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
        </section>
        <Footer {...statprop}/>
      </Router>
    </>
  );
}

export default App;
