import { useEffect } from "react";
import Sidebar from "../../src/components/Sidebar";
import MobileNav from "../../src/components/MobileNav";
import Hero from "../../src/components/Hero";
import About from "../../src/components/About";
import Projects from "../../src/components/Projects";
import Skills from "../../src/components/Skills";
import Contact from "../../src/components/Contact";
import BackToTop from "../../src/components/BackToTop";
import AOS from "aos";

export default function Page() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: "ease-in-out" });
    const element = document.getElementById("home");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
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
  );
}
