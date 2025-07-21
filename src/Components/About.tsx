// src/components/About.tsx
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-[80vh] px-6 py-12 bg-white text-gray-800 flex flex-col items-center justify-center text-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-6 text-indigo-600"
      >
        About Me
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-3xl text-lg md:text-xl text-gray-700"
      >
        I'm a MERN Stack & FastAPI developer with expertise in MongoDB, Express,
        React, Node.js, and MySQL. I'm also exploring Machine Learning with
        Python and enjoy building scalable full-stack web applications while
        constantly expanding my technical skill set.
      </motion.p>

      <motion.ul
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-8 space-y-3 text-left max-w-md"
      >
        <li>🚀 1+ year experience building full-stack web apps</li>
        <li>💻 Strong focus on performance and UX</li>
        <li>🎯 Familiar with Git, Vite, MongoDB, Express.js</li>
        <li>📚 Always learning and growing</li>
      </motion.ul>
    </section>
  );
};

export default About;
