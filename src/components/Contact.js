import React from "react";
import "./Contact.css";
// import back from "./images/x.png";
export default function Contact(props) {
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
    <div
      id="background_fix"
      style={{
        backgroundImage: `url(${`${process.env.PUBLIC_URL}/images/xx.jpg`})`,
        height: "750px",
        objectFit: "cover",
      }}
    >
      <section id="body">
        <div id="container">
          <h1 id="thanks_name"></h1>
          <h2 id="explanation"></h2>
          <p id="excuse1"></p>
          <p id="excuse2"></p>
          <p id="excuse3"></p>
          <button id="ok_button"></button>
        </div>
      </section>
      <section id="opacity_of_contact_page">
        <section
          className={props.mode ? "contact_form off" : "contact_form off y"}
        >
          <div className="heading_contact_me">
            <div className="contact">
              <h1 className="contac_me">CONTACT ME</h1>
              <div className="about_contact">
                Get in touch and I will get back to you as soon as I can. I look
                forward to hearing from you! You can follow me on FaceBook as
                well as on LinkedIn.
              </div>
            </div>
          </div>
          <div className="right">
            <div className="form_list">
              <div className="name_of_form">Let's talk.But you first</div>
              {/* action="" method="post" */}
              <form id="form">
                <div className="relative_position">
                  {/* <label for="NAME"></label> */}
                  <i className="fas fa-user input_logo"></i>
                  {/* name="" attribute is used if you want to saved your data to the server */}
                  {/* value="" attribute is used whenever you need to print the same name(for example, submit the form) in every browser */}
                  <input
                    type="text"
                    name="username"
                    id="NAME"
                    autocomplete="off"
                    placeholder="Tony Stark"
                  />
                  <i className="fas fa-exclamation-circle output_incorrect"></i>
                  <i className="far fa-check-circle output_correct"></i>
                  <div className="error_msg"></div>
                </div>
                <div className="relative_position">
                  {/* <label for="EMAIL"></label> */}

                  <i className="far fa-envelope input_logo"></i>
                  <input
                    type="text"
                    name="email"
                    id="EMAIL"
                    autocomplete="off"
                    placeholder="tonystark@abc.com"
                  />
                  <i className="fas fa-exclamation-circle output_incorrect"></i>
                  <i className="far fa-check-circle output_correct"></i>
                  <div className="error_msg"></div>
                </div>
                <div className="relative_position">
                  {/* <label for="MESSAGE"></label> */}
                  <i className="far fa-comment-dots input_logo"></i>
                  <input
                    type="text"
                    name="Message"
                    id="MESSAGE"
                    autocomplete="off"
                    placeholder="Your concern"
                  />
                  <i className="fas fa-exclamation-circle output_incorrect"></i>
                  <i className="far fa-check-circle output_correct"></i>
                  <div className="error_msg"></div>
                </div>
                <div className="relative_position">
                  {/* <label for="I'm_not_a_robot"></label> */}
                  <i className="fas fa-lock input_logo"></i>
                  <input
                    type="text"
                    name="output"
                    id="I'm_not_a_robot"
                    autocomplete="off"
                    placeholder="How much is 11 - 3 = ?"
                  />
                  <i className="fas fa-exclamation-circle output_incorrect"></i>
                  <i className="far fa-check-circle output_correct"></i>
                  {/* <i classname="fas fa-check-double output_correct"></i> */}
                  <div className="error_msg"></div>
                </div>

                <button type="submit" id="submit">
                  Send
                </button>
              </form>
            </div>
          </div>
        </section>

        <footer className="footer-bottom_contact">
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
      </section>
    </div>
  );
}
