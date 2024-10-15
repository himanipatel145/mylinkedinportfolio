import React from "react";
import profile1 from "../assests/profile1.jpg";
import linkedin from "../assests/linkedin.png";
import github from "../assests/github.png";
import email from "../assests/email.png";

const Profile = () => {
  return (
    <div>
      <section id="profile">
        <div
          className="section__pic-container"
          style={{
            width: "400px",
            height: "400px",
            overflow: "hidden",
            borderRadius: "50%",
          }}
        >
          <img
            src={profile1}
            alt="Himani Patel Profile Pic"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "50%",
            }}
          />
        </div>

        <div className="section__text">
          <h3>Hello, I'm</h3>
          <h1 className="title">Himani Patel</h1>
          <p className="section__text__p2">Full Stack Developer</p>
          <div className="btn-container">
            <button
              className="btn btn-color-2"
              onClick={() =>
                window.open("../../docs/Himani_Patel_Resume_FSD_4YOE.pdf")
              }
            >
              Download CV
            </button>
            <a href="tel:+14165551234" className="btn btn-color-1">
              Contact Info
            </a>
          </div>
          <div id="socials-containers">
            <img
              src={linkedin}
              alt="My LinkedIn Profile"
              className="icon"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/himani-patel-8a6667176/",
                  "_blank"
                )
              }
            />
            <img
              src={github}
              alt="My GitHub Profile"
              className="icon"
              onClick={() =>
                window.open("https://github.com/himanipatel145", "_blank")
              }
            />
            <img
              src={email}
              alt="My Email"
              className="icon email-icon"
              onClick={() =>
                window.open("mailto:himanipatel14597@gmail.com", "_blank")
              }
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;
