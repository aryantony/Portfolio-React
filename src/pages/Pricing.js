import React from 'react'
import p1 from "../assets/img/pricing-free.png"
import p2 from "../assets/img/pricing-starter.png"
import p3 from "../assets/img/pricing-business.png"
import p4 from "../assets/img/pricing-ultimate.png"
function Pricing(props) {
  const {langType,setLangType}=props;
  return (
    <>
      <section id="hero" className="hero d-flex align-items-center">


        <div className="container">
          <div className="row">
            <div className="col-lg-12 d-flex flex-column justify-content-center">
              <h1 data-aos="fade-up" className='homeh1'>{langType?'Budget-friendly pricing options are available':'Budsjettvennlige priser er tilgjengelige'}</h1>
              <p data-aos="fade-up" data-aos-delay="400" className='homeh2'>{langType?'Kindly contact to the following to know more and colloborate':'Vennligst ta kontakt med følgende for å få mer informasjon og samarbeide.'}</p>
              <div data-aos="fade-up" className='PricingContactColur'>
              <strong>{langType?"Phone":"Telefon"}:</strong> +1 5589 55488 55<br />
        <strong>{langType?"Email":"E-post"}:</strong> legalMatch@google.com<br />
              </div>
            </div>

          </div>
        </div>
        <p>
       
      
      </p>
      </section>
  


    </>
  )
}

export default Pricing