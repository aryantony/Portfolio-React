import React from "react";
// import background from "/images/wood.jpg";
import "./About.css";
export default function About() {
  function facebook(e) {
    e.preventDefault();
    window.open("https://www.facebook.com/profile.php?id=100057814296670");
  }
  function twitter(e) {
    e.preventDefault();
    window.open("https://twitter.com/aryan3865?s=08");
  }
  function linkedin(e) {
    e.preventDefault();
    window.open("https://www.linkedin.com/in/aryan-kumar-88515121a");
  }
  function insta(e) {
    e.preventDefault();
    window.open("https://www.instagram.com/aryanroy.tony?r=nametag");
  }

  return (
    <>
      <div className="about_container">
        <div className="about_container1">
          <img src={process.env.PUBLIC_URL + "/images/about_page.jpg"} />
        </div>
        <div className="about_container2">
          <div className="introduction">
            <h3 className="first_heading_introduction">
              Let me introduce myself
            </h3>

            <p className="current_self_introduction1">
              <span id="span_current_self_introduction1">
                Well, Hello there!
              </span>
              I am a Junior Web Devloper.My skills primarily include Front-End
              Development. I am currently pursuing Integrated Dual Degree
              Studies in Industrial and System Engineering at IIT Kharagpur. I
              am, in the second year of my KGP period.
            </p>
            <p className="current_self_introduction2">
              I hereby declare that all the content on this website is my own
              work and I created this website by using the best of my knowledge
              in
              <span id="knowledge">HTML, CSS and JavaScript</span>
            </p>
          </div>
        </div>
      </div>
      <div className="skill">My Skills</div>
      {/* <div className="two_skill">
      <div className="techanical_skill">Techanical Skills</div>
      <div className="proffesional_skill">Professional Skills</div>
    </div> */}
      <seection className="my_skill">
        <div className="my_skill_section my_skill_section1">
          {/* <div className="techanical_skill">Techanical Skills</div> */}
          <div className="technology_my_skill_section1 HTML_skill">
            <div className="put_skill" id="print_T_skill">
              HTML
            </div>
            <div className="put_skill" id="persentage">
              60%
            </div>
            <div className="put_skill" id="line_of_persentage">
              <div className="colourless">
                <div className="color12345 colour1"></div>
              </div>
            </div>
          </div>
          <div className="technology_my_skill_section1">
            <div className="put_skill" id="print_T_skill">
              CSS
            </div>
            <div className="put_skill" id="persentage">
              58%
            </div>
            <div className="put_skill" id="line_of_persentage">
              <div className="colourless">
                <div className="color12345 colour2"></div>
              </div>
            </div>
          </div>
          <div className="technology_my_skill_section1">
            <div className="put_skill" id="print_T_skill">
              JavaScrip
            </div>
            <div className="put_skill" id="persentage">
              40%
            </div>
            <div className="put_skill" id="line_of_persentage">
              <div className="colourless">
                <div className="color12345 colour3"></div>
              </div>
            </div>
          </div>
          <div className="technology_my_skill_section1">
            <div className="put_skill" id="print_T_skill">
              C
            </div>
            <div className="put_skill" id="persentage">
              70%
            </div>
            <div className="put_skill" id="line_of_persentage">
              <div className="colourless">
                <div className="color12345 colour4"></div>
              </div>
            </div>
          </div>
          <div className="technology_my_skill_section1">
            <div className="put_skill" id="print_T_skill ">
              C++
            </div>
            <div className="put_skill" id="persentage">
              40%
            </div>
            <div className="put_skill" id="line_of_persentage">
              <div className="colourless">
                <div className="color12345 colour5"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="my_skill_section my_skill_section2">
          <div className="professional_my_skill_section2">
            <div className="communication x">Communication</div>
            <div className="persentage_communication">
              <div className="line">
                <div className="colour_line1"></div>
              </div>
              <div className="line_number">71%</div>
            </div>
          </div>

          <div className="professional_my_skill_section2">
            <div className="communication x">Team Work</div>
            <div className="persentage_communication">
              <div className="line">
                <div className="colour_line2"></div>
              </div>
              <div className="line_number">92%</div>
            </div>
          </div>
          <div className="professional_my_skill_section2">
            <div className="communication x reduce_size_of_project_Mang">
              Project Management
            </div>
            <div className="persentage_communication">
              <div className="line">
                <div className="colour_line3"></div>
              </div>
              <div className="line_number">85%</div>
            </div>
          </div>
          <div className="professional_my_skill_section2">
            <div className="communication x">Creativity</div>
            <div className="persentage_communication">
              <div className="line">
                <div className="colour_line4"></div>
              </div>
              <div className="line_number">65%</div>
            </div>
          </div>
        </div>
      </seection>

      <div className="skill_explanation">
        <div className="skill_explanation1">
          <div className="front_end">Front-End Development</div>
          <div className="about_front_end">
            Now, I'm a beginner in Front-End development. I started learning the
            basics of Front-End development, which included HTML, CSS, and
            JavaScript. I completed the basics of HTML, CSS, and JavaScript in
            <strong>a month</strong> and started working on this website as a
            project. While making this website, I was also learning some
            advanced versions of it and its features were exciting me a lot. To
            be honest, I completed this website for the first time in
            approximately
            <strong>20 hours</strong>. I know, There's yet a lot to learn, and I
            don't know how long it might take, but as long as I'm enjoying the
            process, it doesn't matter.
            <div id="gap_about_front_end">
              As I will progress on this, I will keep adding new features to
              this website from time to time and changes the decoration as well.
            </div>
          </div>
        </div>

        <div className="skill_explanation2">
          <div className="coding">Coding</div>
          <div className="about_coding">
            This is the one thing more in which I need to improve myself a lot.
            It started without any prior notice or warning and ended up becoming
            something I will try to spend time on. I did coding in the C
            language in the first year of KGP, because PDS(programming and data
            structure) was my core subject. I had a decent coding aptitude,
            that's why I got an EX grade in the PDS lab as well as theory.
            Currently, I'm not doing the coding. I don't know which field will
            be suitable for me. So, I want to explore myself in the other field
            as well. Aside from this, I wish to continue learning web
            Development.
          </div>
        </div>
      </div>

      <div className="education_title">My Education</div>
      <section className="education">
        <div id="row" className="first_row">
          <div className="education1">
            <div className="part-a thps_part-a">
              <img
                src={process.env.PUBLIC_URL + "/images/Thps_logo.jpg"}
                id="Thps_logo"
              />
              <div className="interval">
                <h2 className="thps">Tender Heart Public School</h2>
                <h3 id="six_ten">className-(5) to className-(8)</h3>
                <h5 className="school_address">Banmankhi, Purnea(BIHAR)</h5>
              </div>
            </div>
            <div className="part-b">
              <ul id="b1">
                <li>It was the most crucial place for me as a student.</li>
                <li>It help me to become more responsible adult.</li>
                <li>
                  It played a pivotal role in shaping my Educational. "Thanks to
                  all teachers."
                </li>
              </ul>
            </div>
          </div>

          <div className="education1">
            <div className="part-a ips_part-a">
              <img
                src={process.env.PUBLIC_URL + "/images/ips_logo.jpg"}
                id="ips_logo"
              />
              <div className="interval">
                <h2 className="thps">Indian Public School</h2>
                <h3 id="six_ten">className-(9) to className-(10)</h3>
                <h5 className="school_address">Gulabbagh, Purnea(BIHAR)</h5>
              </div>
            </div>
            <div className="part-b">
              <ul id="b1">
                <li>
                  Here, i have learned discipline and punctuality from my
                  teachers..
                </li>
                <li>
                  This one was of the main reasons why I loved my school as it
                  did not measure everyone on the same scale.
                </li>
                <li>Scored 95% in 10th CBSE Boards</li>
              </ul>
            </div>
          </div>
        </div>
        <div id="row" className="second_row">
          <div className="education1">
            <div className="part-a nps_part-a">
              <img
                src={process.env.PUBLIC_URL + "/images/nezamia_logo.jpg"}
                id="nezamia_logo"
              />
              <div className="interval">
                <h2 className="thps">Nezamia Public School</h2>
                <h3 id="six_ten">className-(11) to className-(12)</h3>
                <h5 className="school_address">Danapur, Patna(Bihar)</h5>
              </div>
            </div>
            <div className="part-b">
              <ul id="b1">
                <li>This period is the most memorable moment of my life.</li>
                <li>
                  It provided me with the essential mental support via caring
                  teachers and cool friends.
                </li>
                <li>Scored 85.4% in 12th CBSE Boards (PCM).</li>
              </ul>
            </div>
          </div>
          <div className="education1">
            <div className="part-a super_part-a">
              <img src={process.env.PUBLIC_URL + "/images/cap.jpg"} />
              <div className="interval">
                <h2 className="thps">Abhayanand Super 30</h2>
                <h3 id="six_ten">JEE Coaching</h3>
                <h5 className="school_address">Nala Road, Patna(Bihar)</h5>
              </div>
            </div>
            <div className="part-b">
              <ul id="b1">
                <li>It was my good fortune to be here.</li>
                <li>
                  I was a useless and diffident student whose skill was not good
                  enough to sit in JEE. but, let me tell you, the discretion
                  that they had given me was enough to cross the border of any
                  life.
                </li>
                <li>
                  Thanks to RP sir & Pankaj sir
                  <div className="indebted_forever">INDEBTED FOREVER...</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div id="row" className="third_row">
          <div className="education1">
            <div className="part-a PA_part-a">
              <img
                src={process.env.PUBLIC_URL + "/images/parth_logo.jpg"}
                id="parth_logo"
              />
              <div className="interval">
                <h2 className="thps">Parth Ashram</h2>
                <h3 id="six_ten">JEE Coaching</h3>
                <h5 className="school_address">Kankarbagh, Patna(Bihar)</h5>
              </div>
            </div>
            <div className="part-b">
              <ul id="b1">
                <li>I was in the Ranker Batch of the parth Ashram</li>
                <li>
                  I'll always be grateful to my director(Mr. Kumud Ranjan Sir),
                  physics faculty(Mr. RM Sir) and Math faculty(Mr. Sharma Sir).
                  <span className="indebted_forever">INDEBTED FOREVER...</span>
                </li>
                <li>
                  The memories I spent with my cool friends are memorable for a
                  lifetime.
                </li>
              </ul>
            </div>
          </div>
          <div className="education1">
            <div className="part-a kgp_part-a">
              <img
                src={process.env.PUBLIC_URL + "/images/kgp_logo.jpg"}
                id="kgp_logo"
              />
              <div className="interval">
                <h2 className="thps">
                  Indian Institute of Technology Kharagpur
                </h2>
                <h3 id="six_ten">Integrated Dual Degree</h3>
                <h5 className="school_address">
                  Kharagpur, Paschim Medinipur(West Bengal)
                </h5>
              </div>
            </div>
            <div className="part-b">
              <ul id="b1">
                <li>
                  In simple words, I'll say, I'm here today because of the Parth
                  Ashram and super 30.
                </li>
                <li>
                  In the first year of my KGP period, I scored a 9.41 GPA in
                  department change and an academic CGPA of 9.08
                </li>
                <li>Just waiting for the Campus to open.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <div className="formal_introduction">Formal Introduction</div>
      <div className="second_last_footer">
        <section className="formal_intro">
          <div id="intro-1" className="intro_line">
            Hi!
          </div>
          <div id="intro-2" className="intro_line">
            I, Aryan kumar, am a second-year undergraduate student at IIT
            Kharagpur.
          </div>
          <div id="intro-3" className="intro_line">
            I'm from purnia, Bihar.
          </div>
          <div id="intro-4" className="intro_line">
            I'm interested in a lot of stuff, like playing cricket, giving
            suggestions to needed people, web-Development and coding.
          </div>
          <div id="intro-5" className="intro_line">
            I'm responsible, well-organized, and efficient.
          </div>
          <div id="intro-6" className="intro_line">
            I always work hard in every field that I have taken up.
          </div>
          <div id="intro-7" className="intro_line">
            I always tend to do things in new, innovative ways.
          </div>
          <div id="intro-8" className="intro_line">
            The biggest achievement of my life is that I learned to be patient
            while working under pressure.
          </div>
          <div id="intro-9" className="intro_line">
            Overall, I'm a fun person.
          </div>
          <div id="intro-10" className="intro_line">
            This website is a self-consequence of my creativity and dynamism.
          </div>

          <div id="intro-11" className="intro_line">
            Thanks for visiting my website.
          </div>
          <div id="intro-12" className="intro_line">
            Wishing you the best ahead.
          </div>
          <div id="intro-13" className="intro_line">
            Aryan...
          </div>
        </section>
      </div>
      <footer className="footer-bottom_about">
        <div className="left_footer-bottom">
          Copyright &copy; 2021 www.Roy.com
          <br />
          All Right Reserved
        </div>
        <div className="right_footer-bottom">
          <div className="call">
            <span id="callme">Call </span>
            <div id="callimage">
              <a
                href="tel:7654613432"
                target="_blank"
                title="Follow Me on Call"
              >
                <img src={process.env.PUBLIC_URL + "/images/phone2.jpg"} />
              </a>
            </div>
          </div>
          <div className="mail">
            <span id="mailme"> Write</span>

            <div id="mailimage">
              <a
                href="mailto:aryanroy3865@gmai.com"
                target="_blank"
                title="Follow Me on Mail"
              >
                <img src={process.env.PUBLIC_URL + "/images/mail.jpg"} />
              </a>
            </div>
          </div>

          <div className="follow">
            <span id="followme"> Follow</span>
            <div className="social_media_fotter_bottom_about">
              {/* <a
          href="https://www.facebook.com/profile.php?id=100057814296670"
          target="_blank"
        > */}
              <img
                title="Follow Me on Facebook"
                alt="Follow Me on Facebook"
                src="https://static.wixstatic.com/media/0fdef751204647a3bbd7eaa2827ed4f9.png/v1/fill/w_31,h_31,al_c,q_85,usm_0.66_1.00_0.01/0fdef751204647a3bbd7eaa2827ed4f9.webp"
                className="Social_media_img_footer_bottom_about "
                onClick={facebook}
              />
              {/*</a> */}

              {/*<a href="https://twitter.com/aryan3865?s=08" target="_blank"> */}
              <img
                title="Follow Me on Twitter"
                alt="Follow Me on Twitter"
                src="https://static.wixstatic.com/media/c7d035ba85f6486680c2facedecdcf4d.png/v1/fill/w_31,h_31,al_c,q_85,usm_0.66_1.00_0.01/c7d035ba85f6486680c2facedecdcf4d.webp "
                className="Social_media_img_footer_bottom_about"
                onClick={twitter}
              />
              {/*</a> */}
              {/*
        <a
          href="https://www.linkedin.com/in/aryan-kumar-88515121a"
          target="_blank"
        > */}
              <img
                title="Follow Me on LinkedIn"
                alt="Follow Me on LinkedIn"
                src="https://static.wixstatic.com/media/6ea5b4a88f0b4f91945b40499aa0af00.png/v1/fill/w_31,h_31,al_c,q_85,usm_0.66_1.00_0.01/6ea5b4a88f0b4f91945b40499aa0af00.webp"
                className="Social_media_img_footer_bottom_about "
                onClick={linkedin}
              />
              {/*</a> */}

              {/*<a
          href="https://www.instagram.com/aryanroy.tony?r=nametag"
          target="_blank"
        > */}
              <img
                title="Follow Me on Instagram"
                alt="Follow Me on Instagram"
                src="https://static.wixstatic.com/media/01c3aff52f2a4dffa526d7a9843d46ea.png/v1/fill/w_31,h_31,al_c,q_85,usm_0.66_1.00_0.01/01c3aff52f2a4dffa526d7a9843d46ea.webp"
                className="Social_media_img_footer_bottom_about "
                onClick={insta}
              />
              {/*</a> */}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
