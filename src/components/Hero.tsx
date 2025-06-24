"use client";

import { motion } from "framer-motion";
import {
  ArrowDown,
  Github,
  Linkedin,
  Mail,
  Phone,
  Code,
  Server,
  Database,
} from "lucide-react";
import portfolioData from "../data/portfolio.json";

const Hero = () => {
  const { personal } = portfolioData;

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-green-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-green-500/3 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-20"
        >
          <div className=" md:flex gap-32 items-center">
            {/* Code Block */}
            <div className="text-left w-full">
              <motion.h1
                className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-400 to-blue-600 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                {personal.name}
              </motion.h1>

              <motion.h2
                className="text-2xl md:text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-red-500 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                {personal.title}
              </motion.h2>

              <motion.p
                className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                {personal.summary}
              </motion.p>
            </div>
            <div>
              {/* Tech Icons */}
              <motion.div
                className="flex justify-center space-x-8 mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className="p-4 card-gradient rounded-xl floating-animation"
                >
                  <Server className="w-8 h-8 text-green-400" />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.2, rotate: -5 }}
                  className="p-4 card-gradient rounded-xl floating-animation"
                  style={{ animationDelay: "1s" }}
                >
                  <Database className="w-8 h-8 text-blue-400" />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className="p-4 card-gradient rounded-xl floating-animation"
                  style={{ animationDelay: "2s" }}
                >
                  <Code className="w-8 h-8 text-purple-400" />
                </motion.div>
              </motion.div>

              {/* Social Links */}
              <motion.div
                className="flex justify-center space-x-6 mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
              >
                <motion.a
                  href={`mailto:${personal.email}`}
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-4 card-gradient rounded-xl hover:glow-effect transition-all duration-300"
                >
                  <Mail className="w-6 h-6 text-green-400" />
                </motion.a>
                <motion.a
                  href={personal.linkedin}
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-4 card-gradient rounded-xl hover:glow-effect transition-all duration-300"
                >
                  <Linkedin className="w-6 h-6 text-blue-400" />
                </motion.a>
                <motion.a
                  href={personal.github}
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-4 card-gradient rounded-xl hover:glow-effect transition-all duration-300"
                >
                  <Github className="w-6 h-6 text-gray-300" />
                </motion.a>
                <motion.a
                  href={`tel:${personal.phone}`}
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-4 card-gradient rounded-xl hover:glow-effect transition-all duration-300"
                >
                  <Phone className="w-6 h-6 text-purple-400" />
                </motion.a>
              </motion.div>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.8 }}
          >
            <motion.a
              href="#about"
              className="inline-flex items-center text-gray-400 hover:text-green-400 transition-colors duration-200"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              <ArrowDown size={24} />
              <span className="ml-2">Explore my work</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
