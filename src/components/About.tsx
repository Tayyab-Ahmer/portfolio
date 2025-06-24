"use client";

import { motion } from "framer-motion";
import { Code, Database, Server, Shield } from "lucide-react";
import portfolioData from "../data/portfolio.json";

const About = () => {
  const { personal } = portfolioData;

  const highlights = [
    {
      icon: <Server className="w-8 h-8" />,
      title: "Backend Architecture",
      description: "Designing scalable and maintainable backend systems",
      color: "text-green-400",
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Database Optimization",
      description: "Optimizing queries and database performance",
      color: "text-blue-400",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security Implementation",
      description: "JWT authentication and role-based access control",
      color: "text-purple-400",
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "API Development",
      description: "RESTful APIs and third-party integrations",
      color: "text-yellow-400",
    },
  ];

  return (
    <section id="about" className="py-20 bg-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-green-400 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-white mb-6">
              Passionate Backend Developer
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              {personal.summary}
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              I specialize in building robust backend systems that power modern
              applications. My expertise spans across fintech&lsquo;
              e-commerce&lsquo; and automation domains where I&lsquo;ve
              successfully delivered scalable solutions that handle complex
              business requirements.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="card-gradient rounded-xl p-6 hover:glow-effect transition-all duration-300"
              >
                <div className={`${highlight.color} mb-4`}>
                  {highlight.icon}
                </div>
                <h4 className="text-white font-semibold text-lg mb-2">
                  {highlight.title}
                </h4>
                <p className="text-gray-400 text-sm">{highlight.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
