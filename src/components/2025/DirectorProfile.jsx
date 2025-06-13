import React from "react";
import { motion } from "framer-motion";

const DirectorProfile = ({ name, title, image, description, reverse }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: reverse ? -50 : 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="container mx-auto px-4 py-12">
      <motion.div
        className={`flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"} items-center bg-white dark:bg-gray-800 shadow-lg p-4 md:p-6 rounded-lg overflow-hidden`}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Image */}
        <motion.div
          className="relative w-full md:w-1/3 h-80 sm:h-96 md:h-80 perspective-1000 mb-4 md:mb-0"
          variants={itemVariants}
        >
          <motion.div
            className="w-full h-full rounded-lg overflow-hidden"
            initial={{ rotateY: 0 }}
            whileHover={{ rotateY: 10, scale: 1.05 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={image}
              alt={`${name}, ${title}`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </motion.div>
          {/* Border Accents */}
          <div className="absolute -top-1 -left-1 w-16 sm:w-24 h-1 bg-yellow-600"></div>
          <div className="absolute -top-1 -left-1 h-16 sm:h-24 w-1 bg-yellow-600"></div>
          <div className="absolute -bottom-1 -right-1 w-16 sm:w-24 h-1 bg-yellow-600"></div>
          <div className="absolute -bottom-1 -right-1 h-16 sm:h-24 w-1 bg-yellow-600"></div>
        </motion.div>

        {/* Details */}
        <motion.div
          className="w-full md:w-2/3 p-4 md:p-6 text-center md:text-left"
          variants={itemVariants}
        >
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-white mb-2">
            {name}
          </h2>
          <p className="text-base sm:text-lg text-gray-800 dark:text-gray-200 mb-4">
            {title}
          </p>
          {description.map((paragraph, index) => (
            <motion.p
              key={index}
              className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-3"
              variants={itemVariants}
            >
              {paragraph}
            </motion.p>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default DirectorProfile;