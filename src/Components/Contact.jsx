import { useEffect, useRef } from "react";
import { IconContext } from "react-icons";
import { CiMail } from "react-icons/ci";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const formRef = useRef(null);
  const titleRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    // Title animation (Fade-in + Slide-up)
    gsap.from(titleRef.current, {
      y: 50,
      opacity: 0,
      
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 60%",
        end: "bottom 60%",
        scrub: 1,
        toggleActions: "play none none reverse",
      },
    });

    // Form elements animation (Staggered fade-in)
    gsap.from(formRef.current.children, {
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: formRef.current,
        start: "top 80%",
        end: "bottom 80%",
        scrub: 1,
        toggleActions: "play none none reverse",
      },
    });

    // Floating effect for the image
    if (imageRef.current) {
      gsap.to(imageRef.current, {
        y: 10,
        repeat: -1,
        duration: 1,
        yoyo: true,
        filter: "grayScale(0.5)",
        ease: "power1.inOut",
        
      });
    }
  }, []);

  return (
    <div className="w-full min-h-[calc(100vh-90px)]">
      <div className="flex w-full flex-col justify-center items-center relative">
        <h2
          ref={titleRef}
          className="text-3xl mb-10 text-white relative inline-block cursor-default after:content-[''] after:block after:w-full after:h-[2.5px] after:bg-[#F34629] after:absolute after:-bottom-1 hover:text-4xl transition-all duration-500 ease-in-out before:content-[''] before:w-[80%] before:block before:left-1/2 before:-translate-x-1/2 before:h-[2.5px] before:bg-[#F34629] before:absolute before:-bottom-2.5"
        >
          Contact Me
        </h2>
      </div>
      <div className="flex flex-col-reverse w-full lg:flex-row justify-between items-center gap-5 px-5 xs:px-10 md:px-20 py-10">
        <div
          ref={formRef}
          className="w-full lg:w-1/2 bg-black p-10 rounded-lg shadow-[0_0_20px_#F34629]"
        >
          <h1 className="text-3xl font-bold text-white">Get in touch</h1>
          <div className="flex py-5">
            <p className="text-lg text-gray-400 w-3/4 ">
              If you have any questions or just want to say hi, fill out the
              form below.
            </p>
            <span className="w-1/4 flex justify-end">
              <a
                href="mailto:arifbasha559@gmail.com"
                className="inline-flex gap-2 items-center p-3 text-sm rounded-lg size-fit bg-transparent text-[#F34629] hover:text-black border-[#F34629] border-2 hover:border-white ml-2 transition-all duration-500 ease-in-out hover:bg-[#F34629]"
              >
                <IconContext.Provider value={{ className: "text-lg" }}>
                  <CiMail />
                </IconContext.Provider>
              </a>
            </span>
          </div>
          <form className="flex flex-col gap-5">
            <input
              type="text"
              className="bg-transparent border-2 border-[#F34629] px-3 py-2 rounded-lg"
              placeholder="Name"
            />
            <input
              type="email"
              className="bg-transparent border-2 border-[#F34629] px-3 py-2 rounded-lg"
              placeholder="Email"
            />
            <textarea
              className="bg-transparent border-2 border-[#F34629] px-3 py-2 rounded-lg"
              placeholder="Message"
              rows={5}
            ></textarea>
            <button className="bg-[#F34629] text-white px-5 py-2 rounded-lg hover:bg-white hover:text-[#F34629] hover:shadow-[0_0_15px_#F34629] transition-all duration-300 ease-in-out">
              Send
            </button>
          </form>
        </div>
        <div className="w-full hidden lg:flex lg:w-1/2 h-1/2 justify-center">
          <img
            ref={imageRef}
            className="w-1/2 h-full object-cover rounded-full shadow-[0_0_20px_#F34629]"
            src=".\hero-section.jpg"
            alt="me"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
