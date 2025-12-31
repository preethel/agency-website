"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import reviews from "@/data/reviews.json";

export default function Reviews() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 },
  };

  return (
    <section id="testimonials" className="py-20 bg-black dark:bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white uppercase tracking-tight">
            WHAT OUR CLIENT SAYS
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            What our clients say about working with us
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {reviews.map((review) => (
            <motion.div
              key={review.id}
              variants={item}
              whileHover={{ scale: 1.05 }}
              className="bg-white dark:bg-gray-900 border border-gray-800 dark:border-gray-700 p-8"
            >
              {/* Stars */}
              <div className="flex space-x-1 mb-4">
                {[...Array(review.rating)].map((_, idx) => (
                  <Star
                    key={idx}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-700 dark:text-gray-300 mb-6 italic">
                &quot;{review.review}&quot;
              </p>

              {/* Client Info */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-black dark:bg-white flex items-center justify-center">
                  <span className="text-white dark:text-black font-bold">{review.initials}</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white">
                    {review.name}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {review.position}, {review.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
