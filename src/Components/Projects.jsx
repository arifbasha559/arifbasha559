import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect } from "react";
import { IconContext } from "react-icons";
import { FaGithub } from "react-icons/fa";
import { IoLink } from "react-icons/io5";
gsap.registerPlugin(ScrollTrigger);
const Projects = () => {
  const data = [
    {
      title: "Tech-Zen",
      message:
        "is a modern, user-friendly blog platform designed for tech enthusiasts, developers, and curious minds.",
      image: "./tech-zen.png",
      preview: "https://tech-zen.vercel.app/",
      code: "https://github.com/arifbasha559/tech-zen",
     
    },
    {
      title: "Mak Todos",
      message:
        " is a minimalist and user-friendly todo application designed to help you organize your tasks efficiently.",
      image: "./Mak-todos.png",
      preview: "https://mak-todos.vercel.app/",
      code: "https://github.com/arifbasha559/mak-todos",

    },
    {
      title: "Exposio Gallery",
      message:
        "A portfolio showcasing the beauty of light and shadow, capturing the essence of nature through our curated collection of photographs.",
      image: "./exposio.png",
      preview: "https://exposio-gallery.vercel.app/",
      code: "https://github.com/arifbasha559/exposio",
    },
  ];
  useEffect(() => {
    
  
      // Animation for the "My Services" heading
     
      gsap.utils.toArray(".project-card").forEach((card, index) => {
        let x = 0, y = 0;
  
        // Apply different animations based on the card's position
        if (index  === 0) {
          x = -100; // Left column
        } else if (index  === 1) {
          y = 50; // Middle column
        } else if (index === 2) {
          x = 100; // Right column
        }
  
        gsap.fromTo(
          card,
          { opacity: 0, x, y, filter: "blur(10px)" },
          {
            opacity: 1,
            x: 0,
            y: 0,
            filter: "blur(0px)",
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 75%",
              end: "bottom 70%",
  
              toggleActions: "play none none reverse",
              onEnter: () => gsap.to(card, { opacity: 1 }),
              once: false,
            },
          });
      });
    }, []);
  
  return (
    <div className="">
      <div className="flex w-full flex-col justify-center items-center  relative">
        <h2 className="Services-logo text-3xl text-white relative inline-block cursor-default after:content-[''] after:block after:w-full after:h-[2.5px] after:bg-[#F34629] after:absolute after:-bottom-1 hover:text-4xl transition-all duration-500 ease-in-out  before:content-['']  before:w-[80%] before:block before:left-1/2 before:-translate-x-1/2  before:h-[2.5px] before:bg-[#F34629] before:absolute before:-bottom-2.5">
          My Projects
        </h2>
      </div>
      <div className="flex flex-col w-full mx-auto min-h-[80vh]  justify-center items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-10 lg:gap-5 py-10 px-5 md:px-10 lg:px-20 my-5 lg:items-start  w-full">
        {data.map((item, index) => (
          <div
            key={index}
          >
            <div
              className="card project-card group hidden relative w-full aspect-[16/9]  bg-black rounded-xl lg:flex items-center justify-center overflow-hidden perspective-1000 shadow-[0_0_5px_rgba(255,255,255,0.5)] transition-all duration-600 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] hover:shadow-[0_8px_16px_rgba(255,255,255,0.2)]"
              >
              {/* SVG Icon */}
              <div className="h-full ">
                <img
                  className="h-full object- object-center fill-[#333] transition-all duration-600 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group-hover:scale-0"
                  src={item.image}
                  alt=""
                  />
                <p className="m-0 absolute bottom-2 left-2 text-[20px] text-white/50  ">
                  {item.title}
                </p>
              </div>

              {/* Card Content */}
              <div className=" absolute top-0 left-0 w-full h-full p-5 flex flex-col justify-center gap-5 box-border bg-[#F34629] transform rotate-x-[-95deg] mt-0.5 rounded-xl hover:mt-0 origin-bottom transition-all duration-1000 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group-hover:rotate-x-0">
                <p className="m-0 text-[20px] text-black font-bold">
                  {item.title}
                </p>
                <p className="my-[5px] text-[12px] text-white selection:bg-black leading-[1.4] ">
                  {item.message}
                </p>
                <div className="">
                  <a
                    tabIndex="-1"
                    href={item.preview}
                    target="_blank"
                    className="inline-flex gap-2 items-center px-3 py-2 text-sm size-fit rounded-xl bg-black  text-white transition-all duration-500 ease-in-out hover:bg-transparent hover:border border-[#fff]"
                    >
                    <IconContext.Provider value={{ className: "text-lg" }}>
                      <IoLink /> Preview
                    </IconContext.Provider>
                  </a>
                  <a
                    tabIndex="-1"
                    href={item.code}
                    target="_blank"
                    className=" inline-flex gap-2 items-center selection:bg-black px-3 py-2 text-sm rounded-xl size-fit bg-transparent text-white border border-[#fff] ml-2 transition-all duration-500 ease-in-out hover:bg-black"
                    >
                    <IconContext.Provider value={{ className: "text-lg" }}>
                      <FaGithub />
                    </IconContext.Provider>
                    Code
                  </a>
                </div>
              </div>
            </div>
            <div className="card lg:hidden mx-auto w-fit sm:w-[250px] h-fit rounded-[20px] bg-[#F34629] text-white shadow-[0px_0px_10px_2px_#5a5a5a] flex flex-col justify-center transition-all duration-400 relative hover:scale-102 hover:shadow-[0px_0px_10px_2px_#5a5a5a]">
              {/* Image Section */}
              <div className="card__img w-full h-full bg-blueviolet rounded-t-[20px]">
              <img
                  className="h-full object- object-center transition-all duration-600 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] "
                  src={item.image}
                  alt=""
                  />
              </div>

              {/* Description Section */}
              <div className="card__descr-wrapper p-[15px] grid">
                <p className="card__title text-black text-center mb-[15px] font-bold text-xl">
                  {item.title}
                </p>
                <p className="card__descr text-white ">
                 {item.message}
                </p>

                {/* Links Section */}
                <div className="card__links mt-[10px] flex justify-between self-end">
                  <div className="">
                    <a
                      to={item.preview}
                      target="_blank"
                      className="link flex items-center gap-2 text-white font-semibold text-[15px] ml-2 hover:underline"
                      >
                    <IoLink className=" w-[25px] h-[25px] text-black" />

                      Preview
                    </a>
                  </div>
                  <div className="">
                  <a
                      to={item.code}
                      target="_blank"
                      className="link flex items-center gap-2 text-white font-semibold text-[15px] ml-2 hover:underline"
                      >
                    <FaGithub className=" w-[25px] h-[25px] text-black" />

                      Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
