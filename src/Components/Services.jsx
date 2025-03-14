import { IconContext } from "react-icons";
import { AiOutlineStock } from "react-icons/ai";
import { FaPhotoVideo } from "react-icons/fa";
import { FaComputer } from "react-icons/fa6";
import { GiPencilBrush } from "react-icons/gi";
import { LuLaptopMinimalCheck, LuNotebookPen } from "react-icons/lu";

const Services = () => {
  const data = [
    {
      title: "Web Development",
      message:
        "I build dynamic, responsive websites with modern frameworks to deliver fast and engaging user experiences.",
      icon: <FaComputer />,
    },
    {
      title: "Graphic Design",
      message:
        "I craft visually stunning designs that capture attention and effectively communicate your brand’s identity.",
      icon: <GiPencilBrush />,
    },
    {
      title: "UI/UX Design",
      message:
        "I create intuitive and seamless user interfaces that enhance usability and improve customer satisfaction.",
      icon: <LuLaptopMinimalCheck  />,
    },
    {
      title: "Digital Marketing",
      message:
        "I strategize and execute impactful digital campaigns to boost your brand’s online presence and drive engagement.",
      icon: <AiOutlineStock />,
    },
    {
      title: "Photography",
      message:
        "I capture captivating visuals that tell compelling stories and bring moments to life.",
      icon: <FaPhotoVideo />,
    },
    {
      title: "Content Writing",
      message:
        "I craft engaging and persuasive content that connects with your audience and enhances your brand’s voice.",
      icon: <LuNotebookPen />,
    },
  ];

  return (
    <div>
      <div className="flex w-full h-20 flex-col justify-center items-center relative">
        <h2 className="text-3xl text-white relative inline-block cursor-default after:content-[''] after:block after:w-full after:h-[2.5px] after:bg-[#F34629] after:absolute after:-bottom-1 hover:text-4xl transition-all duration-500 ease-in-out  before:content-['']  before:w-[80%] before:block before:left-1/2 before:-translate-x-1/2  before:h-[2.5px] before:bg-[#F34629] before:absolute before:-bottom-2.5">
          My Services
        </h2>
      </div>
      {/* cards section */}
      <div className="flex flex-col w-full lg:w-3/4 mx-auto min-h-[80vh]  text-gray-300 justify-center items-center">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5  h-full px-10 py-10">
          {data.map(
            (item, index) => (
              console.log(item),
              (
                <div
                  key={index}
                  className="card grid-cols-2 lg:grid-cols-3   overflow-hidden flex justify-around flex-col py-5 items-center relative text-left rounded-lg h-full shadow-[0_2px_10px_rgba(255,255,255,0.2)] bg-black hover:bg-[#f34729aa] transition-all duration-300 ease-in-out group"
                >
                  <div className="header ">
                    <div className="image flex mx-auto bg-[#F34629] group-hover:text-black group-hover:bg-white  flex-shrink-0 justify-center items-center rounded-full p-3 size-fit transition-all duration-300 ease-in-out">
                      <IconContext.Provider value={{ className: `text-2xl ` }}>
                        {item.icon}
                      </IconContext.Provider>
                    </div>

                    <div className="content mt-3 text-center ">
                      <span className="title text-base font-semibold text-[#F34629] group-hover:text-black leading-6 transition-all duration-300 ease-in-out">
                        {item.title}
                      </span>
                      <p className="message mt-5 text-gray-300 text-sm leading-5 px-10">
                        {item.message}
                      </p>
                    </div>
                  </div>
                </div>
              )
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Services;

