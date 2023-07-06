import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import Main from "./components/Main";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Admin from "./components/Admin";
import Addusers from "./components/Addusers";
import { NavLink } from "react-router-dom";
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
  Link,
} from "react-router-dom";

function App() {
  // const nav_phone = document.querySelector(".nav_phone");
  // const navmenu = document.querySelector(".navmenu");
  // const nav_list = document.querySelectorAll(".nav_list");

  // nav_phone.addEventListener("click", mobileMenu);
  // nav_list.forEach((n) => n.addEventListener("click", closeMenu));

  // function mobileMenu() {
  //   nav_phone.classList.toggle("active_nav_phone");
  //   navmenu.classList.toggle("active_nav_phone");
  //   nav_phone.classList.toggle("animation_nav_phone_lines");
  // }

  // function closeMenu() {
  //   nav_phone.classList.remove("active_nav_phone");
  //   navmenu.classList.remove("active_nav_phone");
  // }
  const [click, setclick] = useState(true);
  const handleclick = () => setclick(!click);
  return (
    <>
      <Router basename="/Portfolio-React">
        {/* <nav className="navbar">
          <div
            className={click ? "nav_phone" : "nav_phone active_nav_phone"}
            onClick={handleclick}
          >
            <div
              className={click ? "line-1" : "animation_nav_phone_lines1"}
            ></div>
            <div
              className={click ? "line-2" : "animation_nav_phone_lines2"}
            ></div>
            <div
              className={click ? "line-3" : "animation_nav_phone_lines3"}
            ></div>
          </div>
          <div className="logo">
            <img src={process.env.PUBLIC_URL + "/images/logo.jpg"} alt="logo" />

            <div className="web_name" id="active_web_name">
              <Link to="/" title="Currently, you're on the Home page.">
                Roy.com
              </Link>
            </div>
          </div>
          <ul className={click ? "navmenu" : "navmenu active_nav_phone"}>
            <li className="navitem">
              <NavLink
                className="list nav_list"
                exact
                to="/"
                activeClassName="active"
                onClick={handleclick}
              >
                Home
              </NavLink>
            </li>
            <li className="navitem">
              <NavLink
                className="list nav_list "
                exact
                to="/about"
                activeClassName="active"
                onClick={handleclick}
              >
                About Me
              </NavLink>
            </li>
            <li className="navitem">
              <NavLink
                className="list nav_list "
                exact
                to="/project"
                activeClassName="active"
                onClick={handleclick}
              >
                Projects
              </NavLink>
            </li>
            <li className="navitem">
              <NavLink
                className="list nav_list"
                exact
                to="/contact"
                activeClassName="active"
                onClick={handleclick}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav> */}

        <Switch>
          <Route path="/addusers" exact>
            <Addusers />
          </Route>
          <Route path="/admin" exact>
            <Admin />
          </Route>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/about" exact>
            <About />
          </Route>
          <Route path="/contact" exact>
            <Contact mode={click} />
          </Route>
          <Route path="/project" exact>
            <Project />
          </Route>
          <Route path="/" exact>
            <Main />
          </Route>
          <Redirect to="/" />
        </Switch>
      </Router>
    </>
  );
}

export default App;
