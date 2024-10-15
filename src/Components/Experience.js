import React from "react";
import arrow from "../assests/arrow.png";
import exp1 from "../assests/exp1.jpeg";
import exp2 from "../assests/exp2.png";
import exp3 from "../assests/exp3.svg";

const Experience = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <section
        className="section"
        id="experience"
        style={{ marginTop: "50px" }}
      >
        <h3 className="section__text__p1">Browse My Recent</h3>
        <h1 className="title">Experience</h1>

        <div className="experience-details-container">
          <div className="about-containers">
            <div className="details-container color-container">
              <div className="article-container">
                <img src={exp1} alt="Project 1" className="project-img" />
              </div>
              <h4 className="experience-sub-title project-title">
                iLife Technology (USA) - IndiaNIC Infotech Limited
              </h4>

              <div
                className="text-container"
                style={{ height: "400px", overflowY: "scroll", padding: "5px" }}
              >
                <p>
                  • Developed insurance web applications using ReactJS,
                  collaborating with cross-functional teams.
                  <br />
                  • Managed both admin and frontend development, ensuring
                  seamless UI/UX integration.
                  <br />
                  • Enhanced responsive design, improving user experience across
                  mobile and desktop.
                  <br />
                  • Conducted testing, debugging, and resolved UI issues,
                  improving performance.
                  <br />
                  • Integrated third-party APIs to extend app functionality and
                  reduced loading times by 30%.
                  <br />• Built a secure customer portal with authentication and
                  authorization features for user access.
                </p>
                <h5>Key Projects:</h5>
                <p>
                  • Developed a secure web app for insurance companies,
                  streamlining applications and integrating health benefits
                  using ReactJS, Redux, Java, and Python.
                </p>
              </div>
              <p
                style={{
                  fontStyle: "italic",
                  marginTop: "10px",
                  color: "#ADD8E6",
                }}
              >
                Scroll down..
              </p>
            </div>

            <div className="details-container color-container">
              <div className="article-container">
                <img src={exp2} alt="Project 2" className="project-img" />
              </div>
              <h4 className="experience-sub-title project-title">Codezeros</h4>

              <div
                className="text-container"
                style={{ height: "400px", overflowY: "scroll", padding: "5px" }}
              >
                <p>
                  • Contributed to design and development processes, improving
                  product quality by 20%.
                  <br />
                  • Implemented real-time features that increased user
                  engagement and satisfaction.
                  <br />
                  • Reduced bug reports by 40% through thorough testing and
                  debugging.
                  <br />
                  • Utilized ReactJS, NodeJS, and Redux to develop scalable
                  applications for diverse clients.
                  <br />• Spearheaded blockchain projects that improved security
                  and transparency in transactions.
                </p>
                <h5>Key Projects:</h5>
                <p>
                  • Created a customizable design tool using Fabric JS, ReactJS,
                  NodeJS, and MongoDB.
                  <br />• Built a blockchain-based app for secure digital gold
                  investment with React and web3JS.
                </p>
              </div>
              <p
                style={{
                  fontStyle: "italic",
                  marginTop: "10px",
                  color: "#ADD8E6",
                }}
              >
                Scroll down..
              </p>
            </div>

            <div className="details-container color-container">
              <div className="article-container">
                <img src={exp3} alt="Project 3" className="project-img" />
              </div>
              <h4 className="experience-sub-title project-title">
                Omex Infotech
              </h4>

              <div
                className="text-container"
                style={{ height: "400px", overflowY: "scroll", padding: "5px" }}
              >
                <p>
                  • Proficient in Adobe XD, improving design-to-development
                  workflows.
                  <br />
                  • Worked closely with UI/UX teams to create visually appealing
                  and intuitive interfaces.
                  <br />• Gained extensive experience in JavaScript, developing
                  modern web applications.
                </p>
                <h5>Key Projects:</h5>
                <p>
                  • Built an e-commerce platform using ReactJS, NodeJS, and
                  MongoDB with secure transactions and user authentication.
                </p>
              </div>
              <p
                style={{
                  fontStyle: "italic",
                  marginTop: "10px",
                  color: "#ADD8E6",
                }}
              >
                Scroll down..
              </p>
            </div>
          </div>
        </div>

        <img
          src={arrow}
          alt="Arrow icon"
          className="icon arrow"
          onClick={scrollToContact}
        />
      </section>
    </div>
  );
};

export default Experience;
