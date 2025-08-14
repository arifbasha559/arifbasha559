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
      title: "Exposio Gallery",
      message:
        "A gallery showcasing the beauty of light and shadow through curated photography.",
      image: "./exposio.png",
      preview: "https://exposio-gallery.vercel.app/",
      code: "https://github.com/arifbasha559/exposio",
    },
    {
      title: "JARVIS Cyber Dashboard",
      message:
        " A futuristic, real-time cybersecurity monitoring dashboard inspired by the J.A.R.V.I.S interface from Iron Man. ",
      image: "./dashboard.png",
      preview: "https://jarvis-cyber-dashboard.vercel.app/",
      code: "https://github.com/arifbasha559/jarvis-cyber-dashboard",
    },
    {
      title: "Word Bridge",
      message:
        " A Translation app that bridges language gaps, making communication seamless and accessible.",
      image: "./wordbridge.png",
      preview: "https://wordbridge.vercel.app/",
      code: "https://github.com/arifbasha559/wordbridge",
    },
    {
      title: "Random String Generator",
      message:
        "A simple and secure String generator that generates strong and random passwords for your online accounts.",
      image: "./rsg.png",
      preview: "https://rand-str-gen.vercel.app/",
      code: "https://github.com/arifbasha559/Rand-str-Gen",
    },
    {
      title: "Mak Todos",
      message:
        "A minimalist and user-friendly todo app to help you organize tasks efficiently.",
      image: "./Mak-todos.png",
      preview: "https://mak-todos.vercel.app/",
      code: "https://github.com/arifbasha559/mak-todos",
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 text-white">
      {/* Section Heading */}
      <div className="text-center mb-12" data-aos="fade-down">
        <h2 className="text-4xl font-bold relative inline-block after:block after:w-full after:h-[2px] after:bg-[#E63A1F] after:absolute after:-bottom-1">
          My Projects
        </h2>
        <p className="text-gray-400 mt-2">
          Here are a few projects I've built recently.
        </p>
      </div>

      {/* Cards Grid */}
      <div
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
      >
        {data.map((item, index) => (
          <div
            key={index}
            className="group bg-[#181818] rounded-2xl overflow-hidden shadow-[0_0_10px_#F34629]/10 hover:shadow-[0_0_32px_#F34629] transition-all duration-300 hover:scale-[1.045] border border-[#232323] relative"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="relative w-full h-48 overflow-hidden">
              <img
                src={item.image}
                alt={item.title ? item.title + ' project screenshot' : 'Project screenshot'}
                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#181818cc] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {/* Optional: Tag or badge */}
              {/* <span className="absolute top-3 left-3 bg-[#F34629] text-xs px-3 py-1 rounded-full font-semibold tracking-wide shadow">Featured</span> */}
            </div>
            <div className="p-5 flex flex-col h-fit justify-between">
              <div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-[#F34629] transition-colors duration-300">{item.title}</h3>
                <p className="text-sm text-gray-400 mb-4">{item.message}</p>
              </div>
              <div className="flex gap-3 mt-2">
                <a
                  href={item.preview}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-sm rounded-full border border-[#E63A1F] bg-[#E63A1F] hover:text-[#E63A1F] hover:bg-white/10 text-white font-semibold shadow transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#F34629]"
                >
                  Live Preview
                </a>
                <a
                  href={item.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-sm rounded-full border border-[#E63A1F] text-[#E63A1F] hover:bg-[#E63A1F] hover:text-white font-semibold shadow transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#F34629]"
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
