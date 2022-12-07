import { init } from "ityped";
import React, { useEffect, useRef } from "react";
import ME from "../../asserts/bgImage.png";
import CTA from "./CTA";
import "./header.css";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      strings: ["Web", "React Js"],
    });
  }, []);

  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Sazzad Hossain</h1>
        <h5 className="text-light">
          <span ref={textRef}></span> Developer
        </h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img className="img-me" src={ME} alt="me" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
