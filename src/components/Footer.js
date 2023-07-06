import React from 'react'
import { Link } from 'react-router-dom'
function Footer(props) {
    const {langType,setLangType}=props;
    return (
        <>
            <footer id="footer" className="footer">
                <div className="container">
                    <div className="row gy-4">
                        <div className="col-lg-5 col-md-12 footer-info">
                            <a href="index.html" className="logo d-flex align-items-center">
                                <span>LegalMatch</span>
                            </a>
                            {/* <p>Experience the power of LegalMatch, the AI powered legal research platform that revolutionizes the way professional acess acurate and relevant legal information efficiently.</p> */}
                            <p >{langType? `Experience the power of LegalMatch, the AI powered legal research platform that revolutionizes the way professional acess acurate and relevant legal information efficiently.`:`Opplev kraften til LegalMatch, den AI-drevne juridiske forskningsplattformen som revolusjonerer måten fagfolk får tilgang til nøyaktig og relevant juridisk informasjon på en effektiv måte.`} </p>
             
                            <div className="social-links d-flex mt-4">
                                <a href="#" className="twitter"><i className="bi bi-twitter"></i></a>
                                <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
                                <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
                                <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
                            </div>
                        </div>

                        <div className="col-lg-2 col-6 footer-links">
                            <h4>{langType?"Menu":"Meny"}</h4>
                            <ul>
                                <li><Link to="/">{langType?"Home":"Hjemme"}</Link></li>
                               
                                <li><Link to="/services">{langType?"Services":"Tjenester"}</Link></li>
                                <li><Link to="/pricing">{langType?"Pricing":"Priser"}</Link></li>
                                {/* <li><Link to="/">Privacy policy</Link></li> */}
                            </ul>
                        </div>

                        <div className="col-lg-2 col-6 footer-links">
                            <h4>{langType?"Company":"Selskap"}</h4>
                            <ul>
                            <li><Link to="/about">{langType?"About":"Om Oss"}</Link></li>
                            <li><Link to="/contact">{langType?"Contact us":'Kontakt Oss'}</Link></li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
                            <h4>{langType?"Contact Us":"Kontakt Oss"}</h4>
                            <p>
                                A-10 Adam Street <br />
                                Andhere East, NY 535022<br />
                                Banglore <br /><br />
                                <strong>{langType?"Phone":'Telefoner'}:</strong> +1 5589 55488 55<br />
                                <strong>{langType?"Email":'E-pos'}:</strong> legalMatch@google.com<br />
                            </p>

                        </div>

                    </div>
                </div>
                <div className="container mt-4">
                    <div className="copyright">
                      {langType?"   Copyright":" Opphavsrett"} &copy; 2023 <strong><span>LegaMatch |</span></strong> {langType?"All Rights Reserved":'Alle rettigheter reservert'}
                         {/* Opphavsrett © 2023 LegalMatch | Alle rettigheter reservert. */}
                    </div>
                 
                </div>
            </footer>
        </>
    )
}

export default Footer