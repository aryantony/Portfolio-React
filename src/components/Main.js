import React from "react";
import { Link } from "react-router-dom";
import "./Main.css";

export default function main() {
  // let change_heading = document.querySelector(".heading_mid-section-part2");
  // let x = window.matchMedia("(min-width:0px) and (max-width:400px)");
  /*The window.matchMedia() method returns a MeduaQueryList
object repersenting the results of the specified CSS media 
query string.
The value of the matchMedia() method can be any of the media 
features of the CSS@media rule like min-height,min-width,orientation,etc*/
  // myfun(x);
  // x.addListener(myfun);
  // function myfun(x) {
  //   if (x.matches) {
  //     change_heading.innerHTML = "Hello";
  //   }
  // }
  // The above method is also do the same works as below done.

  function resumealert(e) {
    e.preventDefault();
    alert(
      `Currently, this page is not available.
"Work is under Process."


Inconvenience regretted!"`
    );
  }
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
      <section className="container"></section>
      <div className="mid-section">
        <div className="mid-section-part1">
          <div className="myimage_mid-section-part1">
            <img
              id="myimage"
              src={process.env.PUBLIC_URL + "/images/myimage.jpg"}
              alt="Photo"
            />
          </div>
          <div className="myname_mid-section-part1">
            Aryan
            <br />
            Roy
          </div>
          <hr className="line_break" />
          <div className="footer_mid-section-part1">WEB DEVELOPER</div>

          <div className="footer_mid-section">
            <a
              href="https://www.facebook.com/profile.php?id=100057814296670"
              target="_blank"
            >
              <img
                title="Follow Me on Facebook"
                alt="Follow Me on Facebook"
                src="https://static.wixstatic.com/media/0fdef751204647a3bbd7eaa2827ed4f9.png/v1/fill/w_31,h_31,al_c,q_85,usm_0.66_1.00_0.01/0fdef751204647a3bbd7eaa2827ed4f9.webp"
                className="Social_media_img_footer_mid-section"
              />
            </a>

            <a href="https://twitter.com/aryan3865?s=08" target="_blank">
              <img
                title="Follow Me on Twitter"
                alt="Follow Me on Twitter"
                src="https://static.wixstatic.com/media/c7d035ba85f6486680c2facedecdcf4d.png/v1/fill/w_31,h_31,al_c,q_85,usm_0.66_1.00_0.01/c7d035ba85f6486680c2facedecdcf4d.webp "
                className="Social_media_img_footer_mid-section"
              />
            </a>

            <a
              href="https://www.linkedin.com/in/aryan-kumar-88515121a"
              target="_blank"
            >
              <img
                title="Follow Me on LinkedIn"
                alt="Follow Me on LinkedIn"
                src="https://static.wixstatic.com/media/6ea5b4a88f0b4f91945b40499aa0af00.png/v1/fill/w_31,h_31,al_c,q_85,usm_0.66_1.00_0.01/6ea5b4a88f0b4f91945b40499aa0af00.webp"
                className="Social_media_img_footer_mid-section"
              />
            </a>

            <a
              href="https://www.instagram.com/aryanroy.tony?r=nametag"
              target="_blank"
            >
              <img
                title="Follow Me on Instagram"
                alt="Follow Me on Instagram"
                src="https://static.wixstatic.com/media/01c3aff52f2a4dffa526d7a9843d46ea.png/v1/fill/w_31,h_31,al_c,q_85,usm_0.66_1.00_0.01/01c3aff52f2a4dffa526d7a9843d46ea.webp"
                className="Social_media_img_footer_mid-section"
              />
            </a>
          </div>
        </div>
        <div className="mid-section-part2">
          <p className="heading_mid-section-part2">
            {window.innerWidth <= 400 ? "Hello" : "Welcome to my Webpage"}
          </p>

          <p className="sub_para_mid-section-part2">
            Here's who I am & what I do
          </p>
          <p className="para_mid-section-part2">
            Greetings! I am currently pursuing Integrated Dual Degree Studies in
            Industrial and System Engineering at IIT Kharagpur. I am, in the
            second year of my KGP period. I am a passionate Web designer.
          </p>

          <div className="footer_mid-section-part2">
            <a
              id="resume_footer_mid-section-part2"
              title="click here to see the Resume."
              onClick={resumealert}
            >
              RESUME
            </a>
            <Link
              id="project_footer_mid-section-part2"
              title="click here to see the Projects."
              to="/project"
            >
              PROJECTS
            </Link>
          </div>
          <div className="thought">
            "I guess hard work does pay off at the end of the day"
          </div>
        </div>
      </div>
      <footer className="footer-bottom">
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
