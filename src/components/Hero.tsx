import { ArrowRight, Download } from "lucide-react";
import { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  const [particles, setParticles] = useState<
    Array<{ id: number; x: number; y: number; size: number }>
  >([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen cursor-default flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-black to-violet-900/20" />

      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full bg-blue-400/30 animate-float"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${15 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="mb-6 animate-fadeIn">
          <span className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 text-sm font-medium">
            Welcome to my portfolio
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fadeInUp">
          <span className="bg-gradient-to-r from-white via-blue-200 to-violet-200 bg-clip-text text-transparent">
            <Typewriter
              words={[
                "Student",
                "UX/UI Designer",
                "Frontend Developer",
                "Tech Enthusiast!",
                "Creative Developer",
              ]}
              loop
              cursor
              cursorStyle="|"
              cursorColor="#00ffff"
              typeSpeed={100}
              deleteSpeed={75}
              delaySpeed={1400}
            />
          </span>
        </h1>

        <h2 className="text-2xl md:text-3xl lg:text-4xl text-gray-300 mb-8 animate-fadeInUp animation-delay-200">
          Crafting Digital Experiences
        </h2>

        <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto animate-fadeInUp animation-delay-400">
          Full-stack developer specializing in building exceptional digital
          experiences. Transforming ideas into elegant, user-centric solutions.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp animation-delay-600">
          <button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full font-semibold text-white shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:shadow-[0_0_50px_rgba(59,130,246,0.8)] transition-all duration-300 flex items-center justify-center gap-2"
          >
            Hire Me
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>

          <button
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full font-semibold text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 flex items-center justify-center gap-2"
          >
            View Work
            <Download size={20} />
          </button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full animate-scroll" />
        </div>
      </div>
    </section>
  );
}

