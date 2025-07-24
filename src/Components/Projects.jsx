const Projects = () => {
  const data = [
    {
      title: "Tech-Zen",
      message:
        "A modern, user-friendly blog platform designed for tech enthusiasts, developers, and curious minds.",
      image: "./tech-zen.png",
      preview: "https://tech-zen.vercel.app/",
      code: "https://github.com/arifbasha559/tech-zen",
    },
    {
      title: "Mak Todos",
      message:
        "A minimalist and user-friendly todo app to help you organize tasks efficiently.",
      image: "./Mak-todos.png",
      preview: "https://mak-todos.vercel.app/",
      code: "https://github.com/arifbasha559/mak-todos",
    },
    {
      title: "Exposio Gallery",
      message:
        "A gallery showcasing the beauty of light and shadow through curated photography.",
      image: "./exposio.png",
      preview: "https://exposio-gallery.vercel.app/",
      code: "https://github.com/arifbasha559/exposio",
    },
  ];

  return (
    <section id="projects" className="py-20 px-6  text-white">
      {/* Section Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold relative inline-block after:block after:w-full after:h-[2px] after:bg-[#E63A1F] after:absolute after:-bottom-1">
          My Projects
        </h2>
        <p className="text-gray-400 mt-2">
          Here are a few projects I've built recently.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-[#1A1A1A] rounded-xl overflow-hidden shadow-[0_0_10px_#F34629]/10 hover:shadow-[0_0_20px_#F34629] transition-transform hover:scale-[1.03]"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5 flex flex-col h-fit justify-between">
              <div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400 mb-4">{item.message}</p>
              </div>
              <div className="flex gap-3 ">
                <a
                  href={item.preview}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-sm rounded-full border border-[#E63A1F] bg-[#E63A1F] hover:text-[#E63A1F] hover:bg-[#E63A1F11] text-white transition"
                >
                  Live Preview
                </a>
                <a
                  href={item.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-sm rounded-full border border-[#E63A1F] text-[#E63A1F] hover:bg-[#E63A1F] hover:text-white transition"
                >
                  Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
