import React from "react";
import { motion } from "framer-motion";

const AboutHeader = () => {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24 text-center">
      <motion.h1
        className="text-4xl sm:text-5xl md:text-6xl font-semibold text-blue-950"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        About Us
      </motion.h1>
    </section>
  );
};

export default AboutHeader;