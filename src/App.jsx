import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";
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
import AllProjects from "./AllProjects";
import './App.css'
import { Helmet } from "react-helmet";
const HomePage = () => {
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
    scrollToSection();
  }, []);

  return (
    <div className="bg-black text-white text-wrap">
      <Helmet>
        <title>ArifBasha | Portfolio</title>
        <meta name="description" content="Welcome to Arif Basha's personal portfolio website. Explore my projects, skills, and get in touch!" />
        <meta name="keywords" content="Arif Basha, Portfolio, Web Developer, Android Developer, Projects, Skills, Contact" />
        <meta name="author" content="Arif Basha" />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="ArifBasha | Portfolio" />
        <meta property="og:description" content="Welcome to Arif Basha's portfolio. Explore projects, skills, and contact information." />
        <meta property="og:url" content="https://arifbasha559.vercel.app/" />
        <meta property="og:image" content="https://arifbasha559.vercel.app/Profile.jpg" />
        <meta property="og:site_name" content="Arif Basha Portfolio" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ArifBasha | Portfolio" />
        <meta name="twitter:description" content="Welcome to Arif Basha's portfolio. Explore projects, skills, and contact information." />
        <meta name="twitter:creator" content="@arifbasha559" />
        <link rel="canonical" href="https://arifbasha559.vercel.app/" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Arif Basha",
          "url": "https://arifbasha559.vercel.app/",
          "sameAs": [
            "https://github.com/ArifBasha559",
            "https://www.linkedin.com/in/arifbasha559/"
          ],
          "jobTitle": "Full-stack Developer",
          "description": "Full-stack developer building modern web and mobile experiences. Explore projects, skills, and contact me for collaborative work."
        })}</script>
      </Helmet> 
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
};

const App = () => {
  const [loading, setLoading] = useState(true);

  return (
    <Router>
      <div className="select-none">
        {loading && <InitLoader onFinish={() => setLoading(false)} />}

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<AllProjects />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;