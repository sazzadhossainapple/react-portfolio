import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import { GiAchievement } from "react-icons/gi";
import { MdWork } from "react-icons/md";
import "./resume.css";

const Resume = () => {
  return (
    <section id="resume">
      <h5>My</h5>
      <h2>Resume</h2>

      <div className="container resume__container">
        <div className="resume__experience">
          <div className="experience__icon-text">
            <h3>Experience </h3>
            <MdWork className="experience__icon" />
          </div>

          <div className="resume__content">
            <article className="resume__details">
              <div>
                <h4>WEB DEVELOPER (Intern)</h4>
                <small className="company-name">Humans Engine</small>
                <h5 className="text-light">March 2021 to July 2021</h5>
              </div>
            </article>
          </div>
        </div>
        {/* EXPERIENCE */}
        <div className="resume__education">
          <div className="experience__icon-text">
            <h3>Education </h3>
            <FaGraduationCap className="experience__icon" />
          </div>
          <div className="resume__content">
            <article className="resume__details">
              <div>
                <h4>BSc in CSE</h4>
                <small className="text-light">
                  Institute : Southeast University,Dhaka,Bangladesh
                </small>
                <h5 className="text-light">Passing Year : 2021</h5>
              </div>
            </article>

            <article className="resume__details">
              <div>
                <h4>Higher Secondary (HSC)</h4>
                <small className="text-light">
                  College : Fluores College,Mymensingh,Bangladesh
                </small>
                <h5 className="text-light">Group : Science</h5>
                <h5 className="text-light">Passing Year : 2015</h5>
              </div>
            </article>
          </div>
        </div>
        {/* EDUCATION */}
        <div className="resume__achievements-certifications">
          <div className="experience__icon-text">
            <h3>Achievements/Certifications </h3>
            <GiAchievement className="experience__icon" />
          </div>
          <div className="resume__content">
            <article className="resume__details">
              <div>
                <h4>Cisco Networking Academy Skills Competition Bangladesh</h4>
                <small className="company-name">Cisco</small>
                <h5 className="text-light">February 2020</h5>
              </div>
            </article>
          </div>
        </div>
        {/* ACHIEVEMENTS */}
      </div>
    </section>
  );
};

export default Resume;
