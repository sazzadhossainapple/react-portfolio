import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";
import IMG1 from "../../asserts/portfolio11.jpg";
import IMG2 from "../../asserts/project3-2.png";
import IMG3 from "../../asserts/project3-3.jpg";
const ProjectDetails2 = () => {
  return (
    <section className="project-details">
      <h1 className="project-name">Photography Service Review</h1>
      <div className="container">
        <div className="project-link">
          <a
            href="https://flash-photography-point.web.app/"
            className="btn btn-primary"
            target="_blank"
            rel="noreferrer"
          >
            Live Demo
          </a>
          <a
            href="https://github.com/sazzadhossainapple/photography-service-review-server-side"
            className="btn"
            target="_blank"
            rel="noreferrer"
          >
            Github Server
          </a>
          <a
            href="https://github.com/sazzadhossainapple/photography-service-review-client-side"
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
            What services a photographer provides and user reviews will be
            provided on that service.
          </p>
          <article className="experience__details project-art">
            <BsPatchCheckFill className="experience__details-icon" />
            <div>
              <p>
                This website uses modern javascript react js. React router dom
                has been used and firebase authentication and server side NodeJS
                and data store mongodb. Through which the navbar can be
                navigated.
              </p>
            </div>
          </article>
          <article className="experience__details project-art">
            <BsPatchCheckFill className="experience__details-icon" />
            <div>
              <p>
                What services a photographer provides and user reviews will be
                provided on that service. But if the user wants to give a
                review, he must first login.
              </p>
            </div>
          </article>
          <article className="experience__details project-art">
            <BsPatchCheckFill className="experience__details-icon" />
            <div>
              <p>
                Email verification will be done from the server side while
                logging in to this website uses. User is valid or not. JSON web
                token(JWT) is used on the server side.
              </p>
            </div>
          </article>
          <article className="experience__details project-art">
            <BsPatchCheckFill className="experience__details-icon" />
            <div>
              <p>
                How many reviews a current user gives and can see on any
                service? And those who review the service can delete and update
                it.
              </p>
            </div>
          </article>
          <article className="experience__details ">
            <BsPatchCheckFill className="experience__details-icon" />
            <div>
              <p>New services can be added to the Flash Photography point.</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails2;
