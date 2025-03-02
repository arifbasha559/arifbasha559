const Hero = () => {
  return (
    <section className="min-h-[90vh] flex w-full items-center justify-center bg-gradient-to-r from-[#00000061] to-[#00000061] px-5 md:px-10 lg:px-20 text-white">
      <div className="flex flex-col gap-2 font-mono items-center justify-center">
        <h2 className="text-2xl sm:text-5xl text-center font-bold text-white">
          Hello!, <span className="text-cyan-700">I'm</span>
        </h2>
        <h1
          title="ARIF BASHA"
          className="text-6xl sm:text-9xl font-poppins tracking-widest leading-32  text-white"
        >
          ARIF BASHA
        </h1>
        <p className="text-2xl sm:text-5xl text-center font-bold text-white">
          Frontend Developer
        </p>
        <p className="text-sm max-w-2xl text-center text-white">
        With a passion for building modern web applications, I'm a self-taught programmer with a strong foundation in HTML, CSS, JavaScript, React, and Tailwind CSS. I thrive on learning and continuously refining my skills to stay ahead of the latest web development trends. Crafting sleek, responsive, and user-friendly interfaces excites me, and I enjoy experimenting with new technologies to push my capabilities further. When I'm not immersed in code, you’ll find me watching anime, fine-tuning digital projects, or diving into video games.
        </p>
        <div className="flex gap-2 mt-4">
          <a
            href="https://github.com/arifbashar"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black px-4 py-2 rounded-md font-bold"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/arif-basha-58a56a24a/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black px-4 py-2 rounded-md font-bold"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

