import React from "react";
import { motion } from "framer-motion";
import { FaClipboard, FaLayerGroup, FaUserTie } from "react-icons/fa";

const features = [
  {
    id: 1,
    title: "Hassle-Free Transactions",
    description:
      "Enjoy transparent processes and personalized support, making your real estate journey smooth and rewarding.",
    icon: FaClipboard,
  },
  {
    id: 2,
    title: "Wide Range of Properties",
    description:
      "Discover your dream property from our extensive portfolio, including residential, commercial, and investment opportunities.",
    icon: FaLayerGroup,
  },
  {
    id: 3,
    title: "Expert Guidance",
    description:
      "Our experienced agents provide personalized assistance, ensuring a smooth and hassle-free real estate journey.",
    icon: FaUserTie,
  },
];

// Animation variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.4,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const iconVariants = {
  rest: { scale: 1, filter: "drop-shadow(0 0 0 transparent)" },
  hover: {
    scale: 1.2,
    filter: "drop-shadow(0 0 8px #f59e0b)", // yellow-orange glow
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

const WhyChooseUs = () => {
  return (
    <section className="bg-white dark:bg-[#111] py-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <motion.h2
          className="text-4xl font-bold text-blue-950 dark:text-white font-averia relative inline-block"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Why Choose Us
          <motion.span
            className="block h-1 w-20 bg-yellow-500 mt-2 mx-auto rounded"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.9 }}
            style={{ transformOrigin: "left" }}
          />
        </motion.h2>
        <p className="mt-4 max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
          Discover the advantages that make us the best choice for your real estate needs.
        </p>
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {features.map(({ id, title, description, icon: Icon }) => (
          <motion.div
            key={id}
            className="bg-white dark:bg-[#222] rounded-xl shadow-md p-8 cursor-pointer select-none"
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              className="text-yellow-500 mb-6 flex justify-center"
              variants={iconVariants}
              initial="rest"
              whileHover="hover"
              animate="rest"
            >
              <Icon className="text-7xl" />
            </motion.div>
            <h3 className="text-xl font-semibold text-blue-950 dark:text-white mb-3 text-center">
              {title}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-center leading-relaxed">
              {description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default WhyChooseUs;
