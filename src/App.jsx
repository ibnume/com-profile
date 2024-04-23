// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";

import "./App.css";

import Header from "./components/Header/Header";
import Hero from "./components/Ul/Hero";
import Counter from "./components/Ul/Counter";
import Services from "./components/Ul/Services";
import About from "./components/Ul/About";
import Team from "./components/Ul/Team";
import Blog from "./components/Ul/Blog";
import Testimonial from "./components/Ul/Testimonial";
import Newsletter from "./components/Ul/Newsletter";
import Footer from "./components/Footer/Footer";

function App() {
  const [theme, setTheme] = useState("");

  const toggleTheme = () => {
    theme === "" ? setTheme("light-theme") : setTheme("");
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <Hero theme={theme} />
      <Counter />
      <Services />
      <About />
      <Team />
      <Blog />
      <Testimonial />
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;
