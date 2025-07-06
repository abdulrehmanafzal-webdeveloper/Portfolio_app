// src/components/Contact.tsx
import { motion } from "framer-motion";
import { FaWhatsapp, FaEnvelope, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-[60vh] px-6 py-12 bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 flex flex-col items-center justify-center text-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-indigo-600 mb-6"
      >
        Contact Me
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-lg text-gray-700 mb-10 max-w-xl"
      >
        Feel free to reach out via WhatsApp, email, or connect with me on LinkedIn!
      </motion.p>

      <div className="flex flex-col md:flex-row gap-6 items-center">
        {/* WhatsApp Button */}
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="https://wa.me/923269489434" // Replace with your number
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-green-500 text-white px-6 py-3 rounded-xl shadow-md hover:bg-green-600 transition"
        >
          <FaWhatsapp size={20} />
          WhatsApp Me
        </motion.a>

        {/* Gmail Button */}
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="mailto:abdulrehmanafzal546@gmail.com" // Replace with your Gmail
          className="flex items-center gap-3 bg-red-500 text-white px-6 py-3 rounded-xl shadow-md hover:bg-red-600 transition"
        >
          <FaEnvelope size={20} />
          Send Email
        </motion.a>

        {/* LinkedIn Button */}
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="https://www.linkedin.com/in/abdul-rehman-afzal-6a996631b/" // Replace with your LinkedIn profile
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-blue-600 text-white px-6 py-3 rounded-xl shadow-md hover:bg-blue-700 transition"
        >
          <FaLinkedin size={20} />
          LinkedIn
        </motion.a>
      </div>
    </section>
  );
};

export default Contact;
