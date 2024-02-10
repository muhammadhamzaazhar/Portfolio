import React from "react";

import Header from "./components/header/header.component";
import Home from "./components/home/home.component";
import About from "./components/about/about.component";
import Skills from "./components/skills/skills.component";
import Portfolio from "./components/portfolio/portfolio.component";
import Contact from "./components/contact/contact.component";
import Footer from "./components/footer/footer.component";

import "./App.css";

const App = () => {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
