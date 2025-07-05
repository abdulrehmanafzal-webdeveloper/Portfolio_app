import { motion } from "framer-motion";
import heroImage from "../assets/capture.jpg";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-[90vh] flex flex-col-reverse md:flex-row justify-center items-center text-center md:text-left px-6 py-8 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 md:ml-15"
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
          I’m a front-end developer passionate about building modern, beautiful
          web apps using React, Tailwind & TypeScript.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl shadow-md hover:bg-indigo-700 transition duration-300"
        >
          📂 View My Work
        </motion.button>
      </div>

      {/* Profile Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex justify-center w-full md:w-1/2 mb-6 md:mb-0"
      >
        <img
          src={heroImage}
          alt="Abdul Rehman"
          className="w-60 h-auto mt:10 max-h-80 md:w-80 md:h-80 object-cover rounded-full border-4 border-white shadow-lg"
        />
      </motion.div>
    </section>
  );
};

export default Home;
