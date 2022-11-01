import React from "react";
import Header from "./components/header/header";
import About from "./components/about/About";
import Contact from "./components/Contact/Contact";
import Experience from "./components/experience/experience";
import Footer from "./components/footer/footer";
import Nav from "./components/nav/nav";
import Portfolio from "./components/portfolio/portfolio";
import Services from "./components/services/services";
import Testimonials from "./components/testimonials/testimonials";

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
