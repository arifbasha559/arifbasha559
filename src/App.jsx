import { useState, useEffect } from "react";
import InitLoader from "./components/InitLoader";
import Sidebar from "./components/Sidebar";
import MobileNav from "./components/MobileNav";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import BackToTop from "./components/BackToTop";
import AOS from "aos";



const App = () => {

  const [loading, setLoading] = useState(true);

  const scrollToSection = () => {
  const element = document.getElementById("home");
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });

  }
};
  
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-in-out',
    });
  scrollToSection()  
  }, []);

  return (
    <div className="select-none" >
      {loading && <InitLoader onFinish={() => setLoading(false)} />}
      
        <div className="bg-black text-white text-wrap">
          <Sidebar />
          <MobileNav />
          <main>
            <Hero />
            <About />
            <Projects />
            <Skills />
            <Contact />
          </main>
          <BackToTop />
          <footer className="relative py-8 px-6 border-t border-blue-500/20">
            <div className="max-w-7xl mx-auto text-center text-gray-400">
              <p>&copy; {new Date().getFullYear()} Arif. All rights reserved.</p>
            </div>
          </footer>
        </div>
      </div>
  );
};

export default App;
