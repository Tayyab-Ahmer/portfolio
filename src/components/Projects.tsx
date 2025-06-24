"use client";

import { motion } from "framer-motion";
import portfolioData from "../data/portfolio.json";

const Projects = () => {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-20 bg-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-green-400 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="card-gradient rounded-xl overflow-hidden hover:glow-effect transition-all duration-300 group"
            >
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors duration-200">
                  {project.name}
                </h3>

                <p className="text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-green-400/10 text-green-400 rounded-full text-sm border border-green-400/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* <div className="flex space-x-4">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    <span>Code</span>
                  </motion.button>
                </div> */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
