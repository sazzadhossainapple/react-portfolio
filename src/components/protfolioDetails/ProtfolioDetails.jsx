import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";
import IMG1 from "../../asserts/portfolio2.png";
import IMG2 from "../../asserts/project1-1.png";
import IMG3 from "../../asserts/project1-2.png";
import "./protfolioDetails.css";
const ProtfolioDetails = () => {
  return (
    <section className="project-details">
      <h1 className="project-name">Online Programming Courses</h1>
      <div className="container">
        <div className="project-link">
          <a
            href="https://programminglearningreactive.web.app/"
            className="btn btn-primary"
            target="_blank"
            rel="noreferrer"
          >
            Live Demo
          </a>
          <a
            href="https://github.com/sazzadhossainapple/online-learning-platform-server-side"
            className="btn"
            target="_blank"
            rel="noreferrer"
          >
            Github Server
          </a>
          <a
            href="https://github.com/sazzadhossainapple/online-learning-platform-client-side"
            className="btn"
            target="_blank"
            rel="noreferrer"
          >
            Github Client
          </a>
        </div>
        <div className="project-img">
          <div className="project-images">
            <img src={IMG1} alt="" />
          </div>
          <div className="project-images">
            <img src={IMG2} alt="" />
          </div>
          <div className="project-images">
            <img src={IMG3} alt="" />
          </div>
        </div>
        <div className="project-dec">
          <p>
            This website programming many programming language users can do the
            course according to their choice.
          </p>
          <article className="experience__details project-art">
            <BsPatchCheckFill className="experience__details-icon" />
            <div>
              <p>
                This website uses modern javascript react js. React router dom
                has been used and firebase authentication. Through which the
                navbar can be navigated.
              </p>
            </div>
          </article>
          <article className="experience__details project-art">
            <BsPatchCheckFill className="experience__details-icon" />
            <div>
              <p>
                This website is related to online programming courses. This
                website programming many programming language users can do the
                course according to their choice.
              </p>
            </div>
          </article>
          <article className="experience__details project-art">
            <BsPatchCheckFill className="experience__details-icon" />
            <div>
              <p>
                Fill out the login and register form on this website. If the
                user wants to do any programming course, he has to log in and
                access it. If the user wants to log in for the first time, he
                must register first.
              </p>
            </div>
          </article>
          <article className="experience__details project-art">
            <BsPatchCheckFill className="experience__details-icon" />
            <div>
              <p>
                The programming learning reactive website uses protected/private
                routes. If the user wants to go to the private route then the
                user must have a login. Otherwise, he will not be given private
                route access.
              </p>
            </div>
          </article>
          <article className="experience__details ">
            <BsPatchCheckFill className="experience__details-icon" />
            <div>
              <p>
                Data is loaded from server-side API through react router dom and
                shown on display.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default ProtfolioDetails;
