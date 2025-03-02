import "../App.css";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [nav, setNav] = useState("-translate-y-[200%]");

  const toggleMenu = () => {
    setMenu(!menu);
    if (menu) {
      setNav("-translate-y-[200%]");
    } else {
      setNav("translate-0");
    }
  };

  const closeMenu = () => {
    setMenu(false);
    setNav("-translate-y-[200%]");
  };

  return (
    <div className="h-14 mb-2 backdrop-blur-3xl border-b px-5 flex items-center justify-between sticky top-0 left-10 z-50 mx-auto">
      <div className="logo">
        <h2
          title="ARIF BASHA"
          className=" text-xl font-poppins font-bold tracking-wide text-nowrap md:mr-16"
        >
          ARIF BASHA
        </h2>
      </div>
      <div
        className={`btn flex gap-2 lg:static absolute ${nav} text-sm font-medium -z-10 bg-black py-20 lg:py-0 h-fit lg:translate-y-0 flex-col justify-end items-center w-full lg:flex-row top-14 left-0`}
      >
        <a
          onClick={closeMenu}
          href="/"
          className="w-fit nav-link px-2 py-0.5 text-center"
          title="Home"
        >
          Home
        </a>
        <a
          onClick={closeMenu}
          href="/"
          className="w-fit nav-link px-2 py-0.5 text-center"
          title="Home"
        >
          About
        </a>
        <a
          onClick={closeMenu}
          href="/"
          className="w-fit nav-link pl-2 py-0.5 text-center"
          title="Home"
        >
          Contact
        </a>
      </div>
      <div className="search pl-3 lg:pl-0 py-1 flex gap-2 justify-between items-center">
        <button
          onClick={toggleMenu}
          className="menu lg:hidden p-1.5 flex items-center rounded-full outline-none"
        >
          <IoMenu className="text-lg" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
