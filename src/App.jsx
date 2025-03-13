import "./App.css";
import About from "./Components/About";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Services from "./Components/Services";
import Projects from "./Components/Projects";

const App = () => {
  return (
    <BrowserRouter>
        
        <div className="bg-[#00000061] relative max-w-screen font-poppins min-h-screen px-0 sm:px-6 md:px-10 lg:px-20 text-white">
          <Navbar />
        <div className="px-3 lg:px-0  hidden lg:block ">
      <Routes>

          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />  
          <Route path="/projects" element={<Projects />} />
      </Routes>
        </div>
        <div className="px-3 lg:px-0 block lg:hidden">
          <div id="hero"><Hero /></div>
          <div id="about"><About /></div>
          <div id="services"><Services /></div>
          <div id="projects"><Projects /></div>
        </div>
        </div>
    
    </BrowserRouter>
  );
};

export default App;

