import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // toggle mobile menu

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 shadow-lg"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-4 py-4 text-white gap-4 md:gap-8">
        <div className="w-full flex justify-between items-center">
          <div className="text-4xl font-extrabold tracking-wide">
            MyPortfolio
          </div>
          {/* Toggle Button for Small Screens */}
          <button
            className="md:hidden text-white text-3xl focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 20 20"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            ) : (
              "☰"
            )}
          </button>
        </div>

        {/* Nav links: hidden on mobile unless isOpen */}
        <div
          className={`w-full md:flex ${
            isOpen ? "flex flex-col" : "hidden"
          } md:flex-row md:items-center text-xl md:w-auto gap-4`}
        >
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={700}
            className="text-white hover:text-yellow-300 transition duration-300 cursor-pointer"
          >
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={700}
            className="text-white hover:text-yellow-300 transition duration-300 cursor-pointer"
          >
            About
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={700}
            className="text-white hover:text-yellow-300 transition duration-300 cursor-pointer"
          >
            Projects
          </Link>
          <Link
            to="skills"
            smooth={true}
            duration={700}
            className="text-white hover:text-yellow-300 transition duration-300 cursor-pointer"
          >
            Skills
          </Link>

          <Link
            to="contact"
            smooth={true}
            duration={700}
            className="text-white hover:text-yellow-300 transition duration-300 cursor-pointer"
          >
            Contact
          </Link>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
