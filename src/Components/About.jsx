import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const commonScrollTrigger = {
      trigger: aboutRef.current,
      start: "top 100%",
      end: "bottom 50%",
      toggleActions: "play none none reverse",
      scrub: 3,
      startAt: { y:   80 },
    };

    // Animation for the "About Me" heading
    gsap.from(aboutRef.current, {
      opacity: 0,
      y: 100,
      duration: 1,
      scrollTrigger: commonScrollTrigger,
    });

    // Animation for the image
    gsap.from(imageRef.current, {
      opacity: 0,
      x: -150,
      y: 50,
      duration: 1,
      scrollTrigger: {
        ...commonScrollTrigger,
        trigger: imageRef.current,
      },
    });

    // Animation for the text content
    gsap.from(textRef.current.children, {
      opacity: 0,
      y: 50,
      stagger: 0.3,
      duration: 1,
      scrollTrigger: {
        ...commonScrollTrigger,
        trigger: textRef.current,
      },
    });

    // Animation for the button
    gsap.from(buttonRef.current, {
      // opacity: 1,
      visibility: "invisible",
      top: 50,
      duration: 1,
      scrollTrigger: {
        ...commonScrollTrigger,
        end: "bottom 60%",
        trigger: buttonRef.current,
      },
    });
  }, []);

  return (
    <div>
      <div
        id="about"
        ref={aboutRef}
        className="flex w-full flex-col justify-center items-center relative "
      >
        <h2 className="text-3xl text-white relative inline-block cursor-default after:content-[''] after:block after:w-full after:h-[2.5px] after:bg-[#F34629] after:absolute after:-bottom-1 hover:text-4xl transition-all duration-500 ease-in-out before:content-[''] before:w-[80%] before:block before:left-1/2 before:-translate-x-1/2 before:h-[2.5px] before:bg-[#F34629] before:absolute before:-bottom-2.5">
          About Me
        </h2>
      </div>

      <div className="w-full min-h-[80vh] m-auto text-gray-300">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-5 w-11/12 lg:w-4/5 h-full m-auto">
          <div className="w-full lg:w-1/2">
            <div className="flex w-full h-full p-10 lg:p-20 select-none justify-center">
              <img
                ref={imageRef}
                src=".\hero-section.jpg"
                className="rounded-lg hover:shadow-[0_0_25px_#F34629] hover:scale-[102%] shadow-[0_0_20px_#F34629] border border-[#F34629] aspect-square object-cover object-top w-1/2 lg:w-auto"
                alt=""
              />
            </div>
          </div>
          <div
            ref={textRef}
            className="w-full lg:w-1/2 lg:h-full px-5 lg:px-0 flex flex-col justify-center gap-3"
          >
            <h1 className="text-2xl lg:text-3xl uppercase">
              <span className="text-[#F34629]">Coding </span>is My Passion
            </h1>
            <p className="text-base lg:text-lg leading-relaxed">
              I craft engaging and dynamic web experiences by combining design
              and technology. With a passion for clean, modern aesthetics and
              seamless user interactions, I specialize in creating responsive
              websites that leave a lasting impact. Whether it’s designing sleek
              user interfaces, coding front-end solutions, or enhancing user
              experience, I thrive on turning ideas into reality.
            </p>
            <div className="" ref={buttonRef}>
              <button
                className="bg-[#F34629] text-white py-2 px-8 mb-10 lg:px-16 text-lg rounded-lg hover:bg-[#e63a1f] cursor-pointer transition-colors duration-300"
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/path/to/Arifs resume.pdf'; // Replace with the actual path to your PDF
                  link.download = 'Arif_Basha_CV.pdf'; // Replace with the desired file name
                  link.click();
                }}
              >
                Download CV
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;