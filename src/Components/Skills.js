import React from "react";
import react from "../assests/react.png";
import html from "../assests/html.png";
import css from "../assests/css.png";
import bootstrap from "../assests/bootstrap.png";
import jquery from "../assests/jquery.png";
import ecmascript from "../assests/ecmascript.jpeg";
import node from "../assests/node.png";
import restapi from "../assests/restapi.png";
import express from "../assests/express.png";
import json from "../assests/json.png";
import npm from "../assests/npm.png";
import js from "../assests/js.png";
import php from "../assests/php.png";
import ts from "../assests/ts.png";
import mongodb from "../assests/mongodb.svg";
import mysql from "../assests/mysql.png";
import git from "../assests/git.png";
import jira from "../assests/jira.png";
import postman from "../assests/postman.png";
import vsCode from "../assests/vs-code.svg";
import arrow from "../assests/arrow.png";

const Skills = () => {
  const scrollToExperience = () => {
    const experienceSection = document.getElementById("experience");
    if (experienceSection) {
      experienceSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div>
      <section className="section" id="skills">
        <h4 className="section__text__p1">Explore My</h4>
        <h1 className="title">Skills</h1>
        <div className="experience-details-container">
          <div className="about-containers">
            <div className="details-container">
              <h2 className="experience-sub-title">Frontend Development</h2>
              <div className="article-container">
                <article>
                  <img src={react} alt="Experience icon" className="icon" />
                  <div>
                    <h4>React JS with Redux</h4>
                  </div>
                </article>
                <article>
                  <img src={html} alt="Experience icon" className="icon" />
                  <div>
                    <h4>HTML</h4>
                  </div>
                </article>
                <article>
                  <img src={css} alt="Experience icon" className="icon" />
                  <div>
                    <h4>CSS</h4>
                  </div>
                </article>
                <article>
                  <img src={bootstrap} alt="Experience icon" className="icon" />
                  <div>
                    <h4>Bootstrap</h4>
                  </div>
                </article>
                <article>
                  <img src={jquery} alt="Experience icon" className="icon" />
                  <div>
                    <h4>jQuery</h4>
                  </div>
                </article>
                <article>
                  <img
                    src={ecmascript}
                    alt="Experience icon"
                    className="icon"
                  />
                  <div>
                    <h4>Es6 & Es7</h4>
                  </div>
                </article>
              </div>
            </div>
          </div>
          <div className="about-containers">
            <div className="details-container">
              <h2 className="experience-sub-title">Backend Development</h2>
              <div className="article-container">
                <article>
                  <img src={node} alt="Experience icon" className="icon" />
                  <div>
                    <h4>Node Js</h4>
                  </div>
                </article>
                <article>
                  <img src={restapi} alt="Experience icon" className="icon" />
                  <div>
                    <h4 className="tmp2">RestFul APIs</h4>
                  </div>
                </article>
                <article>
                  <img src={express} alt="Experience icon" className="icon" />
                  <div>
                    <h4>Express JS</h4>
                  </div>
                </article>
                <article>
                  <img src={json} alt="Experience icon" className="icon" />
                  <div>
                    <h4 className="xyz1">JSON</h4>
                  </div>
                </article>
                <article>
                  <img src={npm} alt="Experience icon" className="icon" />
                  <div>
                    <h4 className="xyz1">NPM</h4>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
        <div className="experience-details-container">
          <div className="about-containers">
            <div className="details-container">
              <h2 className="experience-sub-title">Programming language</h2>
              <div className="article-container">
                <article>
                  <img src={js} alt="Experience icon" className="icon" />
                  <div>
                    <h4>Javascript</h4>
                  </div>
                </article>
                <article>
                  <img src={php} alt="Experience icon" className="icon" />
                  <div>
                    <h4>PHP</h4>
                  </div>
                </article>
                <article>
                  <img src={ts} alt="Experience icon" className="icon" />
                  <div>
                    <h4>TypeScript</h4>
                  </div>
                </article>
              </div>
            </div>
          </div>
          <div className="about-containers">
            <div className="details-container">
              <h2 className="experience-sub-title">Database</h2>
              <div className="article-container">
                <article>
                  <img src={mongodb} alt="Experience icon" className="icon" />
                  <div>
                    <h4>MongoDB</h4>
                  </div>
                </article>
                <article>
                  <img src={mysql} alt="Experience icon" className="icon" />
                  <div>
                    <h4>MySQL</h4>
                  </div>
                </article>
              </div>
            </div>
          </div>
          <div className="about-containers">
            <div className="details-container">
              <h2 className="experience-sub-title">Developer Tool</h2>
              <div className="article-container">
                <article>
                  <img src={git} alt="Experience icon" className="icon" />
                  <div>
                    <h4>Git,GitHub & Gitlab</h4>
                  </div>
                </article>
                <article>
                  <img src={jira} alt="Experience icon" className="icon" />
                  <div>
                    <h4>JIRA</h4>
                  </div>
                </article>
                <article>
                  <img src={postman} alt="Experience icon" className="icon" />
                  <div>
                    <h4>POSTMAN</h4>
                  </div>
                </article>
                <article>
                  <img src={vsCode} alt="Experience icon" className="icon" />
                  <div>
                    <h4>Visual Studio</h4>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
        <img
          src={arrow}
          alt="Arrow icon"
          className="icon arrow"
          onClick={scrollToExperience}
        />
      </section>
    </div>
  );
};

export default Skills;
