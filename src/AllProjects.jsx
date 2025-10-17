import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { use } from "react";
import { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router";

const projects = [
    {
        title: "Tech-Zen",
        description:
            "A modern, user-friendly blog platform designed for tech enthusiasts, developers, and curious minds.",
        image: "./tech-zen.png",
        tech: ["ReactJS", "NodeJS", "MongoDB", "ExpressJS"],
        category: "Web",
        live: "https://tech-zen.vercel.app/",
        github: "https://github.com/arifbasha559/tech-zen",
    },
    {
        title: "MovieX App",
        description:
            "A movie discovery app that helps users find and explore films based on their preferences.",
        image: "./movieX.png",
        tech: ["ReactNative", "Nativewind", "TMDB API", "Expo"],
        category: "Android",
        live: "https://movie-x-red.vercel.app",
        github: "https://github.com/arifbasha559/moviex",
    },
    {
        title: "JARVIS Voice Assistant",
        description:
            "A futuristic voice assistant application inspired by Iron Man’s J.A.R.V.I.S interface.",
        image: "./jarvis-assistant.png",
        tech: ["ReactJS", "TailwindCSS", "Vercel"],
        category: "Web",
        live: "https://tony-jarvis.vercel.app/",
        github: "https://github.com/arifbasha559/Jarvis",
    },
    {
        title: "Exposio Gallery",
        description:
            "A gallery showcasing the beauty of light and shadow through curated photography.",
        image: "./exposio.png",
        tech: ["ReactJS", "TailwindCSS", "Pixabay API", "Vercel"],
        category: "Web",
        live: "https://exposio-gallery.vercel.app/",
        github: "https://github.com/arifbasha559/exposio",
    },
    {
        title: "JARVIS Cyber Dashboard",
        description:
            "A futuristic, real-time cybersecurity monitoring dashboard inspired by Iron Man’s J.A.R.V.I.S interface.",
        image: "./dashboard.png",
        tech: ["ReactJS", "TailwindCSS", "Vercel"],
        category: "Web",
        live: "https://jarvis-cyber-dashboard.vercel.app/",
        github: "https://github.com/arifbasha559/jarvis-cyber-dashboard",
    },
    {
        title: "Word Bridge",
        description:
            "A translation app that bridges language gaps, making communication seamless and accessible.",
        image: "./wordbridge.png",
        tech: ["ReactJS", "TailwindCSS", "Vercel", "DeepTranslate API"],
        category: "Web",
        live: "https://wordbridge-three.vercel.app/",
        github: "https://github.com/arifbasha559/wordbridge",
    },
    {
        title: "Mak Todos",
        description:
            "A minimalist and user-friendly todo app to help you organize tasks efficiently.",
        image: "./Mak-todos.png",
        tech: ["ReactJS", "TailwindCSS", "Vercel"],
        category: "Web",
        live: "https://mak-todos.vercel.app/",
        github: "https://github.com/arifbasha559/mak-todos",
    },
    {
        title: "My Leads (Extension)",
        description:
            "A simple and smart Chrome extension to capture and manage links directly from your browser.",
        image: "./myLeads.png",
        tech: ["ReactJS", "TailwindCSS", "Vercel", "Manifest V3"],
        category: "Other",
        live: "https://my-leads-website.vercel.app/",
        github: "https://github.com/arifbasha559/MyLeads",
    },
    {
        title: "Random String Generator",
        description:
            "A secure and random password generator for creating strong, unique credentials.",
        image: "./rsg.png",
        tech: ["ReactJS", "TailwindCSS", "Vercel"],
        category: "Web",
        live: "https://rand-str-gen.vercel.app/",
        github: "https://github.com/arifbasha559/Rand-str-Gen",
    },
    {
        title: "Todays News",
        description:
            "A news aggregator app that provides the latest headlines from various sources.",
        image: "./todays-News.png",
        tech: ["HTML", "TailwindCSS", "News API", "Vercel"],
        category: "Web",
        live: "https://todaysnews-zeta.vercel.app/",
        github: "https://github.com/arifbasha559/todaysnews",
    },
    {
        title: "PI Converter",
        description:
            "A tool for converting different file formats to another.",
        image: "./pi-converter.png",
        tech: ["HTML", "CSS", "Javascript", "Vercel"],
        category: "Web",
        live: "https://pi-converter.vercel.app/",
        github: "https://github.com/arifbasha559/pi-converter",
    },
];

const AllProjects = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);
    const [selectedValue, setSelectedValue] = useState("All");

    // Animate on scroll
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => entry.isIntersecting && setIsVisible(true),
            { threshold: 0.1 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    // Filter projects by category
    const filteredProjects =
        selectedValue === "All"
            ? projects
            : projects.filter((p) => p.category === selectedValue);

    const scrollToSection = () => {
        const element = document.getElementById("projects");
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    useEffect(() => {
        scrollToSection();
    }, []);
    return (
        <section
            id="projects"
            ref={sectionRef}
            className="relative py-20 px-6 overflow-hidden"
        >
            <Helmet>
                <title>ArifBasha | Projects</title>
                <meta name="description" content="Explore a curated selection of my projects, showcasing my skills and creativity across various domains." />
                <meta name="keywords" content="Arif Basha, Projects, Portfolio, Web Development, Android Development, Tech-Zen, MovieX App, JARVIS Voice Assistant, Exposio Gallery, JARVIS Cyber Dashboard, Word Bridge, Mak Todos, My Leads Extension, Random String Generator, Todays News, PI Converter" />
                <meta name="author" content="Arif Basha" />
                <link rel="canonical" href="https://arifbasha559.vercel.app/projects" />
            </Helmet>
            {/* Back Button */}
            <Link
                to="/"
                className="fixed flex justify-center items-center top-6 left-6 z-40 p-3 bg-blue-500/20 backdrop-blur-lg rounded-full border border-blue-500/30 text-white hover:bg-blue-500/30 transition-all duration-300 shadow-[0_0_20px_rgba(59,130,246,0.3)]"
            >
                <ArrowLeft className="animate-bounce-horizontal" size={20} />
            </Link>

            <div className="absolute inset-0 bg-gradient-to-b from-black via-violet-950/10 to-black" />

            <div className="relative max-w-7xl mx-auto">
                {/* Section Header */}
                <div
                    className={`text-center transition-all duration-1000 ${isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-10"
                        }`}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                        My Projects
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-violet-500 mx-auto rounded-full" />
                    <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
                        Explore a curated selection of my projects, showcasing my skills
                        and creativity across various domains.
                    </p>
                </div>

                {/* Filter Options */}
                <div className="flex flex-col mx-auto w-fit justify-center my-6 gap-4">
                    <label className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400 tracking-wide uppercase">
                        Filter by Project Type
                    </label>
                    <div className="flex flex-wrap gap-4">
                        {["All", "Web", "Android", "Other"].map((option) => (
                            <label
                                key={option}
                                className={`relative flex items-center gap-2 px-4 py-2 rounded-full cursor-pointer transition-all duration-300 
      ${selectedValue === option
                                        ? "bg-gradient-to-r from-blue-500 to-violet-500 text-white shadow-[0_0_15px_rgba(59,130,246,0.6)] scale-105"
                                        : "bg-blue-500/10 text-gray-400 hover:bg-blue-500/20 hover:text-blue-300"
                                    }`}
                            >
                                <input
                                    type="radio"
                                    value={option}
                                    checked={selectedValue === option}
                                    onChange={handleChange}
                                    className="hidden"
                                />
                                <span className="text-sm font-medium">{option}</span>
                            </label>
                        ))}
                    </div>

                </div>

                {/* Project Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project, index) => (

                        <div
                            key={index}
                            className={`group relative bg-gradient-to-br from-blue-900/10 to-violet-900/10 rounded-xl overflow-hidden border border-blue-500/20 hover:border-blue-500/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(59,130,246,0.3)] ${isVisible
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-10"
                                }`}
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            {/* Image */}
                            <div className="relative h-56 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover object-top brightness-125 saturate-150 group-hover:scale-110 transition-transform duration-500 ease-linear"
                                />
                                <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                                {/* Icons */}
                                <div className="absolute top-4 right-4 flex gap-2 opacity-0  group-hover:opacity-100 transition-opacity duration-300">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        className="p-2 z-50 bg-black/50 backdrop-blur-sm   rounded-full hover:bg-green-500 transition-colors"
                                    >
                                        <Github size={20} className="text-white" />
                                    </a>
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        className="p-2 z-50 bg-black/50 backdrop-blur-sm rounded-full hover:bg-blue-500 transition-colors"
                                    >
                                        <ExternalLink size={20} className="text-white" />
                                    </a>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 text-xs font-medium"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500/30 rounded-xl transition-all duration-300 pointer-events-none z-10" />
                        </div>
                    ))}
                    {filteredProjects.length === 0 && (
                        <p className="text-gray-400 col-span-full text-center">
                            No projects found in this category.
                        </p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default AllProjects;
