import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const Banner = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section
      className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" aria-hidden="true"></div>

      {/* Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Page Title */}
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl font-poppins font-semibold mb-4"
          variants={itemVariants}
        >
          About Us
        </motion.h1>

        {/* Breadcrumb */}
        <motion.nav
          className="flex items-center gap-2 text-sm sm:text-base font-poppins"
          aria-label="Breadcrumb"
          variants={itemVariants}
        >
          <NavLink
            to="/"
            className="hover:text-[#ed8161] transition-colors duration-300"
            aria-label="Home"
          >
            Home
          </NavLink>
          <span className="text-gray-300">/</span>
          <span className="text-[#ed8161]">About</span>
        </motion.nav>
      </motion.div>
    </section>
  );
};

export default Banner;