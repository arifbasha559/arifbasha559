import { IconContext } from "react-icons";
import { FaComputer } from "react-icons/fa6";

const Services = () => {
  const data = [
    {
      title: "Web Development",
      message:
        "I design and develop responsive websites that are optimized for performance and user experience.",
      icon: <FaComputer />,
    },
    {
      title: "Graphic Design",
      message:
        "I create visually appealing designs that help businesses communicate their brand message.",
      icon: <FaComputer />,
    },
    {
      title: "UI/UX Design",
      message:
        "I design and develop responsive websites that are optimized for performance and user experience.",
      icon: <FaComputer />,
    },
    {
      title: "Digital Marketing",
      message:
        "I create visually appealing designs that help businesses communicate their brand message.",
      icon: <FaComputer />,
    },
    {
      title: "Photography",
      message:
        "I design and develop responsive websites that are optimized for performance and user experience.",
      icon: <FaComputer />,
    },
    {
      title: "Content Writing",
      message:
        "I create visually appealing designs that help businesses communicate their brand message.",
      icon: <FaComputer />,
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
      <div className="w-full h-[80vh]  text-gray-300 flex justify-center items-center">
        <div className="grid grid-cols-12 grid-rows-12 grid-flow-row gap-5  h-full px-20 py-10">
          {data.map((item, index) => (
            <div
              key={index}
              className="card overflow-hidden flex justify-between flex-col py-5 items-center col-span-4 row-span-4 relative text-left rounded-lg h-full shadow-[0_0_20px_#1b1b1b] bg-black hover:bg-[#f34729aa]  group"
            >
              <div className="header ">
                <div className="image flex mx-auto bg-[#F34629] group-hover:text-black group-hover:bg-white  flex-shrink-0 justify-center items-center rounded-full p-3 size-fit">
                  <IconContext.Provider value={{ className: `text-xl ` }}>
                    {item.icon}
                  </IconContext.Provider>
                </div>

                <div className="content mt-3 text-center">
                  <span className="title text-base font-semibold leading-6">
                    {item.title}
                  </span>
                  <p className="message mt-2 text-gray-300 text-sm leading-5">
                    {item.message}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
