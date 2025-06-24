"use client";

import { motion } from "framer-motion";
import { Server, Database, Cloud, PenToolIcon as Tool } from "lucide-react";
import portfolioData from "../data/portfolio.json";

const Skills = () => {
  const { skills } = portfolioData;

  const skillCategories = [
    {
      title: "Backend Technologies",
      icon: <Server className="w-6 h-6" />,
      skills: skills.backend,
      color: "text-green-400",
      bgColor: "bg-green-400/10",
    },
    {
      title: "Databases",
      icon: <Database className="w-6 h-6" />,
      skills: skills.databases,
      color: "text-blue-400",
      bgColor: "bg-blue-400/10",
    },
    {
      title: "Cloud & Deployment",
      icon: <Cloud className="w-6 h-6" />,
      skills: skills.cloud,
      color: "text-purple-400",
      bgColor: "bg-purple-400/10",
    },
    {
      title: "Tools & Technologies",
      icon: <Tool className="w-6 h-6" />,
      skills: skills.tools,
      color: "text-yellow-400",
      bgColor: "bg-yellow-400/10",
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-green-400 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="card-gradient rounded-xl p-8 hover:glow-effect transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div
                  className={`p-3 rounded-lg ${category.bgColor} ${category.color} mr-4`}
                >
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-white">
                  {category.title}
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, x: 5 }}
                    className="bg-white/5 rounded-lg p-3 border border-white/10 hover:border-green-400/30 transition-all duration-200"
                  >
                    <span className="text-gray-300 font-medium">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
