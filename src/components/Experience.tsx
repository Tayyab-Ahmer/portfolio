"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Building } from "lucide-react";
import portfolioData from "../data/portfolio.json";

const Experience = () => {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Work Experience
          </h2>
          <div className="w-24 h-1 bg-green-400 mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative items-center"
            >
              {/* Timeline line */}
              {index < experience.length - 1 && (
                <div className="absolute left-8 top-20 w-0.5 h-32 bg-green-400/30"></div>
              )}

              {/* Timeline dot */}
              <div className="md:absolute md:flex hidden left-6 top-8 w-4 h-4 bg-green-400 rounded-full border-4 border-gray-900 pulse-glow"></div>

              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                className="md:ml-16 card-gradient rounded-xl p-8 mb-8 hover:glow-effect transition-all duration-300"
              >
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                  <div className="flex items-center text-green-400">
                    <Building className="w-4 h-4 mr-2" />
                    <span>{exp.company}</span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-6 mb-6 text-gray-400">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{exp.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{exp.location}</span>
                  </div>
                </div>

                <ul className="space-y-3">
                  {exp.responsibilities.map((responsibility, respIndex) => (
                    <motion.li
                      key={respIndex}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: respIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="text-gray-400 flex items-start"
                    >
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>{responsibility}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
