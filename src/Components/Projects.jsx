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

  return (
    <div className="min-h-[90vh] my-auto   flex flex-col justify-center items-center"> 
      <div className="Services-logo flex w-full h-20 flex-col justify-center items-center relative ">
        <h2 className="text-3xl text-white relative inline-block cursor-default after:content-[''] after:block after:w-full after:h-[2.5px] after:bg-[#F34629] after:absolute after:-bottom-1 hover:text-4xl transition-all duration-500 ease-in-out  before:content-['']  before:w-[80%] before:block before:left-1/2 before:-translate-x-1/2  before:h-[2.5px] before:bg-[#F34629] before:absolute before:-bottom-2.5">
          My Projects
        </h2>
      </div>
      {/* Cards section */}
      <div className="flex flex-col w-full mx-auto text-gray-300 justify-center items-center">
        <div className="cards grid sm:grid-cols-2 lg:grid-cols-3 gap-5 gap-y-10 h-full px-10 py-10">
          {data.map((item, index) => (
            <div
              key={index}
              className="w-80 p-4 bg-black rounded-lg min-h-fit flex flex-col justify-between not-hover:shadow-white hover:shadow-[0_0_10px_#F34629] shadow-[0_0_2px] transform hover:scale-105 transition-transform duration-300 ease-in-out"
            >
            
              <img
                className="w-full h-40 object-cover rounded-t-lg"
                alt="Card Image"
                src={item.image}
              />
              <div className="p-4 flex flex-col justify-between">
                <h2 className="text-xl   font-semibold">{item.title}</h2>
                <p className="text-gray-600 ">{item.message}</p>
              </div>
              <div className="flex gap-2 items-center mt-auto px-3"> 
                <a
                  href={item.preview}
                  target="_blank"
                  className="bg-blue-500 text-sm  hover:bg-blue-600  text-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  Live Preview
                </a>
                 <a
                  href={item.code}
                  target="_blank"
                  className="bg-green-500 text-sm hover:bg-green-600  text-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-green-400"
                >
                  code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
