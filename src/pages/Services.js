import React , {useState} from 'react'
import s1 from "../assets/img/s1.jpg";
import s2 from "../assets/img/s2.jpg";
import s3 from "../assets/img/s3.jpg";
import s4 from "../assets/img/s4.png";
import s5 from "../assets/img/s5.png";

import s6 from "../assets/img/s6.jpg";
import s7 from "../assets/img/s7.jpg";
function Services(props) {
  const {langType,setLangType}=props;
  const [serv,setserv]=useState(1);
  const servClicl=(x)=>{
    setserv(x);
  }
  return (
    <>

      <section id="service" className="services pt-0">
        <div className="container" data-aos="fade-up">

          <div className="section-header">
            <span>{langType? "Services":'Tjenester'}</span>
            <h2>{langType? "Services":'Tjenester'}</h2>

          </div>


        </div>
      </section>
      <section id="blog" className="blog">
        <div className="container" data-aos="fade-up">

          <div className="row">
          <div className="col-lg-4">

<div className="sidebar">




  <div className="sidebar-item categories">
  <div className={serv===1?'sracfsf scra':"scra"} onClick={() =>servClicl(1)}><span className="stretched-link serveach">{langType? 'Law Finder':'Lovsøk:'}</span></div>
  <div className={serv===2?'sracfsf scra':"scra"} onClick={() =>servClicl(2)}><span className="stretched-link serveach">Segmentor</span></div>
  <div className={serv===3?'sracfsf scra':"scra"} onClick={() =>servClicl(3)}><span className="stretched-link serveach">{langType? 'Case Explorer':'Saksoversikt'}</span></div>
  <div className={serv===4?'sracfsf scra':"scra"} onClick={() =>servClicl(4)}><span className="stretched-link serveach"> {langType? "QnA":'Spørsmål og svar (Q&A)'}</span></div>
  <div className={serv===5?'sracfsf scra':"scra"} onClick={() =>servClicl(5)}><span className="stretched-link serveach">Chatbot</span></div>
  <div className={serv===6?'sracfsf scra':"scra"} onClick={() =>servClicl(6)}><span className="stretched-link serveach">{langType? "Case Prep":'Saksforberedelse'}</span></div>
  <div className={serv===7?'sracfsf scra':"scra"} onClick={() => servClicl(7)}><span className="stretched-link serveach">{langType? "Judgment Analyzer":'Domanalyse'}</span></div>

  </div>
  {/* <!-- End sidebar categories--> */}





</div>
{/* <!-- End sidebar --> */}

</div>
            <div className="col-lg-8 entries">

              {serv===1&&(<article className="entry">

                <div className="entry-img">
                  <img src={s1} alt="" className="img-fluid" />
                </div>

                {/* <h2 className="entry-title">
                  <a href="blog-single.html">Dolorum optio tempore voluptas dignissimos cumque fuga qui quibusdam quia</a>
                </h2> */}

                <h3><span className="stretched-link">{langType? 'Law Finder':'Lovsøk:'}</span></h3>


                <div className="entry-content">
                  {langType&&(<p>
                    ● Powerful search functionality to quickly locate relevant laws, regulations, and
                    legal precedents.<br />
                    ● Advanced search filters and criteria for precise results.<br />
                    ● User-friendly interface for easy navigation and exploration of search results
                  </p>)}
                  {!langType&&(<p>
                    ● Kraftig søkefunksjonalitet for å raskt finne relevante lover, forskrifter og juridiske
                    presedenser.<br />
                    ● Avanserte søkefiltre og kriterier for presise resultater.<br />
                    ● Brukervennlig grensesnitt for enkel navigering og utforskning av søkeresultater.<br />
                  </p>)}
                </div>

              </article>)}
              {/* <!-- End blog entry --> */}

              {serv===2&&(<article className="entry">

                <div className="entry-img">
                  <img src={s2} alt="" className="img-fluid" />
                </div>

                {/* <h2 className="entry-title">
  <a href="blog-single.html">Dolorum optio tempore voluptas dignissimos cumque fuga qui quibusdam quia</a>
</h2> */}

                <h3><span className="stretched-link">Segmentor</span></h3>


                <div className="entry-content">
                  {langType&&(<p> ● Organize and categorize legal documents or texts into relevant sections or
                    segments.<br />
                    ● Efficient information retrieval and analysis through segmented content.<br />
                    ● Customizable segmenting options to fit specific needs.<br />

                  </p>)}
                  {!langType&&(<p>
                    ● Organiser og kategoriserer juridiske dokumenter eller tekster i kortfattede og relevante
                    avsnitt.<br />
                    ● Effektiv informasjonshenting og analyse gjennom segmentert innhold.<br />
                    ● Tilpassbare segmenteringsalternativer for å tilpasse spesifikke behov.<br />

                  </p>)}
                </div>

              </article>)}
              {/* <!-- End blog entry --> */}



              {serv===3&&(<article className="entry">

                <div className="entry-img">
                  <img src={s3} alt="" className="img-fluid" />
                </div>

                <h3><span className="stretched-link">{langType? 'Case Explorer':'Saksoversikt'}</span></h3>


                <div className="entry-content">
                  {langType&&(<p>
                    ● Comprehensive tool for exploring and analyzing legal cases.<br />
                    ● Access to detailed case information, judgments, key arguments, and related
                    resources.<br />
                    ● Advanced search capabilities within the case database for targeted research.<br />

                  </p>)}
                  {!langType&&(<p>
                    ● Omfattende verktøy for å utforske og analysere juridiske saker.<br />
                    ● Tilgang til detaljert sakinformasjon, dommer, sentrale argumenter og relaterte ressurser.<br />
                    ● Avanserte søkemuligheter innenfor saksdatabasen for målrettet forskning.<br />


                  </p>)}
                </div>

              </article>)}
              {/* <!-- End blog entry --> */}



              {serv===4&&(<article className="entry">

                <div className="entry-img">
                  <img src={s4} alt="" className="img-fluid" />
                </div>

                <h3><span className="stretched-link"> {langType? "QnA":'Spørsmål og svar (Q&A)'}</span></h3>


                <div className="entry-content">
                  {langType&&(<p>
                    ● Intelligent question-and-answer system for precise legal information retrieval.<br />
                    ● Accurate and relevant responses to legal queries.<br />
                    ● Natural language processing capabilities for user-friendly interactions.
                    <br />

                  </p>)}
                  {!langType&&(<p>
                    ● Intelligent spørsmål-og-svar-system for presis innhenting av juridisk informasjon.<br />
                    ● Nøyaktige og relevante svar på juridiske spørsmål.<br />
                    ● Naturlig språkbehandling for brukervennlige interaksjoner<br />


                  </p>)}
                </div>

              </article>)}
              {/* <!-- End blog entry --> */}


              {serv===5&&(<article className="entry">

                <div className="entry-img">
                  <img src={s5} alt="" className="img-fluid" />
                </div>

                <h3><span className="stretched-link">Chatbot</span></h3>


                <div className="entry-content">
                  {langType&&(<p>
                    ● AI-powered virtual assistant for automated support and guidance.<br />
                    ● Answer frequently asked questions and provide assistance during the legal
                    research process.<br />
                    ● Interactive and conversational interface for a personalized user experience<br />
                  </p>)}

                  {!langType&&(<p>
                    ● AI-drevet virtuell assistent for automatisert støtte og veiledning.<br />
                    ● Besvar hyppig stilte spørsmål og gi hjelp under juridisk forskning.<br />
                    ● Interaktivt og samtalebasert grensesnitt for en personlig brukeropplevelse.<br />



                  </p>)}
                </div>

              </article>)}
              {/* <!-- End blog entry --> */}


              {serv===6&&(<article className="entry">

                <div className="entry-img">
                  <img src={s6} alt="" className="img-fluid" />
                </div>

                <h3><span className="stretched-link">{langType? "Case Prep":'Saksforberedelse'}</span></h3>


                <div className="entry-content">
                  {langType&&(<p>
                    ● Templates, checklists, and guidelines for various stages of the legal process.<br />
                    ● Streamline case preparation and improve efficiency.<br />
                    ● Tailored resources based on specific legal requirements.<br />

                  </p>)}

                  {!langType&&(<p>
                    ● Mal, sjekklister og retningslinjer for ulike stadier av den juridiske prosessen.<br />
                    ● Strømlinjeforme saksforberedelsen og øke effektiviteten.<br />
                    ● Tilpassede ressurser basert på spesifikke juridiske krav.<br />




                  </p>)}
                </div>

              </article>)}
              {/* <!-- End blog entry --> */}



              {serv===7&&(<article className="entry">

                <div className="entry-img">
                  <img src={s7} alt="" className="img-fluid" />
                </div>

                <h3><span className="stretched-link">{langType? "Judgment Analyzer":'Domanalyse'}</span></h3>


                <div className="entry-content">
                  {langType&&(<p>
                    ● Summarizes and analyzes Supreme Court judgments.<br />
                    ● Highlights key points, legal principles, and implications for case analysis.<br />
                    ● Provides valuable insights for informed decision-making and legal research.<br />


                  </p>)}
                  {!langType&&(<p>
                    ● Oppsummerer og analyserer rettsavgjørelser.<br />
                    ● Fremhever nøkkelelementer, juridiske prinsipper og implikasjoner for saksanalyse.<br />
                    ● Gir verdifulle innsikter for informerte beslutninger og juridisk forskning.<br />




                  </p>)}
                </div>

              </article>)}
              {/* <!-- End blog entry --> */}

            </div>
            {/* <!-- End blog entries list --> */}

         
            {/* <!-- End blog sidebar --> */}

          </div>

        </div>
      </section>
    </>
  )
}

export default Services