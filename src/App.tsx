import Sidebar from "./components/Sidebar";
import MobileNav from "./components/MobileNav";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import BackToTop from "./components/BackToTop";

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
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
          <p>
            &copy; {new Date().getFullYear()} Arif. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;

