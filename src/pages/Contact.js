import React from 'react'

function Contact(props) {
  const {langType,setLangType}=props;
  return (
    <>
      <section id="service" className="services pt-0">
        <div className="container" data-aos="fade-up">

          <div className="section-header">
            <span>{langType?"Contact Us":"Kontakt oss"}</span>
            <h2>{langType?"Contact Us":"Kontakt oss"}</h2>

          </div>
          </div>
          </section>
      <section id="contact" className="contact">
        <div className="container" data-aos="fade-up">

          <div className='contactFirm'>
            <iframe className='mapcontact' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameborder="0" allowfullscreen></iframe>
            <div className="row gy-12 infocontact">

              <div className="col-lg-12">

                <div className="info-item d-flex">
                  <i className="bi bi-geo-alt flex-shrink-0"></i>
                  <div>
                    <h4>{langType?"Location":"Plassering"}:</h4>
                    <p>A-10 Adam Street
Andhere East, NY 535022
Banglore</p>
                  </div>
                </div>
                {/* <!-- End Info Item --> */}

                <div className="info-item d-flex">
                  <i className="bi bi-envelope flex-shrink-0"></i>
                  <div>
                    <h4>{langType?"Email":"E-post"}:</h4>
                    <p>LegalMatch@gmail.com</p>
                  </div>
                </div>
                {/* <!-- End Info Item --> */}

                <div className="info-item d-flex">
                  <i className="bi bi-phone flex-shrink-0"></i>
                  <div>
                    <h4>{langType?"Call":"Telefoner"}:</h4>
                    <p>+1 5589 55488 55</p>
                  </div>
                </div>
                {/* <!-- End Info Item --> */}

              </div>


            </div>
          </div>
          {/* <!-- End Google Maps --> */}




        </div>
      </section>
    </>
  )
}

export default Contact