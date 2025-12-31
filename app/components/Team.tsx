"use client";

import team from "@/data/team.json";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import NextImage from "next/image";

export default function Team() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1 },
  };

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="team" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-4xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-black dark:text-white leading-tight uppercase">
            WE&apos;RE A TEAM OF CREATIVES AND STRATEGISTS BUILDING BOLD BRANDS AND DIGITAL EXPERIENCES. FROM STARTUPS TO LEADERS — <span className="border-b-4 border-black dark:border-white">YOUR SUCCESS IS OUR MISSION</span>.
          </h2>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToContact}
            className="px-8 py-4 bg-black dark:bg-white text-white dark:text-black font-bold rounded-none shadow-lg hover:shadow-xl transition-all flex items-center space-x-3 uppercase tracking-wider mx-auto"
          >
            <span>CONSULT NOW</span>
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-2 gap-6 max-w-3xl mx-auto mt-16"
        >
          {team.slice(0, 4).map((member) => (
            <motion.div
              key={member.id}
              variants={item}
              className="relative aspect-square bg-gray-200 dark:bg-gray-800 overflow-hidden group cursor-pointer"
            >
              {/* Avatar with initials or Image */}
              {member.image ? (
                <div className="relative w-full h-full">
                  <NextImage
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-300 to-gray-400 dark:from-gray-700 dark:to-gray-800">
                  <span className="text-6xl font-bold text-black dark:text-white">
                    {member.initials}
                  </span>
                </div>
              )}

              {/* Info Overlay */}
              <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white translate-y-4 group-hover:translate-y-0 transform transition-transform">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-sm text-gray-300 mb-3 font-medium">{member.title}</p>
                <div className="flex flex-wrap gap-2 mb-2">
                  {member.skills.slice(0, 3).map((skill, idx) => (
                    <span key={idx} className="text-xs bg-white/20 px-2 py-1 rounded backdrop-blur-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
