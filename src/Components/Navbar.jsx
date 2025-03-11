import '../App.css'
import {  useState } from "react";
import { IconContext } from "react-icons";
import { IoMenu } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
const Navbar = () => {
  
  const location = useLocation()

  
  const closeMenu = () => {
    setMenu(false);
    setNav('-translate-x-[200%]');
  };
  const [menu, setMenu] = useState(false)
  const [nav, setNav] = useState('-translate-x-[200%]')
  const toggleMenu = () => {
    setMenu(!menu)
    if (menu == true) {
      setNav('-translate-x-[200%] ')
    } else {
      setNav('translate-0 ')

    }
  }
  
  // console.log(blog.border.color);
  return (
<div className={` h-20 mb-2 backdrop-blur-3xl  bg-black px-2 lg:px-0 flex items-center justify-between sticky top-0 left-10 z-50 mx-auto`}>
      <div className="logo ">
        <h2 title="Arif Basha" className=" text-xl font-poppins text-[#F34629] cursor-default tracking-wider text-nowrap md:mr-16 " >Arif Basha</h2>
      </div>
      <div className={`btn flex gap-2 lg:static absolute ${nav}  text-sm font-medium gap-10 -z-10 py-20 lg:py-0 h-fit  lg:translate-0 flex-col justify-end items-center  w-full lg:flex-row top-14 left-0 bg-black z-index-[-1] transition-all duration-500 ease-in-out`}>

        <Link onClick={() => { closeMenu() }} to="/"        className={`w-fit lg:ml-10 ml-0 ${location.pathname==='/' ?"activate text-[#F34629]":"" } hover:text-[#F34629] after:bg-[#F34629] nav-link  px-2   py-0.5   text-center`} title="Home" >Home</Link>
        <Link onClick={() => { closeMenu() }} to="/services"    className={`w-fit ${location.pathname==='/services'?"activate text-[#F34629]":"" } nav-link  hover:text-[#F34629] after:bg-[#F34629] px-2  py-0.5 rounded-lg  text-center`} title="Services" >Services</Link>
        <Link onClick={() => { closeMenu() }} to="/skills"    className={`w-fit ${location.pathname==='/skills'?"activate text-[#F34629]":"" } nav-link hover:text-[#F34629] after:bg-[#F34629] px-2  py-0.5 rounded-lg  text-center`} title="Skills" >Skills</Link>
        <Link onClick={() => { closeMenu() }} to="/education"   className={`w-fit ${location.pathname==='/education'?"activate text-[#F34629]":"" } nav-link hover:text-[#F34629] after:bg-[#F34629] px-2  py-0.5 rounded-lg  text-center`} title="Education" >Educaion</Link>
        <Link onClick={() => { closeMenu() }} to="/experience" className={`w-fit ${location.pathname==='/experience'?"activate text-[#F34629]":"" } nav-link hover:text-[#F34629] after:bg-[#F34629] px-2  py-0.5 rounded-lg  text-center`} title="Experience" >Experience</Link>
        <Link onClick={() => { closeMenu() }} to="/contact" className={`w-fit ${location.pathname==='/contact'?"activate text-[#F34629]":"" } nav-link hover:text-[#F34629] after:bg-[#F34629] px-2  py-0.5 rounded-lg  text-center`} title="Contact" >Contact</Link>
        
        

      </div>
      {/* big screen search button  */}
      <div className="search pl-3 py-1 flex gap-2 justify-between lg:hidden items-center  ">
        
        
        <button onClick={toggleMenu} className={`menu lg:hidden p-1.5 flex  items-center rounded-full outline-none  `}>
          <IconContext.Provider value={{ className: `text-lg ` }}>
            <IoMenu />
          </IconContext.Provider>

        </button>
      </div>
    </div>
  );
};

export default Navbar;

