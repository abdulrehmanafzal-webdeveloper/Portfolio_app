// src/components/Skills.tsx
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaGithub,
  FaJsSquare, // ✅ Import JavaScript icon
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiMysql,
  SiTypescript,
  SiSharp,
} from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact className="text-sky-500" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
  { name: "Express.js", icon: <SiExpress className="text-black" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-700" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJsSquare className="text-yellow-500" /> }, // ✅ Added JavaScript
  { name: "TypeScript", icon: <SiTypescript className="text-blue-700" /> },
  { name: "Python", icon: <FaPython className="text-yellow-500" /> },
  { name: "GitHub", icon: <FaGithub className="text-gray-800" /> },
  { name: "C#", icon: <SiSharp className="text-purple-700" /> },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-[80vh] px-6 py-12 bg-gray-100 text-gray-800 flex flex-col items-center justify-center text-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-6 text-indigo-600 text-center"
      >
        Skills & Experience
      </motion.h2>

      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left: Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 flex flex-col items-center gap-3"
            >
              <div className="text-4xl">{skill.icon}</div>
              <p className="text-base font-medium">{skill.name}</p>
            </motion.div>
          ))}
        </div>

        {/* Right: Experience Info */}
        <div className="flex flex-col gap-8 justify-center">
          <div>
            <p className="text-indigo-600 font-semibold text-sm">2024 – Continue</p>
            <h4 className="text-lg font-bold">Web Developer (React JS)</h4>
            <p className="text-sm text-gray-600">Self-Learning / Freelance</p>
          </div>
          <div>
            <p className="text-indigo-600 font-semibold text-sm">2024 – Continue</p>
            <h4 className="text-lg font-bold">BS Software Engineering</h4>
            <p className="text-sm text-gray-600">NTU – National Textile University</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
