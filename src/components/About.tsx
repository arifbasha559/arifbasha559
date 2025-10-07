import { Palette, Code2, Rocket, Users } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const services = [
  {
    icon: Code2,
    title: "Web App Development",
    description:
      "I build sleek, scalable, and high-performance web applications that bring ideas to life using React, Next.js, and modern web technologies.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "From wireframes to polished interfaces, I design engaging digital experiences that connect with users and enhance usability.",
  },
  {
    icon: Rocket,
    title: "Creative Development",
    description:
      "Combining design and code to deliver interactive, visually striking, and purposeful digital products that stand out on the web.",
  },
  {
    icon: Users,
    title: "Technical Guidance",
    description:
      "Supporting teams and individuals with code reviews, performance optimization, and smart tech decisions to build better products.",
  },
];


export default function About() {
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
    <section
      id="about"
      ref={sectionRef}
      className="relative py-20 px-6 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/10 to-black" />

      <div className="relative max-w-7xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-violet-500 mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="relative group">
              <div className="absolute -inset-14 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
              <div className="max-w-md relative m-auto bg-gradient-to-br from-blue-900/20 to-violet-900/20 rounded-2xl p-8 border border-blue-500/20">
                <div className="aspect-square  text-5xl font-bold text-wrap rounded-xl flex items-center justify-center">
                  AB
                </div>
              </div>
            </div>
          </div>

          <div
            className={`transition-all duration-1000 delay-400 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <h3 className="text-3xl font-bold text-white mb-4">
              Hi, I'm Arif Basha
            </h3>
            <p className="text-gray-400 mb-4 leading-relaxed">
              A passionate full-stack developer with a strong foundation in
              creating exceptional digital experiences. I specialize in building
              modern web applications that combine beautiful design with
              powerful functionality.
            </p>
            <p className="text-gray-400 mb-4 leading-relaxed">
              My journey in tech started with a curiosity about how things work
              on the web. Today, I work with cutting-edge technologies to bring
              ideas to life, always focusing on clean code, user experience, and
              scalable solutions.
            </p>
            <p className="text-gray-400 mb-6 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies,
              contributing to open-source projects, or sharing my knowledge with
              the developer community.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg px-4 py-2">
                <span className="text-blue-400 font-semibold">2+</span>
                <span className="text-gray-400 text-sm ml-2">
                  Years Experience
                </span>
              </div>
              <div className="bg-violet-500/10 border border-violet-500/30 rounded-lg px-4 py-2">
                <span className="text-violet-400 font-semibold">10+</span>
                <span className="text-gray-400 text-sm ml-2">
                  Projects Completed
                </span>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`transition-all duration-1000 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h3 className="text-3xl font-bold text-center mb-12 text-white">
            What I Do
          </h3>

          <div className="grid md:grid-cols-2 flex-wrap lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-gradient-to-br from-blue-900/10 to-violet-900/10 rounded-xl p-6 border border-blue-500/20 hover:border-blue-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-violet-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="relative">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500/20 to-violet-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon size={28} className="text-blue-400" />
                    </div>

                    <h4 className="text-xl font-semibold text-white mb-3">
                      {service.title}
                    </h4>

                    <p className="text-gray-400 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

