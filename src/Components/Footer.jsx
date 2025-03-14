import { FaPhoneAlt } from "react-icons/fa";
import { IoLocation, IoMail} from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="bg-[#F34629] flex flex-col justify-center items-center py-10">
      <div className="flex flex-col lg:flex-row justify-center items-center gap-10 w-full md:w-4/5">
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-2xl text-white font-bold">Contact Me</h2>
          <p className="text-lg text-white">
            <IoLocation className="inline-block mr-2" />
            Bengaluru, Karnataka, India
          </p>
          <p className="text-lg text-white">
            <IoMail className="inline-block mr-2" />
            <a
              href="mailto:arifbasha559@gmail.com"
              className="hover:underline transition-all duration-500 ease-in-out"
            >
              arifbasha559@gmail.com
            </a>
          </p>
          <p className="text-lg text-white">
            <FaPhoneAlt  className="inline-block mr-2" />
            +91 636 606 5599
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-2xl text-white font-bold">Social Media</h2>
          <div className="flex gap-5">
            <a
              href="https://twitter.com/ArifBasha559"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.icons8.com/color/48/000000/twitter.png"
                alt="Twitter"
                className="w-10 h-10"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/arifbasha559/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.icons8.com/color/48/000000/linkedin.png"
                alt="LinkedIn"
                className="w-10 h-10"
              />
            </a>
            <a
              href="https://github.com/arifbasha559"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.icons8.com/color/48/000000/github.png"
                alt="GitHub"
                className="w-10 h-10"
              />
            </a>
          </div>
        </div>
      </div>
      <p className="text-center text-lg text-white mt-10">
        &copy; {new Date().getFullYear()} Arif Basha. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
