import './App.css';
import Navbar from './Components/Navbar';
import React, { useEffect, useRef, useState } from 'react';


const App = () => {

  const vantaRef = useRef(null);

  useEffect(() => {
    const vantaEffect = window.VANTA.NET({
      el: vantaRef.current,
      THREE: window.THREE,
      mouseControls: true,
  touchControls: true,
  gyroControls: true,
  minHeight: 20.00,
  minWidth: 20.00,
  scale: 1.00,
  scaleMobile: 1.50,
  color: 0x5800FF,
  backgroundColor: 0xd0014,
  points: 20.00,
  maxDistance: 23.00,
  spacing: 14.00
    });

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);
  return (
    <div ref={vantaRef}>

    <div className=" bg-[#00000061] px-0 sm:px-6 md:px-10 lg:px-20 text-white max-w-screen min-w-screen min-h-screen">
      <Navbar />
      
    </div>
    </div>
  );
};

export default App;

