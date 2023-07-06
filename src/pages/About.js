import React from 'react'
import about1 from "../assets/img/abResearch.jpg";
import about2 from "../assets/img/abAI.jpg"
import about3 from "../assets/img/abProfes.jpg"
import AboutImage from "../assets/img/aboutFront.jpg"
function About(props) {
  const {langType,setLangType}=props;
  return (
    <>

      <section id="hero" className="hero d-flex align-items-center">


        <div className="container">
          <div className="row">
            <div className="col-lg-6 d-flex flex-column justify-content-center">
              <h1 data-aos="fade-up" className='homeh1'>{langType? 'Pioneers of advancing legal intelligence.':'Pionerer innen avansert juridisk intelligens.'}</h1>
              <p data-aos="fade-up" data-aos-delay="400" className='homeh2'>{langType? 'We’re on a mission to empower legal teams with artificial intelligence.':'Vi er på en misjon for å styrke juridiske team med kunstig intelligens.'} </p>
              <div data-aos="fade-up" data-aos-delay="600">

              </div>
            </div>
            <div className="col-lg-6 hero-img" data-aos="zoom-out" data-aos-delay="200">
              <img src={AboutImage} className="img-fluid" alt="" />
            </div>
          </div>
        </div>

      </section>
      <section id="service" className="services pt-0">
        <div className="container" data-aos="fade-up">

          <div className="section-header">
            <span>{langType? 'About Us':'Om oss'}</span>
            <h2>{langType? 'About Us':'Om oss'}</h2>

          </div>

          <div className="row gy-4">

            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div className="card">
                <div className="card-img">
                  <img src={about1} alt="" className="img-fluid" />
                </div>
                <h3><span className="stretched-link">{langType? 'Simplifying Legal Research':'Forenkling av juridisk forskning'}</span></h3>
                <p>{langType? 'LegalMatch is dedicated to simplifying the legal research process for legal professionals. We understand the challenges they face in finding accurate and relevant legal information efficiently.':'LegalMatch er dedikert til å forenkle juridisk rettskilde for alle som arbeider med juss. Vi forstår utfordringene de står overfor med å finne nøyaktig og relevant juridisk informasjon effektivt.'}</p>
              </div>
            </div>
            {/* <!-- End Card Item --> */}


            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
              <div className="card">
                <div className="card-img">
                  <img src={about2} alt="" className="img-fluid" />
                </div>
                <h3><span className="stretched-link">{langType? 'AI-Powered Innovation':'AI-drevet innovasjon'}</span></h3>
                <p> {langType? "Our cutting-edge platform harnesses the power of advanced AI technology to provide comprehensive legal information at professionals' fingertips. We've assembled a team of legal and technology experts who share a vision fortransforming the legal industry.":'Vår avanserte plattform utnytter kraften til avansert AI-teknologi for å tilby omfattende juridisk informasjon. Vi har samlet et team av jusskyndige og teknologi-eksperter som deler en visjon om å skape morgendagens løsninger for jurister.'}
                </p>
              </div>
            </div>
            {/* <!-- End Card Item --> */}


            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
              <div className="card">
                <div className="card-img">
                  <img src={about3} alt="" className="img-fluid" />
                </div>
                <h3><span className="stretched-link">{langType? 'Empowering Legal Professionals':'Styrking av juridiske fagfolk'}</span></h3>
                <p>{langType? 'At LegalMatch, we empower legal professionals to excel in their roles. Through our user-friendly platform and intuitive AI capabilities, we enable professionals to make well-informed decisions and deliver exceptional outcomes for their clients.':'I LegalMatch gir vi juridiske fagfolk verktøyene de trenger for å utmerke seg i sine roller. Gjennom vår brukervennlige plattform og intuitive AI-funksjoner muliggjør vi at fagfolk kan ta velinformerte beslutninger og levere enestående resultater for sine klienter.'}</p>
              </div>
            </div>
            {/* <!-- End Card Item --> */}








          </div>

        </div>
      </section>

      <section id="faq" className="faq">
        <div className="container" data-aos="fade-up">

          <div className="section-header">
            <span>{langType? 'Frequently Asked Questions':'OFTE STILTE SPØRSMÅL'}</span>
            <h2>{langType? 'Frequently Asked Questions':'OFTE STILTE SPØRSMÅL'}</h2>

          </div>

          <div className="row justify-content-center" data-aos="fade-up" data-aos-delay="200">
            <div className="col-lg-10">

              <div className="accordion accordion-flush" id="faqlist">

                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-1">
                      <i className="bi bi-question-circle question-icon"></i>
                      {langType? ' How does LegalMatch work?':'Hvordan fungerer LegalMatch?'}
                    </button>
                  </h3>
                  <div id="faq-content-1" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                    <div className="accordion-body">
                      {langType? ' LegalMatch utilizes advanced AI technology to analyze case details and generate a tailored list of applicable laws. Users can search, access summaries of Supreme Court judgments, and find relevant legal information quickly and efficiently.':'LegalMatch bruker avansert AI-teknologi for å analysere detaljer i en sak og generere en skreddersydd liste over relevante lover. Brukere kan søke, få tilgang til sammendrag av ulike rettskilder og finne relevant juridisk informasjon raskt og effektivt.'}

                    </div>
                  </div>
                </div>
                {/* <!-- # Faq item--> */}

                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-2">
                      <i className="bi bi-question-circle question-icon"></i>
                      {langType? '  Who can benefit from using LegalMatch?':'Hvem kan dra nytte av å bruke LegalMatch?'}
                    </button>
                  </h3>
                  <div id="faq-content-2" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                    <div className="accordion-body">
                      {langType? 'LegalMatch is designed to benefit lawyers, legal professionals, researchers, individuals dealing with legal issues, and anyone seeking comprehensive legal information and access to relevant laws and court judgments.':'LegalMatch er nyttig for advokater, jurister, forskere, enkeltpersoner som håndterer juridiske spørsmål og alle som søker omfattende juridisk informasjon og tilgang til relevante lover og domstolsavgjørelser'}

                    </div>
                  </div>
                </div>
                {/* <!-- # Faq item--> */}

                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-3">
                      <i className="bi bi-question-circle question-icon"></i>
                    {langType?'  Is LegalMatch suitable for both lawyers and individuals?':'Er LegalMatch egnet for både advokater og enkeltpersoner?'}
                    </button>
                  </h3>
                  <div id="faq-content-3" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                    <div className="accordion-body">
                    {langType?'  Yes, LegalMatch caters to both lawyers and individuals. It provides a user-friendly platform for legal professionals to enhance their research capabilities and assists individuals in understanding the legal landscape relevant to their cases.':'Ja, LegalMatch er tilpasset både advokater og forbrukermarkedet. Det tilbyr en brukervennlig plattform for å forbedre forenkle rettskilde søk for juristert og hjelper enkeltpersoner med å forstå det juridiske landskapet knyttet til deres saker.'}

                    </div>
                  </div>
                </div>
                {/* <!-- # Faq item--> */}

                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-4">
                      <i className="bi bi-question-circle question-icon"></i>
                    {langType?'  What types of legal information are available on LegalMatch?':'Hvilke typer juridisk informasjon er tilgjengelig på LegalMatch?'}

                    </button>
                  </h3>
                  <div id="faq-content-4" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                    <div className="accordion-body">
                      <i className="bi bi-question-circle question-icon"></i>
                    {langType?'  LegalMatch provides access to a wide range of legal information, including federal and state laws, regulations, statutes, and relevant court judgments. It covers various practice areas and legal topics.':'LegalMatch gir tilgang til et bredt spekter av juridisk informasjon, inkludert norsk og internasjonal lovgivning, forskrifter, reguleringer og relevante domstolsavgjørelser. Det dekker ulike rettsområder.'}

                    </div>
                  </div>
                </div>
                {/* <!-- # Faq item--> */}

                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-5">
                      <i className="bi bi-question-circle question-icon"></i>
                  {langType?'    Can I search for specific laws or regulations on LegalMatch?':' Kan jeg søke etter spesifikke lover eller forskrifter på LegalMatch?'}
                    </button>
                  </h3>
                  <div id="faq-content-5" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                    <div className="accordion-body">
                     {langType?' Yes, you can search for specific laws or regulations on LegalMatch. Our platform offers robust search functionality, allowing you to find the desired legal information based on keywords, practice areas, or other relevant criteria.':'Ja, du kan søke etter spesifikke lover eller forskrifter på LegalMatch. Plattformen vår har robust søkefunksjonalitet som lar deg finne ønsket juridisk informasjon basert på nøkkelord, rettsområder eller andre relevante kriterier.'}
                    </div>
                  </div>
                </div>
                {/* <!-- # Faq item--> */}

                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-6">
                      <i className="bi bi-question-circle question-icon"></i>
                     {langType?' How often is the legal information on LegalMatch updated?':'Hvor ofte oppdateres den juridiske informasjonen på LegalMatch?'}

                    </button>
                  </h3>
                  <div id="faq-content-6" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                    <div className="accordion-body">
                    {langType?'  We strive to maintain up-to-date legal information on LegalMatch. Our database is regularly updated to ensure accuracy and relevance. We monitor changes in laws and regulations to provide the latest information to our users.':'Vi tilstreber å opprettholde oppdatert juridisk informasjon på LegalMatch. Vår database oppdateres jevnlig for å sikre nøyaktighet og relevans. Vi følger med på endringer i lover og forskrifter for å gi den nyeste informasjonen til brukerne våre.'}

                    </div>
                  </div>
                </div>
                {/* <!-- # Faq item--> */}

                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-7">
                      <i className="bi bi-question-circle question-icon"></i>
                     {langType?' Can I access summaries of Supreme Court judgments on LegalMatch?':'Kan jeg få tilgang til sammendrag av rettsavgjørelser på LegalMatch?'}

                    </button>
                  </h3>
                  <div id="faq-content-7" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                    <div className="accordion-body">
                     {langType?" Yes, LegalMatch provides summaries of relevant Supreme Court judgments. These summaries highlight key points and precedents, helping you understand the court's decisions and their implications for your research or case analysis.":'a, LegalMatch gir sammendrag av relevante rettsavgjørelser. Disse sammendragene fremhever nøkkelelementer og rettsprinsipper, noe som hjelper deg med å forstå domstolens avgjørelser og relevansen for forskningen eller saksgjennomgangen din.'}

                    </div>
                  </div>
                </div>
                {/* <!-- # Faq item--> */}

                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-8">
                      <i className="bi bi-question-circle question-icon"></i>
                      {langType?'Is LegalMatch compatible with mobile devices and tablets?':'Er LegalMatch kompatibel med mobile enheter og nettbrett?'}
                    </button>
                  </h3>
                  <div id="faq-content-8" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                    <div className="accordion-body">
                     {langType?' Yes, LegalMatch is designed to be responsive and compatible with various devices, including mobile phones and tablets. You can access the platform and perform legal research on the go.':'Ja, LegalMatch er designet for å være responsiv og kompatibel med ulike enheter, inkludert mobiltelefoner og nettbrett. Du kan få tilgang til plattformen og utføre rettskildesøk mens du er på farten.'}

                    </div>
                  </div>
                </div>
                {/* <!-- # Faq item--> */}

                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-9">
                      <i className="bi bi-question-circle question-icon"></i>
                     {langType?' How secure is the information I provide on LegalMatch?':'Hvor sikker er informasjonen jeg gir på LegalMatch?'}

                    </button>
                  </h3>
                  <div id="faq-content-9" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                    <div className="accordion-body">
                     {langType?' We prioritize data security and confidentiality. LegalMatch implements robust security measures to protect user information. We employ encryption, secure protocols, and industry-standard practices to safeguard your data':'Vi prioriterer datasikkerhet og konfidensialitet. LegalMatch implementerer robuste sikkerhetstiltak for å beskytte brukerinformasjonen. Vi bruker kryptering, sikre protokoller og bransjestandard praksis for å sikre dine data. '}
                    </div>
                  </div>
                </div>
                {/* <!-- # Faq item--> */}

                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-10">
                      <i className="bi bi-question-circle question-icon"></i>
                    {langType?'  Is there a free trial available to test the features of LegalMatch?':'Finnes det en gratis prøveperiode for å teste funksjonene til LegalMatch?'}

                    </button>
                  </h3>
                  <div id="faq-content-10" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                    <div className="accordion-body">
                     {langType?' Yes, we offer a free trial period for users to experience the features and functionality of LegalMatch. During the trial, you can explore the platform and its capabilities before deciding to subscribe to a paid plan':'Ja, vi tilbyr en gratis prøveperiode der brukere kan utforske funksjonene og mulighetene til LegalMatch. I løpet av prøveperioden kan du teste plattformen og dens funksjoner før du bestemmer deg for å abonnere på en betalt plan.'}
                    </div>
                  </div>
                </div>
                {/* <!-- # Faq item--> */}

                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-11">
                      <i className="bi bi-question-circle question-icon"></i>
                     {langType?' How can I contact customer support for assistance with LegalMatch?':' Hvordan kan jeg kontakte kundestøtte for hjelp med LegalMatch?'}
                    </button>
                  </h3>
                  <div id="faq-content-11" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                    <div className="accordion-body">
                     {langType?' We provide dedicated customer support to assist you with any inquiries or issues. You can  reach our support team through email, phone, or by submitting a contact form on our website. We strive to provide prompt and helpful assistance.':'Vi tilbyr dedikert kundestøtte for å hjelpe deg med eventuelle spørsmål eller problemer. Du kan kontakte vårt kundestøtteteam via e-post, telefon eller ved å sende inn en kontaktskjema på vår nettside. Vi streber etter å gi rask og nyttig hjelp.'}
                    </div>
                  </div>
                </div>
                {/* <!-- # Faq item--> */}



                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-12">
                      <i className="bi bi-question-circle question-icon"></i>
                     {langType?'Can I share legal information from LegalMatch with my clients or colleagues?':'Kan jeg dele juridisk informasjon fra LegalMatch med mine klienter eller kolleger?'}

                    </button>
                  </h3>
                  <div id="faq-content-12" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                    <div className="accordion-body">
                     {langType?' Yes, you can share legal information obtained from LegalMatch with your clients or colleagues. Our platform allows you to export or share relevant laws, summaries of judgments, or other research findings to collaborate and facilitate discussions.':'Ja, du kan dele juridisk informasjon som er oppnådd fra LegalMatch med dine klienter eller kolleger. Vår plattform lar deg eksportere eller dele relevante lover, sammendrag av avgjørelser eller annen forskningsinformasjon for å samarbeide og legge til rette for diskusjoner.'}
                    </div>
                  </div>
                </div>
                {/* <!-- # Faq item--> */}
              </div>

            </div>
          </div>

        </div>
      </section>
    </>
  )
}

export default About