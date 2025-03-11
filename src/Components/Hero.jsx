import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

// Desc: Hero component for the landing page
const Hero = () => {
  return (
    <div className="hero flex flex-col lg:flex-row justify-between items-center gap-10 w-full h-[calc(100vh-90px)]">
      <div className="left h-1/2 w-full lg:w-1/2 lg:h-full">
        <div className="flex w-full h-full p-20 select-none justify-center">
          <img src=".\hero-section.jpg" className="rounded-full shadow-[0_0_25px_#F34629]" alt=""  />
        </div>
      </div>
      <div className="right h-1/2 w-full lg:w-1/2 lg:h-full px-5 lg:px-0 text-2xl flex flex-col justify-center gap-2">
        <h1 className="text-4xl font-bold">
          Hi, It&apos;s <span className="text-[#F34629] ">Arif Basha</span>
        </h1>
        <h2 className="text-2xl font-medium  ">
          I&apos;m a{" "}
          <span className="border-[#F34629] border-r-4 pr-1 text-[#F34629] blinking-border text-wrap">
            <Typewriter
              words={[
                "Student",
                "UX/UI Designer",
                "Frontend Developer",
                "Tech Enthusiast!",
              ]}
              loop={false}
              cursorStyle="|"
              cursorColor="#F34629"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h2>
        <p className="text-lg">
          {/* I craft engaging and dynamic web experiences by combining design and technology. With a passion for clean, modern aesthetics and seamless user interactions, I specialize in creating responsive websites that leave a lasting impact. Whether it’s designing sleek user interfaces, coding front-end solutions, or enhancing user experience, I thrive on turning ideas into reality. Always eager to explore new trends and innovations, I continuously push the boundaries of creativity and functionality.         */}
          I create engaging web experiences with a focus on modern design and
          seamless user interactions. Passionate about clean aesthetics and
          functionality, I specialize in responsive websites that leave a
          lasting impact. Constantly exploring new trends, I push the boundaries
          of creativity and innovation.
        </p>
        <div className="btn flex gap-5 mt-4">
          <Link  to="https://www.linkedin.com/in/arifbasha559/" className="btn hover:bg-[#F34629] hover:text-black hover:shadow-[0_0_25px_#F34629] text-[#F34629] border-[#F34629] border p-2 rounded-full ">
            <FaLinkedin />
          </Link>
          <Link  to="https://www.github.com/Arifbasha559/" className="btn hover:bg-[#F34629] hover:text-black hover:shadow-[0_0_25px_#F34629] text-[#F34629] border-[#F34629] border p-2 rounded-full">
            <FaGithub />
          </Link>
          <Link  to="https://x.com/in/arifbasha559/" className="btn hover:bg-[#F34629] hover:text-black hover:shadow-[0_0_25px_#F34629] text-[#F34629] border-[#F34629] border p-2 rounded-full">
            <FaXTwitter />
          </Link>
          <Link  to="https://www.instagram.com/arif_off04/" className="btn hover:bg-[#F34629] hover:text-black hover:shadow-[0_0_25px_#F34629] text-[#F34629] border-[#F34629] border p-2 rounded-full">
            <FaInstagram />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
