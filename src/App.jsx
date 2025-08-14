import "./App.css";
import About from "./Components/About";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Services from "./Components/Services";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import CustomCursor from "./Components/CustomCursor";
import React, { useState, useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import LaptopLoader from "./Components/LaptopLoader";


const App = () => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <>
      {loading && <LaptopLoader onFinish={() => setLoading(false)} />}
      {!loading && (
        <>
          <CustomCursor />
          <div className="bg-[#00000061] relative max-w-screen font-poppins min-h-screen max-h-fit px-0 sm:px-6 md:px-10 lg:px-20 text-white">
            <Navbar />
            <main className="px-3 lg:px-0 flex flex-col gap-2 overflow-x-hidden">
              <section
                className="my-auto flex min-h-fita [calc(100vh-90px)] justify-center items-center md:pb-20 flexa-col"
                id="hero"
                aria-label="Hero Section"
              >
                <Hero />
              </section>
              <section
                className="flex min-h-fita [calc(100vh-90px)] justify-center items-center my-auto aflex-col"
                id="about"
                aria-label="About Section"
              >
                <About />
              </section>
              <section
                className="flex min-h-fita [calc(100vh-90px)] justify-center items-center flex-col md:mt-[5.5rem]"
                id="services"
                aria-label="Services Section"
              >
                <Services />
              </section>
              <section
                className="flex min-h-fita [calc(100vh-90px)] justify-center items-center flex-col md:mt-[5.5rem]"
                id="projects"
                aria-label="Projects Section"
              >
                <Projects />
              </section>
              <section
                className="flex min-h-fita [calc(100vh-90px)] justify-center items-center flex-col md:mt-[5.5rem]"
                id="contact"
                aria-label="Contact Section"
              >
                <Contact />
              </section>
            </main>
          </div>
          <Footer />
        </>
      )}
    </>
  );
};

export default App;

