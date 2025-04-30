import "./App.css";
import About from "./Components/About";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Services from "./Components/Services";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <>
      {" "}
      <div className="bg-[#00000061] relative max-w-screen font-poppins min-h-screen  px-0 sm:px-6 md:px-10 lg:px-20 text-white">
        <Navbar />

        <div className="px-3 lg:px-0 flex flex-col h-full overflow-x-hidden">
          <section
            className="flex justify-center items-center md:pb-20 flex-col"
            id="hero"
          >
            <Hero />

            
          </section>
          <section
            className="flex  justify-center items-center flex-col"
            id="about"
          >
            <About />
          </section>
          <section
            className="flex md:mt-[5.5rem] justify-center items-center flex-col"
            id="services"
          >
            <Services />
          </section>
          <section
            className="flex  md:mt-[5.5rem] justify-center items-center flex-col"
            id="projects"
          >
            <Projects />
          </section>
          <section
            className="flex   justify-center items-center flex-col"
            id="contact"
          >
            <Contact />
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default App;
