import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import logoOfWebsite from "../assets/img/logoweb.jpg";


function Navbar(props) {
    const [activeNavbar, setActiveNavbar]=useState("Home");
    const {langType,setLangType}=props;
    const homeClicked=()=>{
        setActiveNavbar("Home");
        if(window.innerWidth<1278)
        {
            setmobclick(!mobclick);
        }
      
    }
    const aboutClicked=()=>{
        setActiveNavbar("About");
        if(window.innerWidth<1278)
        {
            setmobclick(!mobclick);
        }
    }
    const servicesClicked=()=>{
        setActiveNavbar("Services");
        if(window.innerWidth<1278)
        {
            setmobclick(!mobclick);
        }
    }
    const pricingClicked=()=>{
        setActiveNavbar("Pricing");
        if(window.innerWidth<1278)
        {
            setmobclick(!mobclick);
        }
    }
    const contactClicked=()=>{
        setActiveNavbar("Contact");
        if(window.innerWidth<1278)
        {
            setmobclick(!mobclick);
        }
    }
    const blogClicked=()=>{
      setActiveNavbar("Blog");
      if(window.innerWidth<1278)
        {
            setmobclick(!mobclick);
        }
  }
  const [mobclick,setmobclick]=useState(true);
  const tooglemobClick=()=>{
    if(window.innerWidth<1278)
    {
        setmobclick(!mobclick);
    }
  }
  const hnadlelangChange=()=>{
    setLangType(!langType)
  }
  return (
    <>
       {/* <!-- ======= Header ======= --> */}
  <header id="header" className="header d-flex align-items-center fixed-top">
    <div className="container-fluid container-xl d-flex align-items-center justify-content-between">

      <Link to="/" className="NavbarLogo">
       
       <img src={logoOfWebsite} alt=""/><span className="webLogoName">LegalMatch</span>
      
      </Link>

     {mobclick &&( <i className="mobile-nav-toggle mobile-nav-show bi bi-list" onClick={tooglemobClick}></i>)}
     {!mobclick &&( <i className="mobile-nav-toggle mobile-nav-show  bi bi-x" onClick={tooglemobClick}></i>)}
      <nav id="navbar" className={!mobclick? "navbar navmobb":"navbar"}>
        <ul>
          <li><Link to="/" className={activeNavbar==="Home"?"activeNavbar":""} onClick={homeClicked}>{langType?`Home`:'Hjemme'}</Link></li>
          <li><Link to="/about" className={activeNavbar==="About"?"activeNavbar":""} onClick={aboutClicked}>{langType?`About`:'Om oss'}</Link></li>
          <li><Link to="/services" className={activeNavbar==="Services"?"activeNavbar":""} onClick={servicesClicked}>{langType?`Services`:'Tjenester'}</Link></li>
          <li><Link to="/pricing" className={activeNavbar==="Pricing"?"activeNavbar":""} onClick={pricingClicked}>{langType?`Pricing`:'Priser'}</Link></li>
          <li><Link to="/blog" className={activeNavbar==="Blog"?"activeNavbar":""} onClick={blogClicked}>{langType?`Blog`:'Blogg'}</Link></li>
        
          
          <li><Link to="/contact" className={activeNavbar==="Contact"?"activeNavbar":""} onClick={contactClicked}>{langType?`Contact`:'Kontakt'}</Link></li>
          <li><Link className=" langcol"  onClick={hnadlelangChange}> {langType?'English':"Norwegian"}</Link></li>
        </ul>
      </nav>
      {/* <!-- .navbar --> */}

    </div>
  </header>

 
    </>
  )
}

export default Navbar