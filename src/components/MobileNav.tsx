import { Home, User, Briefcase, Code,  Mail, Menu, X } from 'lucide-react';
import { useState } from 'react';

const navItems = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'about', label: 'About', icon: User },
  { id: 'projects', label: 'Projects', icon: Briefcase },
  { id: 'skills', label: 'Skills', icon: Code },
 
  { id: 'contact', label: 'Contact', icon: Mail },
];

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-6 right-6 z-50 p-3 bg-blue-500/20 backdrop-blur-lg rounded-full border border-blue-500/30 text-white hover:bg-blue-500/30 transition-all duration-300 shadow-[0_0_20px_rgba(59,130,246,0.3)]"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40"
            onClick={() => setIsOpen(false)}
          />
          <nav className="fixed top-20 right-6 z-50 bg-black/90 backdrop-blur-lg border border-blue-500/30 rounded-2xl p-6 min-w-[200px]">
            <ul className="space-y-4">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-300 w-full"
                    >
                      <div className="p-2 bg-white/5 rounded-lg hover:bg-blue-500/20 transition-all duration-300">
                        <Icon size={20} />
                      </div>
                      <span className="text-sm font-medium">{item.label}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>
        </>
      )}
    </div>
  );
}
