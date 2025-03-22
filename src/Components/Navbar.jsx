import { useState, useEffect } from "react";
import { IconContext } from "react-icons";
import { IoMenu } from "react-icons/io5";
import "../App.css";
import gsap from "gsap";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [nav, setNav] = useState("-translate-x-[200%]");
  const [activeSection, setActiveSection] = useState("hero"); // Track active section

  // Close mobile menu
  const closeMenu = () => {
    setMenu(false);
    setNav("-translate-x-[200%]");
  };

  // Toggle mobile menu
  const toggleMenu = () => {
    setMenu(!menu);
    setNav(menu ? "-translate-x-[200%]" : "translate-0");
  };

  // Set up Intersection Observer to detect active section
  useEffect(() => {
    const sections = document.querySelectorAll("section"); // Select all sections

    const observerOptions = {
      root: null, // Use the viewport as the root
      rootMargin: "0px",
      threshold: 0.5, // Trigger when 50% of the section is visible
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id); // Update active section
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    // Observe each section
    sections.forEach((section) => observer.observe(section));

    // Cleanup observer
    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);
  useEffect(() => {
    gsap.from(".logo", {
      opacity: 0,
      x: -50,
      y: -50,
      duration: 1,
      delay:1,
      ease: "power3.out",
    });

    gsap.from(".navBtn", {
      x: 50,
      y:-50,
      opacity: 0,
      stagger: 0.4,
      filter: "blur(10px)",
      duration: 0.8,
      delay:1,
      ease: "power3.out"
    });
  }, []);
  return (
    <div className="h-20 mb-2 bg-black px-2 lg:px-0 flex items-center justify-between sticky top-0 left-10 z-50 mx-auto">
      <div className="logo">
        <a
          to="/"
          title="Arif Basha"
          className="text-2xl font-poppins text-[#F34629] cursor-default tracking-wider text-nowrap md:mr-16 mr-0"
        >
          Arif Basha
        </a>
      </div>

      {/* Desktop Navigation Links */}
      <div className=" hidden lg:flex lg:static absolute text-sm font-medium gap-10 -z-10 py-20 lg:py-0 h-fit flex-col justify-end items-center w-full lg:flex-row top-14 left-0 bg-black z-index-[-1] transition-all duration-500 ease-in-out">
        <a
          onClick={closeMenu}
          href="#hero"
          className={`w-fit lg:ml-10 ml-0 ${
            activeSection === "hero" ? "activate text-[#F34629]" : ""
          } hover:text-[#F34629] after:bg-[#F34629] nav-link navBtn px-2 py-0.5 text-center`}
          title="Home"
        >
          Home
        </a>
        <a
          onClick={closeMenu}
          href="#about"
          className={`w-fit ${
            activeSection === "about" ? "activate text-[#F34629]" : ""
          } nav-link navBtn hover:text-[#F34629] after:bg-[#F34629] px-2 py-0.5 rounded-lg text-center`}
          title="About"
        >
          About
        </a>
        <a
          onClick={closeMenu}
          href="#services"
          className={`w-fit ${
            activeSection === "services" ? "activate text-[#F34629]" : ""
          } nav-link navBtn hover:text-[#F34629] after:bg-[#F34629] px-2 py-0.5 rounded-lg text-center`}
          title="Services"
        >
          Services
        </a>
        <a
          onClick={closeMenu}
          href="#projects"
          className={`w-fit ${
            activeSection === "projects" ? "activate text-[#F34629]" : ""
          } nav-link navBtn hover:text-[#F34629] after:bg-[#F34629] px-2 py-0.5 rounded-lg text-center`}
          title="Projects"
        >
          Projects
        </a>
        <a
          onClick={closeMenu}
          href="#contact"
          className={`w-fit ${
            activeSection === "contact" ? "activate text-[#F34629]" : ""
          } nav-link navBtn hover:text-[#F34629] after:bg-[#F34629] px-2 py-0.5 rounded-lg text-center`}
          title="Contact"
        >
          Contact
        </a>
      </div>

      {/* Mobile Navigation Links */}
      <div
        className={`mNavBtn flex lg:hidden gap-2 lg:static absolute ${nav} text-sm font-medium gap-10 -z-10 pt-20 pb-10 lg:py-0 h-fit lg:translate-0 flex-col justify-end items-center w-full bg-[#000000bd] lg:flex-row top-14 left-0 bg-blaack z-index-[1] transition-all duration-500 ease-in-out border-b-2 border-[#F34629]`}
      >
        <a
          onClick={closeMenu}
          href="#hero"
          className={`w-fit lg:ml-10 ml-0 ${
            activeSection === "hero" ? "activate text-[#F34629]" : ""
          } hover:text-[#F34629] after:bg-[#F34629] nav-link px-2 py-0.5 text-center`}
          title="Home"
        >
          Home
        </a>
        <a
          onClick={closeMenu}
          href="#about"
          className={`w-fit ${
            activeSection === "about" ? "activate text-[#F34629]" : ""
          } nav-link hover:text-[#F34629] after:bg-[#F34629] px-2 py-0.5 rounded-lg text-center`}
          title="About"
        >
          About
        </a>
        <a
          onClick={closeMenu}
          href="#services"
          className={`w-fit ${
            activeSection === "services" ? "activate text-[#F34629]" : ""
          } nav-link hover:text-[#F34629] after:bg-[#F34629] px-2 py-0.5 rounded-lg text-center`}
          title="Services"
        >
          Services
        </a>
        <a
          onClick={closeMenu}
          href="#projects"
          className={`w-fit ${
            activeSection === "projects" ? "activate text-[#F34629]" : ""
          } nav-link hover:text-[#F34629] after:bg-[#F34629] px-2 py-0.5 rounded-lg text-center`}
          title="Projects"
        >
          Projects
        </a>
        <a
          onClick={closeMenu}
          href="#contact"
          className={`w-fit ${
            activeSection === "contact" ? "activate text-[#F34629]" : ""
          } nav-link hover:text-[#F34629] after:bg-[#F34629] px-2 py-0.5 rounded-lg text-center`}
          title="Contact"
        >
          Contact
        </a>
      </div>

      {/* Mobile Menu Button */}
      <div className="search pl-3 py-1 flex gap-2 justify-between lg:hidden items-center">
        <button
          onClick={toggleMenu}
          className={`menu navBtn lg:hidden p-1.5 flex cursor-pointer items-center rounded-full outline-none`}
        >
          <IconContext.Provider value={{ className: `text-3xl` }}>
            <IoMenu />
          </IconContext.Provider>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
