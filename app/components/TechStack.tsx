"use client";

import { motion } from "framer-motion";
import techstack from "@/data/techstack.json";

export default function TechStack() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1 },
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Tech Stack
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Modern technologies we use to build exceptional products
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-6"
        >
          {techstack.map((tech) => (
            <motion.div
              key={tech.id}
              variants={item}
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="glass px-8 py-4 rounded-lg"
            >
              <div className="text-center">
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                  {tech.name}
                </h4>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  {tech.category}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
