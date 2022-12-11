import React from "react";
import About from "../../components/about/About";
import Contact from "../../components/contacts/Contact";
import Experience from "../../components/experience/Experience";
import Header from "../../components/header/Header";
import Nav from "../../components/nav/Nav";
import Portfolio from "../../components/portfolio/Portfolio";
import Resume from "../../components/resume/Resume";

const Home = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Portfolio />
      <Resume />
      <Contact />
    </>
  );
};

export default Home;
