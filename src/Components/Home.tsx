import { motion } from "framer-motion";
import heroImage from "../assets/capture.jpg";
import cv from "../assets/Contact Information - Resume.pdf";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-[90vh] flex flex-col-reverse md:flex-row justify-center items-center text-center md:text-left px-6 py-8 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 md:ml-20"
    >
      {/* Text Content */}
      <div className="md:w-1/2 mt-10 md:mt-0">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold text-gray-800"
        >
          Hey, I’m Abdul Rehman
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-4 text-lg md:text-xl text-gray-600 max-w-xl"
        >
          I’m a passionate MERN Stack & FastAPI Developer exploring Machine
          Learning with Python. Proficient in building modern web apps using
          MongoDB, Express, React, Node.js, TypeScript, Tailwind CSS, and MySQL.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
        >
          <button
            className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl shadow-md hover:bg-indigo-700 transition duration-300"
          >
            📂 View My Work
          </button>

          <a
            href={cv} // ✅ Use imported PDF file here
            download
            className="px-6 py-3 bg-white text-indigo-600 font-semibold border border-indigo-600 rounded-xl shadow-md hover:bg-indigo-50 transition duration-300"
          >
            📄 Download CV
          </a>
        </motion.div>
      </div>

      {/* Profile Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex justify-center w-full md:w-1/2 mt-15 md:mb-0"
      >
        <img
          src={heroImage}
          alt="Abdul Rehman"
          className="w-60 h-auto max-h-80 md:w-80 md:h-80 object-cover rounded-full border-4 border-white shadow-lg"
        />
      </motion.div>
    </section>
  );
};

export default Home;
