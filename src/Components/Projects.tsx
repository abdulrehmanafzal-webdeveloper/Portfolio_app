import { useState } from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { FaGithub, FaPlay } from "react-icons/fa";
import note from "../assets/capture1.jpg";
import news from "../assets/capture2.jpg";
import cag from "../assets/cag.jpg";

// All project data
const allProjects = [
  {
    title: "Note App",
    description: "A MERN stack note-taking app with login, notes, and MongoDB storage.",
    image: note,
    videoLink: "https://www.loom.com/share/803da4999e444269af36009747abf17d?sid=002818d1-8834-4e2e-b301-9162a3ba8665",
    codeLink: "https://github.com/abdulrehmanafzal-webdeveloper/Note-app",
  },
  {
    title: "News App",
    description: "A news app made using React, Tailwind and Bootstrap",
    image: news,
    videoLink: "https://www.loom.com/share/9010d1a44f7c4b87b946e9224cb70aef?sid=8dd8c8a8-773f-420a-8c42-200741b3892c",
    codeLink: "https://github.com/abdulrehmanafzal-webdeveloper/News-app",
  },
  {
  title: "CAG API (FastAPI + AI)",
  description: "A FastAPI-powered Conversational AI Gateway with endpoints to append, delete, query, and list AI-based user prompts. Includes UUID-based document storage and OpenAI integration for intelligent responses.",
  image: cag, // replace this with your actual image import
  videoLink: "https://www.loom.com/share/432c9ce894e0435eb1176306c2ded8de?sid=28e6d91a-8b73-4878-9886-168e52f95058", // replace with your actual Loom video
  codeLink: "https://github.com/abdulrehmanafzal-webdeveloper/CAG-project", // adjust if repo URL is different
}

];

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? allProjects : allProjects.slice(0, 2);

  return (
    <section
      id="projects"
      className="min-h-screen px-6 py-12 bg-gray-50 text-gray-800 flex flex-col items-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-10 text-indigo-600 text-center"
      >
        My Creative Projects
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full">
        {visibleProjects.map((project, index) => (
          <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.05} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden object-contain  hover:shadow-2xl transition duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
                <p className="text-gray-600 text-sm mt-2">{project.description}</p>
                <div className="flex gap-4 mt-4">
                  {project.videoLink && (
                    <a
                      href={project.videoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-800 font-medium"
                    >
                      Demo <FaPlay />
                    </a>
                  )}
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-gray-800 hover:text-black font-medium"
                  >
                    Code <FaGithub />
                  </a>
                </div>
              </div>
            </motion.div>
          </Tilt>
        ))}
      </div>

      {!showAll && (
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowAll(true)}
          className="mt-10 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl shadow-md hover:bg-indigo-700 transition duration-300 cursor-pointer"
        >
          Show More Projects
        </motion.button>
      )}
    </section>
  );
};

export default Projects;
