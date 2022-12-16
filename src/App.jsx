import React from "react";
import Header from "./components/header/header";
import About from "./components/about/About";
import Contact from "./components/Contact/Contact";
import Experience from "./components/experience/experience";
import Footer from "./components/footer/footer";
import Nav from "./components/nav/nav";
import Portfolio from "./components/portfolio/portfolio";

const App = () => {
  return (
    <React.StrictMode>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
    </React.StrictMode>
  );
};

export default App;
