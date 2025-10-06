import { ExternalLink, Github } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';



const projects = [
{
      title: "Tech-Zen",
      description:
        "A modern, user-friendly blog platform designed for tech enthusiasts, developers, and curious minds.",
      image: './tech-zen.png',
      tech: ['ReactJS', 'NodeJS', 'MongoDB', 'ExpressJS'],
      live: "https://tech-zen.vercel.app/",
      github: "https://github.com/arifbasha559/tech-zen",
    },

    {
      title: "Exposio Gallery",
      description:
        "A gallery showcasing the beauty of light and shadow through curated photography.",
      tech: ['ReactJS','TailwindCSS', 'Pixabay', 'Vercel'],

      image: './exposio.png',
      live: "https://exposio-gallery.vercel.app/",
      github: "https://github.com/arifbasha559/exposio",
    },
    {
      title: "JARVIS Cyber Dashboard",
      description:
        " A futuristic, real-time cybersecurity monitoring dashboard inspired by the J.A.R.V.I.S interface from Iron Man. ",
      tech: ['ReactJS','TailwindCSS', 'Vercel'],
      image: './dashboard.png',
      live: "https://jarvis-cyber-dashboard.vercel.app/",
      github: "https://github.com/arifbasha559/jarvis-cyber-dashboard",
    },
    {
      title: "Word Bridge",
      description:
        " A Translation app that bridges language gaps, making communication seamless and accessible.",
      image: './wordbridge.png',
      tech: ['ReactJS','TailwindCSS', 'Vercel', 'DeepTranslate API'],
      live: "https://wordbridge-three.vercel.app/",
      github: "https://github.com/arifbasha559/wordbridge",
    },
    {
      title: "Random String Generator",
      description:
        "A simple and secure String generator that generates strong and random passwords for your online accounts.",
      image: './rsg.png',
      tech: ['ReactJS','TailwindCSS', 'Vercel'],
      live: "https://rand-str-gen.vercel.app/",
      github: "https://github.com/arifbasha559/Rand-str-Gen",
    },
    {
      title: "Mak Todos",
      description:
        "A minimalist and user-friendly todo app to help you organize tasks efficiently.",
      image: './Mak-todos.png',
      tech: ['ReactJS','TailwindCSS', 'Vercel'],
      live: "https://mak-todos.vercel.app/",
      github: "https://github.com/arifbasha559/mak-todos",
    }
];

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="relative py-20 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-violet-950/10 to-black" />

      <div className="relative max-w-7xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-violet-500 mx-auto rounded-full" />
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            A showcase of my recent work spanning web applications, mobile apps, and more
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative bg-gradient-to-br from-blue-900/10 to-violet-900/10 rounded-xl overflow-hidden border border-blue-500/20 hover:border-blue-500/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(59,130,246,0.3)] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.github}
                    className="p-2 bg-black/50 backdrop-blur-sm rounded-full hover:bg-blue-500/50 transition-colors"
                    onClick={(e) => e.preventDefault()}
                  >
                    <Github size={20} className="text-white" />
                  </a>
                  <a
                    href={project.live}
                    className="p-2 bg-black/50 backdrop-blur-sm rounded-full hover:bg-blue-500/50 transition-colors"
                    onClick={(e) => e.preventDefault()}
                  >
                    <ExternalLink size={20} className="text-white" />
                  </a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500/30 rounded-xl transition-all duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
