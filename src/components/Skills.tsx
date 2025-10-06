import { useEffect, useRef, useState } from 'react';
import { Code2, Database, Palette, Server, Smartphone, Cloud, Lightbulb, Users, Target, Zap } from 'lucide-react';

const technicalSkills = [
  { name: 'React / Next.js', level: 95, icon: Code2 },
  { name: 'TypeScript', level: 90, icon: Code2 },
  { name: 'Node.js / Express', level: 88, icon: Server },
  { name: 'PostgreSQL / MongoDB', level: 85, icon: Database },
  { name: 'Tailwind CSS', level: 92, icon: Palette },
  { name: 'React Native', level: 80, icon: Smartphone },
  { name: 'AWS / Cloud Services', level: 75, icon: Cloud },
  { name: 'Python / Django', level: 78, icon: Code2 },
];

const softSkills = [
  { name: 'Problem Solving', icon: Lightbulb },
  { name: 'Team Leadership', icon: Users },
  { name: 'Project Management', icon: Target },
  { name: 'Quick Learner', icon: Zap },
];

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedLevels, setAnimatedLevels] = useState<number[]>(new Array(technicalSkills.length).fill(0));
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          technicalSkills.forEach((skill, index) => {
            setTimeout(() => {
              setAnimatedLevels(prev => {
                const newLevels = [...prev];
                newLevels[index] = skill.level;
                return newLevels;
              });
            }, index * 100);
          });
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
    <section id="skills" ref={sectionRef} className="relative py-20 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/10 to-black" />

      <div className="relative max-w-7xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-violet-500 mx-auto rounded-full" />
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            A comprehensive set of technical and interpersonal skills honed through years of experience
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500/20 to-violet-500/20 rounded-lg flex items-center justify-center">
                <Code2 className="text-blue-400" size={20} />
              </div>
              Technical Skills
            </h3>

            <div className="space-y-6">
              {technicalSkills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <div key={index} className="group">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Icon size={16} className="text-blue-400" />
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                      </div>
                      <span className="text-blue-400 font-semibold">{animatedLevels[index]}%</span>
                    </div>

                    <div className="relative h-3 bg-gray-800/50 rounded-full overflow-hidden border border-blue-500/20">
                      <div
                        className="absolute inset-y-0 left-0 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${animatedLevels[index]}%` }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20 animate-shimmer" />
                      </div>
                      <div className="absolute inset-0 bg-blue-500/20 group-hover:bg-blue-500/30 transition-colors rounded-full" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500/20 to-violet-500/20 rounded-lg flex items-center justify-center">
                <Lightbulb className="text-violet-400" size={20} />
              </div>
              Soft Skills
            </h3>

            <div className="grid grid-cols-2 gap-6">
              {softSkills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <div
                    key={index}
                    className="group relative bg-gradient-to-br from-blue-900/10 to-violet-900/10 rounded-xl p-6 border border-blue-500/20 hover:border-blue-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-violet-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />

                    <div className="relative">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-violet-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Icon size={24} className="text-blue-400" />
                      </div>

                      <h4 className="text-white font-semibold">
                        {skill.name}
                      </h4>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 bg-gradient-to-br from-blue-900/10 to-violet-900/10 rounded-xl p-6 border border-blue-500/20">
              <h4 className="text-white font-semibold mb-4">Additional Expertise</h4>
              <div className="flex flex-wrap gap-2">
                {['Git', 'Docker', 'GraphQL', 'REST APIs', 'Agile', 'CI/CD', 'Testing', 'Security'].map((item, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 text-sm font-medium hover:bg-blue-500/20 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
