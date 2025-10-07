import {
  Home,
  User,
  Briefcase,
  Code,
  Mail,
} from "lucide-react";
import { useState, useEffect } from "react";

const navItems = [
  { id: "home", label: "Home", icon: Home },
  { id: "about", label: "About", icon: User },
  { id: "projects", label: "Projects", icon: Briefcase },
  { id: "skills", label: "Skills", icon: Code },
  { id: "contact", label: "Contact", icon: Mail },
];

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed left-0 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
      <div className="bg-black/50   backdrop-blur-lg border-r border-blue-500/20 rounded-r-2xl p-4">
        <ul className={`space-y-6`}>
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;

            return (
              <li key={item.id} >
                
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`group flex items-center w-full justify-between gap-3 transition-all duration-300 ${
                    isActive
                      ? "text-blue-400"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  <span
                    className={`text-sm text-right w-full font-medium whitespace-nowrap transition-all duration-300 ${
                      isActive
                        ? "opacity-100"
                        : "opacity-0 group-hover:opacity-100"
                    }`}
                  >
                    {item.label}
                  </span>
                  <div
                    className={`relative self-end p-2 rounded-lg transition-all duration-300 ${
                      isActive
                        ? "bg-blue-500/20 shadow-[0_0_20px_rgba(59,130,246,0.5)]"
                        : "bg-white/5 group-hover:bg-white/10"
                    }`}
                  >
                    <Icon  size={20} />
                    {isActive && (
                      <div className="absolute inset-0 rounded-lg bg-blue-500/30 animate-pulse" />
                    )}
                  </div>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

