import React from "react";
import About from "./components/about/About";
import Contact from "./components/contacts/Contact";
import Experience from "./components/experience/Experience";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Portfolio from "./components/portfolio/Portfolio";
import Resume from "./components/resume/Resume";
import Services from "./components/services/Services";
import Testimonials from "./components/testimonials/Testimonials";
const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Resume />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
