"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import projects from "@/data/projects.json";

export default function Projects() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
  };

  const getLanguageColor = (language: string) => {
    const colors: { [key: string]: string } = {
      JavaScript: "#f7df1e",
      TypeScript: "#3178c6",
      "C#": "#239120",
      Python: "#3776ab",
      HTML: "#e34c26",
      CSS: "#264de4",
      Shell: "#89e051",
      Dockerfile: "#384d54",
      PowerShell: "#012456",
      SCSS: "#c6538c",
      Other: "#8b8b8b",
      "Inno Setup": "#264b99",
    };
    return colors[language] || "#6b7280";
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-black dark:text-white uppercase tracking-tight">
            LASTEST PROJECT
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Showcasing our expertise in building cutting-edge solutions
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={item}
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 overflow-hidden group hover:shadow-xl transition-all"
            >
              {/* Black Header */}
              <div className="h-2 bg-black dark:bg-white" />

              <div className="p-6">
                {/* Project Header */}
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {project.name}
                  </h3>
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 mb-6 line-clamp-3">
                  {project.description}
                </p>

                {/* Languages */}
                <div className="space-y-3">
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                    Tech Stack:
                  </p>
                  <div className="space-y-2">
                    {project.languages.slice(0, 4).map((lang, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <div
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: getLanguageColor(lang.name) }}
                        />
                        <span className="text-sm text-gray-600 dark:text-gray-400 flex-1">
                          {lang.name}
                        </span>
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          {lang.percentage}%
                        </span>
                      </div>
                    ))}
                    {project.languages.length > 4 && (
                      <p className="text-xs text-gray-500 dark:text-gray-500">
                        +{project.languages.length - 4} more
                      </p>
                    )}
                  </div>
                </div>

                {/* View Button */}
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 flex items-center justify-center space-x-2 px-4 py-2 bg-black dark:bg-white text-white dark:text-black font-bold hover:shadow-lg transition-all group uppercase tracking-wide"
                >
                  <span>View Project</span>
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
