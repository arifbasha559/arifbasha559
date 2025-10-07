import { Mail, MapPin, Github, Linkedin, Send } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import emailjs from "emailjs-com";

type FormData = {
  from_name: string;
  from_email: string;
  subject: string;
  message: string;
};

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    from_name: "",
    from_email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await emailjs.sendForm(
        "service_93uaucj",
        "template_3tml161",
        e.currentTarget,
        "leN-vMOTExCQK-Dub"
        
      );

      alert("Thank you for your message! I will get back to you soon.");
      setFormData({ from_name: "", from_email: "", subject: "", message: "" });
    } catch (error: unknown) {
      console.error(error.text || error);
      alert("Oops! Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-20 px-6 overflow-hidden"
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-violet-950/10 to-black" />

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-violet-500 mx-auto rounded-full" />
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Have a project in mind or just want to chat? Feel free to reach out!
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact Info */}
          <div
            className={`lg:col-span-2 space-y-6 transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="bg-gradient-to-br from-blue-900/10 to-violet-900/10 rounded-xl p-6 border border-blue-500/20">
              <h3 className="text-2xl font-bold text-white mb-6">
                Contact Information
              </h3>

              <div className="space-y-4">
                <a
                  href="mailto:arifbasha559@gmail.com"
                  className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-violet-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail size={20} className="text-blue-400" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Email</p>
                    <p className="font-medium">arifbasha559@gmail.com</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 text-gray-400">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-violet-500/20 rounded-lg flex items-center justify-center">
                    <MapPin size={20} className="text-blue-400" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Location</p>
                    <p className="font-medium">Tamil Nadu, India</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-blue-500/20">
                <p className="text-white font-semibold mb-4">Follow Me</p>
                <div className="flex gap-3">
                  <a
                    href="https://github.com/ArifBasha559"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gradient-to-br from-blue-500/20 to-violet-500/20 rounded-lg flex items-center justify-center hover:scale-110 transition-transform hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]"
                  >
                    <Github size={20} className="text-blue-400" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/arifbasha559/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gradient-to-br from-blue-500/20 to-violet-500/20 rounded-lg flex items-center justify-center hover:scale-110 transition-transform hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]"
                  >
                    <Linkedin size={20} className="text-blue-400" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={`lg:col-span-3 transition-all duration-1000 delay-400 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-gradient-to-br from-blue-900/10 to-violet-900/10 rounded-xl p-6 md:p-8 border border-blue-500/20"
            >
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <InputField
                  id="name"
                  label="Your Name"
                  name="from_name"
                  value={formData.from_name}
                  placeholder="Arif"
                  onChange={handleChange}
                />
                <InputField
                  id="email"
                  label="Your Email"
                  name="from_email"
                  value={formData.from_email}
                  placeholder="person@example.com"
                  onChange={handleChange}
                />
              </div>

              <InputField
                id="subject"
                label="Subject"
                name="subject"
                value={formData.subject}
                placeholder="Project Inquiry"
                onChange={handleChange}
              />

              <TextAreaField
                id="message"
                label="Message"
                name="message"
                value={formData.message}
                placeholder="Write your message here..."
                onChange={handleChange}
              />

              <SubmitButton isSubmitting={isSubmitting} />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

// Reusable Input Field Component
const InputField = ({
  id,
  label,
  name,
  value,
  placeholder,
  onChange,
}: {
  id: string;
  label: string;
  name: string;
  value: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => (
  <div>
    <label htmlFor={id} className="block text-white font-medium mb-2">
      {label}
    </label>
    <input
      type="text"
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      required
      placeholder={placeholder}
      className="w-full bg-black/30 border border-blue-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
    />
  </div>
);

// Reusable TextArea Component
const TextAreaField = ({
  id,
  label,
  name,
  value,
  placeholder,
  onChange,
}: {
  id: string;
  label: string;
  name: string;
  value: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}) => (
  <div className="mb-6">
    <label htmlFor={id} className="block text-white font-medium mb-2">
      {label}
    </label>
    <textarea
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      rows={6}
      required
      className="w-full bg-black/30 border border-blue-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all resize-none"
    />
  </div>
);

// Submit Button Component
const SubmitButton = ({ isSubmitting }: { isSubmitting: boolean }) => (
  <button
    type="submit"
    disabled={isSubmitting}
    className="w-full bg-gradient-to-r from-blue-500 to-violet-500 rounded-lg px-6 py-4 text-white font-semibold shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:shadow-[0_0_50px_rgba(59,130,246,0.8)] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
  >
    {isSubmitting ? (
      <>
        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
        Sending...
      </>
    ) : (
      <>
        Send Message
        <Send size={20} />
      </>
    )}
  </button>
);
