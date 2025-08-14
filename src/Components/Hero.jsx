import { IconContext } from "react-icons";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  



  return (
    <div
      className="hero flex flex-col lg:flex-row justify-between items-center gap-0 lg:gap-10 w-full min-h-[95vh] lg:min-h-[calc(100vh-90px)]"
    >
      
      <div className="left h-1/3 w-full lg:w-1/2 md:h-full my-auto ">
        <div className="flex w-full px-20 h-3/4 select-none justify-center ">
          <img
            src=".\\hero-section.jpg"
            className="rounded-full md:max-w-2/4  lg:max-w-2/3 shadow-[0_0_25px_#F34629]"
            alt="Arif Basha profile photo"
            loading="lazy"
          />
        </div>
      </div>

      <div
        
        className="right h-2/3 w-full lg:w-1/2 lg:h-full px-5 lg:px-0 text-2xl flex flex-col justify-center gap-2"
      >
        <div className="flex flex-col justify-center gap-2">
          
        <h1 className="text-2xl">
          Hi, It&apos;s{" "}
          <span className="text-[#E63A1F] font-semibold">Arif Basha</span>
        </h1>
        <h2 className="text-3xl font-medium">
          I&apos;m a{" "}
          <span className="border-[#E63A1F] border-r-4 pr-1 text-[#E63A1F] blinking-border text-wrap">
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
              
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1000}
              />
          </span>
        </h2>
        <p className="text-lg w-3/4">
          I create engaging web experiences with a focus on modern design and
          seamless user interactions.{" "}
          <span className="hidden lg:inline">
            Passionate about clean aesthetics and functionality, I specialize in
            responsive websites that leave a lasting impact. Constantly
            exploring new trends, I push the boundaries of creativity and
            innovation.
          </span>
        </p>
              </div>

        <div className=" flex gap-5 mt-4 p-4 overflow-x-hidden">
          {[
            {
              icon: <FaLinkedin />,
              link: "https://www.linkedin.com/in/arifbasha559/",
            },
            {
              icon: <FaGithub />,
              link: "https://www.github.com/Arifbasha559/",
            },
            { icon: <FaXTwitter />, link: "https://www.x.com/arifbasha559/" },
           
          ].map(({ icon, link }, index) => (
            <a
              key={index}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn hover:bg-[#E63A1F] hover:text-black hover:shadow-[0_0_25px_#F34629] text-[#E63A1F] border-[#E63A1F] border p-2.5 rounded-full "
            >
              <IconContext.Provider value={{ className: "text-3xl" }}>
                {icon}
              </IconContext.Provider>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
