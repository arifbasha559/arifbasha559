import "./App.css";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
        
        <div className="bg-[#00000061] relative max-w-screen font-poppins min-h-screen px-0 sm:px-6 md:px-10 lg:px-20 text-white">
          <Navbar />
        <div className="px-3 lg:px-0  ">
      <Routes>

          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<Hero />} />
      </Routes>
        </div>
        </div>
    
    </BrowserRouter>
  );
};

export default App;

