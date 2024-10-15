import React from "react";
import About from "./About";
import Contact from "./Contact";
import Experience from "./Experience";
import Footer from "./Footer";
import Profile from "./Profile";
import Skills from "./Skills";

const Home = () => {
  return (
    <>
      {" "}
      <nav id="desktop-nav">
        <div className="logo">Himani Patel</div>
        <div>
          <ul className="nav-links">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
      <nav id="hamburger-nav">
        <div className="logo">Himani Patel</div>
        <div className="hamburger-menu">
          <div className="hamburger-icon">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="menu-links">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#contact">Contact Me</a>
            </li>
          </div>
        </div>
      </nav>
      <Profile />
      <About />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
