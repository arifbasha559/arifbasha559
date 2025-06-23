import "./App.css";
import About from "./Components/About";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Services from "./Components/Services";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import CustomCursor from "./Components/CustomCursor";

const App = () => {
  return (
    <>
      <CustomCursor />
      <div className="bg-[#00000061] relative max-w-screen font-poppins min-h-screen max-h-fit  px-0 sm:px-6 md:px-10 lg:px-20 text-white">
        <Navbar />

        <div className="px-3 lg:px-0 flex flex-col gap-2 overflow-x-hidden">
          <section
            className="my-auto flex min-h-fita [calc(100vh-90px)] justify-center items-center md:pb-20 flexa-col"
            id="hero"
          >
            <Hero />
          </section>
          <section
            className="flex min-h-fita [calc(100vh-90px)]  justify-center items-center my-auto aflex-col "
            id="about"
          >
            <About />
          </section>
          <section
            className="flex min-h-fita [calc(100vh-90px)]  justify-center items-center flex-col  md:mt-[5.5rem]"
            id="services"
          >
            <Services />
          </section>
          <section
            className="flex min-h-fita [calc(100vh-90px)] justify-center items-center flex-col  md:mt-[5.5rem]"
            id="projects"
          >
            <Projects />
          </section>
          <section
            className="flex min-h-fita [calc(100vh-90px)]   justify-center items-center flex-col  md:mt-[5.5rem]"
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

