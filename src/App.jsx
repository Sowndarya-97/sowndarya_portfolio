import { useEffect } from "react";
import AOS from "aos";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
function App() {

  useEffect(() => {

    AOS.init({

      duration: 900,
      once: true,
      easing: "ease-in-out",

    });

  }, []);

  return (
    <>
      
        <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
      
    </>
  );
}

export default App;








