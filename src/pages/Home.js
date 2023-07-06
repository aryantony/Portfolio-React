import React from 'react'
import HomeImage from "../assets/img/pexels-marek-levak-2265482.jpg"
import serv1 from "../assets/img/serv_acuracy.jpg"
import serv2 from "../assets/img/serv_eth.jpg";
import serv3 from "../assets/img/serv_trans.jpg"
import w1 from "../assets/img/w1.jpg"
import w2 from "../assets/img/w2.jpg"
import w3 from "../assets/img/w3.jpg"
import { Link } from 'react-router-dom';
function Home(props) {
  const {langType,setLangType}=props;
  return (
    <>
      <section id="hero" className="hero d-flex align-items-center">

        <div className="container">
          <div className="row">
            <div className="col-lg-6 d-flex flex-column justify-content-center">
              <h1 data-aos="fade-up" className='homeh1'>{langType? `Revolutionizing Legal Research with AI Technology`:`Revolutionering av juridisk forskning med AI-teknologi)`} </h1>
              <p data-aos="fade-up" data-aos-delay="400" className='homeh2'>{langType? `Experience the power of LegalMatch, the AI powered legal research platform that revolutionizes the way professional acess acurate and relevant legal information efficiently.`:`Opplev kraften til LegalMatch, den AI-drevne juridiske forskningsplattformen som revolusjonerer måten fagfolk får tilgang til nøyaktig og relevant juridisk informasjon på en effektiv måte.`} </p>
              <div data-aos="fade-up" data-aos-delay="600">
                <div className="text-center text-lg-start serviceHover">
                  <Link to="/services" className=" servicesButtonHomePage btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center">
                    <span>{langType? 'Services':'Tjenester'}</span>
                    <i className="bi bi-arrow-right "></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 hero-img" data-aos="zoom-out" data-aos-delay="200">
              <img src={HomeImage} className="img-fluid" alt="" />
            </div>
          </div>
        </div>

      </section>
      {/* <section id="service" className="services pt-0 secondsectionHome">
<p data-aos="fade-up" data-aos-delay="400" className='homeh2'>Welcome to LegalMatch, the AI-powered legal research tool that simplifies legal
research for lawyers and law enforcement professionals. Discover how our cutting-edge
technology empowers you to find applicable laws and access summaries of relevant
Supreme Court judgments with ease and efficiency </p>
    
</section> */}
      <section id="service" className="services pt-0">
        <div className="container" data-aos="fade-up">

          <div className="section-header">
            <span>{langType? 'What We Value':'Det vi verdsetter'}</span>
            <h2>{langType? 'What We Value':'Det vi verdsetter'}</h2>
            <p className='ValueinHomePage'>{langType? "All our actions are rooted in our core values":'Alle våre handlinger har sine røtter i våre kjerneverdier'}</p>
          </div>

          <div className="row gy-4">

            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div className="card">
                <div className="card-img">
                  <img src={serv1} alt="" className="img-fluid" />
                </div>
                <h3><span className="stretched-link">{langType? 'Accuracy and Reliability':'Nøyaktighet og pålitelighet'}</span></h3>
                <p>{langType? 'We are committed to providing accurate and reliable legal information. Our rigorous processes, data sources, and quality control measures ensure that users can trust the information they find on our platform.':'Vi tilbyr nøyaktig og pålitelig oppsummering av ulike rettskilder. Våre rutiner fordatakilder og kvalitetskontroll sikrer at brukerne kan ha tillit til informasjonen de finnerpå vår plattform.'}</p>
              </div>
            </div>
            {/* <!-- End Card Item --> */}


            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
              <div className="card">
                <div className="card-img">
                  <img src={serv2} alt="" className="img-fluid" />
                </div>
                <h3><span className="stretched-link">{langType?'Ethical and Transparent':'Effektivitet og tidsbesparelse'}</span></h3>
                <p>{langType?' We uphold ethical standards and transparency in our products and services. We ensure that our data sources, algorithms, and processes are transparent, and we handle user data with utmost care and in compliance with privacy and security regulations.':'Våre produkter er designet for å effektivisere rettskildesøk, slik at brukerne raskt ogeffektivt kan finne den informasjonen de trenger, og dermed spare verdifull tid oginnsats.'}</p>
              </div>
            </div>
            {/* <!-- End Card Item --> */}


            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
              <div className="card">
                <div className="card-img">
                  <img src={serv3} alt="" className="img-fluid" />
                </div>
                <h3><span className="stretched-link">{langType?'Efficiency and Time-Saving':'Etiske og gjennomsiktige'}</span></h3>
                <p>{langType?'We understand the importance of time for legal professionals and individuals dealing with legal matters. Our products are designed to streamline the legal research process, enabling users to find the information they need quickly and efficiently, saving them valuable time and effort.':'Vi er dedikerte til å ivareta etiske standarder og åpenhet i våre produkter og tjenester. Visørger for at våre datakilder, algoritmer og prosesser er transparente, og vi behandler brukerdata med største forsiktighet og i samsvar med personvern- og sikkerhetsregler.'}</p>
              </div>
            </div>
            {/* <!-- End Card Item --> */}








          </div>

        </div>
      </section>



      <section id="service" className="services pt-0">
        <div className="container" data-aos="fade-up">

          <div className="section-header">
            <span>{langType?'How It Works':'Hvordan det fungerer'}</span>
            <h2>{langType?'How It Works':'Hvordan det fungerer'}</h2>
            <p className='ValueinHomePage'>{langType?'Legal Match helps professionals to solve the legal cases easily.':'Legal Match hjelper deg med å løse ulike saker enkelt.'}<br />{langType?'Our secure, user-friendly platform provides highly accurate applicable laws for all of your legal issues.':'Vår enkle og brukervennlige plattform finner relevante lover for alle dine juridiske spørsmål.'}

            </p>
          </div>

          <div className="row gy-4">

            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div className="card">
                <div className="card-img">
                  <img src={w1} alt="" className="img-fluid" />
                </div>
                <h3><span className="stretched-link">{langType?'Advanced Analysis':'Avansert analyse'}</span></h3>
                <p>{langType?'LegalMatch utilizes state-of-the-art language models and natural language processing to analyze the details of your case, extracting key information and understanding its nuances.':'LegalMatch bruker avanserte språkmodeller og naturlig språkbehandling for åanalysere detaljene i saken din, trekke ut nøkkelinformasjon og forstå de ulikenyansene' } </p>
              </div>
            </div>
            {/* <!-- End Card Item --> */}


            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
              <div className="card">
                <div className="card-img">
                  <img src={w2} alt="" className="img-fluid" />
                </div>
                <h3><span className="stretched-link">{langType?'Tailored Results':'Tilpassede resultater:'}</span></h3>
                <p> {langType?'Based on the analysis, LegalMatch generates a personalized list of applicable laws and regulations specific to your case, ensuring you have access to the most relevant legal information.':'Basert på analysen genererer LegalMatch en personlig liste over relevante loverog forskrifter som er relevante for saken din.'}
                </p>
              </div>
            </div>
            {/* <!-- End Card Item --> */}


            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
              <div className="card">
                <div className="card-img">
                  <img src={w3} alt="" className="img-fluid" />
                </div>
                <h3><span className="stretched-link">{langType?'Time-Saving Efficiency':'Tidsbesparende effektivitet:'}</span></h3>
                <p>{langType?'By automating the research process, LegalMatch significantly reduces the time spent on manual research, providing quick and efficient access to the legal information you need, including summaries of relevant Supreme Court judgments':'Ved å automatisere rettskildesøk sparer LegalMatch tid og gir rask og effektiv tilgang til den juridiske informasjonen du trenger, inkludert sammendrag av relevante rettskilder.'}.</p>
              </div>
            </div>
            {/* <!-- End Card Item --> */}








          </div>

        </div>
      </section>
    </>
  )
}

export default Home