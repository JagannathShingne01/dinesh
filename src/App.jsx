import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Doctors from "./components/Doctors";
import Blogs from "./components/Blogs";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import NavCta from "./components/NavCta";
import Hero from "./components/Hero";
import Cta from "./components/cta";

const App = () => {
  return (
    <div>
      <NavCta/>
      <Navbar />

      <main>
        <div id="home">
          {/* <Home /> */}
          <Hero/>
        </div>
        
        <div id="about">
          <About />
        </div>
        <Cta/>
        <div id="services">
          <Services />
        </div>

        <div id="doctors">
          <Doctors />
        </div>

        <div id="blog">
          <Blogs />
        </div>
      </main>
    <Contact/>
      <Footer />
    </div>
  );
};

export default App;
