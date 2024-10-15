import React from "react";
import profile1 from "../assests/profile1.jpeg";
import education from "../assests/education.png";
import arrow from "../assests/arrow.png";

const About = () => {
  const scrollToSkills = () => {
    const skillsSection = document.getElementById("skills");
    if (skillsSection) {
      skillsSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div>
      <section className="section" id="about">
        <h3 className="section__text__p1">Get To Know More</h3>
        <h1 className="title">About Me</h1>
        <div className="section-container">
          <div className="section__pic-container">
            <img src={profile1} alt="Profile Picture" className="about-pic" />
          </div>
          <div className="about-details-container">
            <div className="text-container">
              <p>
                Results-driven software developer around 4+ years of experience
                in <strong>Full Stack Development</strong>. Proficient in
                JavaScript and its frameworks and libraries, with a major focus
                on React.js and Node.js. Strong focus on creating user-centric
                applications. Successfully reduced application loading times by
                30% through optimization. Demonstrated ability to work
                effectively in cross-functional teams, delivering high-quality
                projects. Strong communicator committed to enhancing user
                experiences and contributing to team success.
              </p>
            </div>
            <div className="about-containers">
              <div className="details-container">
                <img src={education} alt="education icon" className="icon" />
                <p>
                  Post-Graduation in <strong>Web Development</strong>,<br />{" "}
                  Canada
                </p>
              </div>
              <div className="details-container">
                <img src={education} alt="education icon" className="icon" />
                <p>
                  Bachelor of Engineering in{" "}
                  <strong>Information Technology</strong>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <img
          src={arrow}
          alt="Arrow icon"
          className="icon arrow"
          onClick={scrollToSkills}
        />
      </section>
    </div>
  );
};

export default About;
