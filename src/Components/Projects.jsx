import { IconContext } from "react-icons";
import { FaGithub } from "react-icons/fa";
import { IoLink } from "react-icons/io5";
import { Link } from "react-router-dom";

const Projects = () => {
  const data = [
    {
      title: "Tech-Zen",
      message:
        "is a modern, user-friendly blog platform designed for tech enthusiasts, developers, and curious minds.",
      preview: "https://tech-zen.vercel.app/",
      code: "https://tech-zen.vercel.app/",
    },
    {
      title: "Mak Todos",
      message:
        "Mak Todos is a minimalist and user-friendly todo application designed to help you organize your tasks efficiently.",
      preview: "https://mak-todos.vercel.app/",
      code: "https://mak-todos.vercel.app/",
    },
    {
      title: "Tech-Zen",
      message:
        "is a modern, user-friendly blog platform designed for tech enthusiasts, developers, and curious minds.",
      preview: "https://tech-zen.vercel.app/",
      code: "https://tech-zen.vercel.app/",
    },
    {
      title: "Mak Todos",
      message:
        "Mak Todos is a minimalist and user-friendly todo application designed to help you organize your tasks efficiently.",
      preview: "https://mak-todos.vercel.app/",
      code: "https://mak-todos.vercel.app/",
    },
    {
      title: "Tech-Zen",
      message:
        "is a modern, user-friendly blog platform designed for tech enthusiasts, developers, and curious minds.",
      preview: "https://tech-zen.vercel.app/",
      code: "https://tech-zen.vercel.app/",
    },
    {
      title: "Mak Todos",
      message:
        "Mak Todos is a minimalist and user-friendly todo application designed to help you organize your tasks efficiently.",
      preview: "https://mak-todos.vercel.app/",
      code: "https://mak-todos.vercel.app/",
    },
  ];
  return (
    <div className="min-h-[calc(100vh-90px)]">
      <div className="flex w-full h-20 flex-col justify-center items-center relative">
        <h2 className="text-3xl text-white relative inline-block cursor-default after:content-[''] after:block after:w-full after:h-[2.5px] after:bg-[#F34629] after:absolute after:-bottom-1 hover:text-4xl transition-all duration-500 ease-in-out  before:content-['']  before:w-[80%] before:block before:left-1/2 before:-translate-x-1/2  before:h-[2.5px] before:bg-[#F34629] before:absolute before:-bottom-2.5">
          My Projects
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5 px-5 md:px-10 lg:px-20 my-5 items-start max-h-[calc(100vh-90px)] w-full">
        {data.map((item, index) => (
          <div
            key={index}
            className="group relative w-full aspect-[16/9]  bg-black rounded-xl flex items-center justify-center overflow-hidden perspective-1000 shadow-[0_0_5px_rgba(255,255,255,0.5)] transition-all duration-600 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] hover:shadow-[0_8px_16px_rgba(255,255,255,0.2)]"
          >
            {/* SVG Icon */}
            <div className="h-full ">
              <img
                className="h-full object- object-center fill-[#333] transition-all duration-600 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group-hover:scale-0"
                src=".\hero-section.jpg"
                alt=""
              />
              <p className="m-0 absolute bottom-2 left-2 text-[20px] text-[#F34629] ">
                {item.title}
              </p>
            </div>

            {/* Card Content */}
            <div className="absolute top-0 left-0 w-full h-full p-5 flex flex-col justify-center gap-5 box-border bg-[#F34629] transform rotate-x-[-95deg] mt-0.5 rounded-xl hover:mt-0 origin-bottom transition-all duration-1000 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] group-hover:rotate-x-0">
              <p className="m-0 text-[20px] text-black font-bold">
                {item.title}
              </p>
              <p className="my-[5px] text-[12px] text-gray-300 leading-[1.4] ">
                {item.message}
              </p>
              <div className="">
                <Link
                tabIndex="-1"
                  to={item.preview}
                  className="inline-flex gap-2 items-center px-3 py-2 text-sm size-fit rounded-xl bg-black  text-white transition-all duration-500 ease-in-out hover:bg-transparent hover:border border-[#fff]"
                >
                  <IconContext.Provider value={{ className: "text-lg" }}>
                    <IoLink /> Preview
                  </IconContext.Provider>
                </Link>
                <Link
                tabIndex="-1"
                  to={item.code}
                  className=" inline-flex gap-2 items-center px-3 py-2 text-sm rounded-xl size-fit bg-transparent text-white border border-[#fff] ml-2 transition-all duration-500 ease-in-out hover:bg-black"
                >
                  <IconContext.Provider value={{ className: "text-lg" }}>
                    <FaGithub />
                  </IconContext.Provider>
                  Code
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
