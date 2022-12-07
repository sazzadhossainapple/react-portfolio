import React from "react";
import { BiSupport } from "react-icons/bi";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
import ME from "../../asserts/aboutme2.png";
import "./about.css";

const About = () => {
  return (
    <section id="about">
      <h5> Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt=" AboutImage" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>15+ Completed</small>
            </article>

            <article className="about__card">
              <BiSupport className="about__icon" />
              <h5>Support</h5>
              <small>Online 24/7</small>
            </article>
          </div>
          <p>
            I am Sazzad Hossain. I am a web and React Js developer. I create web
            pages with UI/UX user interface. I also make the website more & more
            interactive with web animations. I can provide clean code and
            pixel-perfect design.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
