import React from "react";
import { Link } from "react-router-dom";
import "./Project.css";
export default function Project() {
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
  // function project1(e) {
  //   e.preventDefault();
  //   window.open("index.html");
  // }
  function project2(e) {
    e.preventDefault();
    window.open("https://roy-com.github.io/ISE-NOTES/");
  }

  return (
    <>
      <section class="projects_detail">
        <div class="project">
          <h2 class="project_heading">PROJECT 1</h2>
          <p class="proj_intro">
            This is my first self-created project. Basically, you can learn
            everything there is to know about me through this endeavour. The
            goal of this endeavour was to learn more about myself. To create
            this, I studied the fundamentals of HTML, CSS, and JavaScript
            attributes, as well as how websites work.
            <br />
            To see my project, click the button below.
          </p>
          <div>
            <Link to="/">
              <button class="know_more_project">Click Me</button>
            </Link>
          </div>
        </div>
        <div class="project">
          <h2 class="project_heading">PROJECT 2</h2>
          <p class="proj_intro">
            This is the second project I've completed for my ISE class.
            Basically, this project contains all of my industrial department's
            academic notes. The goal of our endeavour was to assist someone who
            was unfamiliar with our academic notes. I utilised HTML, CSS, and
            JavaScript attributes to make this.
            <br />
            To see my project, click the button below.
          </p>
          <div>
            <button class="know_more_project" onClick={project2}>
              Click Me
            </button>
          </div>
        </div>
      </section>
      <footer className="footer-bottom_project">
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
            <div className="social_media_fotter_bottom">
              {/* <a
          href="https://www.facebook.com/profile.php?id=100057814296670"
          target="_blank"
        > */}
              <img
                title="Follow Me on Facebook"
                alt="Follow Me on Facebook"
                src="https://static.wixstatic.com/media/0fdef751204647a3bbd7eaa2827ed4f9.png/v1/fill/w_31,h_31,al_c,q_85,usm_0.66_1.00_0.01/0fdef751204647a3bbd7eaa2827ed4f9.webp"
                className="Social_media_img_footer_bottom "
                onClick={facebook}
              />
              {/*</a> */}

              {/*<a href="https://twitter.com/aryan3865?s=08" target="_blank"> */}
              <img
                title="Follow Me on Twitter"
                alt="Follow Me on Twitter"
                src="https://static.wixstatic.com/media/c7d035ba85f6486680c2facedecdcf4d.png/v1/fill/w_31,h_31,al_c,q_85,usm_0.66_1.00_0.01/c7d035ba85f6486680c2facedecdcf4d.webp "
                className="Social_media_img_footer_bottom"
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
                className="Social_media_img_footer_bottom "
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
                className="Social_media_img_footer_bottom "
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
