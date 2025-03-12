const About = () => {
  return (
    <>
      <div className="flex w-full h-20 flex-col justify-center items-center relative">
        <h2 className="text-3xl text-white relative inline-block cursor-default after:content-[''] after:block after:w-full after:h-[2.5px] after:bg-[#F34629] after:absolute after:-bottom-1 hover:text-4xl transition-all duration-500 ease-in-out  before:content-['']  before:w-[80%] before:block before:left-1/2 before:-translate-x-1/2  before:h-[2.5px] before:bg-[#F34629] before:absolute before:-bottom-2.5">
          About Me
        </h2>
        {/* <span className="block w-[80%] h-[4px] bg-[#F34629] mt-1"></span> */}
      </div>

      <div className="w-full h-[80vh] m-auto text-gray-300">
        <div className="hero flex flex-col lg:flex-row justify-between items-center gap-0 lg:gap-10 w-4/5 h-4/5 m-auto">
          <div className="left w-full lg:w-1/2">
            <div className="flex w-full h-full p-20 select-none justify-center">
              <img
                src=".\hero-section.jpg"
                className="rounded-lg shadow-[0_0_20px_#F34629] border border-[#F34629] aspect-square object-cover object-top"
                alt=""
              />
            </div>
          </div>
          <div className="right h-1/3 w-full lg:w-1/2 lg:h-full px-5 lg:px-0  flex flex-col justify-center gap-2">
            <h1 className="text-2xl uppercase ">
              <span className="text-[#F34629] ">Designing </span>is My Passion
            </h1>
            <p className="text-lg ">
              I craft engaging and dynamic web experiences by combining design
              and technology. With a passion for clean, modern aesthetics and
              seamless user interactions, I specialize in creating responsive
              websites that leave a lasting impact. Whether it’s designing sleek
              user interfaces, coding front-end solutions, or enhancing user
              experience, I thrive on turning ideas into reality. Always eager
              to explore new trends and innovations, I continuously push the
              boundaries of creativity and functionality.
            </p>
            <div className="btn mt-5 ml-0 lg:ml-10">
              <button className="bg-[#F34629] text-white py-2 px-16 text-lg  rounded-lg">Download CV</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
