import { FaInstagram, FaLinkedinIn, FaPhoneAlt, FaTwitter } from "react-icons/fa";
import { IoLocation, IoMail } from "react-icons/io5";
import { SiRefinedgithub } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-[#F34629]  py-10">
      <div className="container mx-auto px-4">
        {/* Main Content */}
        <div className="flex flex-col  md:flex-row justify-between items-center gap-8">
          {/* Contact Information */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <h2 className="text-2xl text-white font-bold mb-4">Contact Me</h2>
            <p className="text-lg text-white flex items-center mb-3">
              <IoLocation className="inline-block mr-2" />
              Ranipet, TamilNadu, India.
            </p>
            <p className="text-lg text-white flex hover:text-black  items-center mb-3">
              <IoMail className="inline-block mr-2" />
              <a
                href="mailto:arifbasha559@gmail.com"
                className="hover:underline transition-all duration-300 ease-in-out"
              >
                arifbasha559@gmail.com
              </a>
            </p>
            <p className="text-lg text-white hover:text-black  flex items-center">
              <FaPhoneAlt className="inline-block mr-2" />
              <a
                href="phone: +91 90872 40634"
                className="hover:underline transition-all duration-300 ease-in-out"
              >
                +91 90872 40634
              </a>
            </p>
          </div>

          {/* Social Media Links */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <h2 className="text-2xl text-white text-center w-full font-bold mb-4">Social Media</h2>
            <div className="flex gap-3">
              <a
                href="https://x.com/ArifBasha559"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-all duration-300 ease-in-out"
              >
                <FaTwitter className="hover:text-blue-500 rounded-lg p-1 w-10 h-10" />
              </a>
              <a
                href="https://github.com/arifbasha559"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-all duration-300 ease-in-out"
              >
                <SiRefinedgithub className=" hover:text-green-500 rounded-lg p-1 w-10 h-10" />
              </a>
              <a
                href="https://www.linkedin.com/in/arifbasha559/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-all duration-300 ease-in-out"
              >
                <FaLinkedinIn className="  hover:text-blue-500 rounded-lg p-1 w-10 h-10" />
              </a>
              <a
                href="https://www.instagram.com/arif_off04/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-all  duration-300 ease-in-out"
              >
                <FaInstagram className="  hover:text-purple-800   rounded-lg p-1 w-10 h-10" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <p className="text-center text-lg text-white mt-10">
          &copy; {new Date().getFullYear()} Arif Basha. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
