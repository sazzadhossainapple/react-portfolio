import React from "react";
import CV from "../../asserts/Resume of Sazzad Hossain.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        My Resume
      </a>
      <a href="#contact" className="btn btn-primary">
        Contact Me
      </a>
    </div>
  );
};

export default CTA;
