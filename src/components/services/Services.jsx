import React from "react";
import { BiCheck } from "react-icons/bi";
import "./services.css";

const Services = () => {
  return (
    <section id="service">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>100% pixel perfect design.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>I develop the user interface.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>I am using the latest technology.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                I will provide web development service. If you need please
                contact me.
              </p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                I can do any kind of website desing like real estate, Online
                Shopping etc.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                I will provide fully responsive with mobile phone, tablet,
                desktop device.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                I will provide web development service. If you need please
                contact me.
              </p>
            </li>
          </ul>
        </article>
        {/* END OF Web Development */}

        <article className="service">
          <div className="service__head">
            <h3>Java Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Design and implement java application.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Software analysis, testing, programming and debugging.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Architectural and software development activities.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>I can provide clean code and REST API</p>
            </li>
          </ul>
        </article>
        {/* END OF Java Development */}
      </div>
    </section>
  );
};

export default Services;
