import React from "react";
import { motion } from "framer-motion";
import { FaLowVision, FaFlag, FaTrophy, FaBuilding } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const CompanyOverview = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: (index) => (index % 2 === 0 ? -50 : 50) }, // Slide in from left/right
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -45 },
    visible: { scale: 1, rotate: 0, transition: { duration: 0.6, ease: "easeOut", type: "spring", stiffness: 120 } },
  };

  const underlineVariants = {
    hidden: { width: "0%" },
    visible: { width: "50%", transition: { duration: 1, ease: "easeOut" } },
  };

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-16 md:py-20 dark:bg-gray-900 font-poppins relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "radial-gradient(circle, #ed8161 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
        aria-hidden="true"
      ></div>

      {/* Heading with Gradient Text and Animated Underline */}
      <motion.div
        className="text-center mb-12 md:mb-16"
        initial="hidden"
        animate="visible"
      >
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold bg-gradient-to-r from-[#ed8161] to-[#c75c45] bg-clip-text text-transparent relative inline-block">
          About Inheritance Infrastructure
          <motion.span
            className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-[#ed8161] to-[#c75c45]"
            variants={underlineVariants}
          ></motion.span>
        </h2>
      </motion.div>

      {/* Cards Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Overview Card */}
        <motion.article
          className="relative bg-white dark:bg-gray-800 rounded-xl p-6 md:p-8 shadow-lg transition-all duration-500 border border-transparent hover:border-[#ed8161]/50 hover:shadow-2xl group"
          variants={cardVariants}
          custom={0}
          whileHover={{ scale: 1.05, rotate: 1 }}
        >
          <motion.div
            variants={iconVariants}
            className="text-5xl md:text-6xl mb-4 bg-gradient-to-r from-[#ed8161] to-[#c75c45] bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300"
          >
            <FaBuilding />
          </motion.div>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-blue-950 dark:text-white mb-4">Our Company</h3>
          <p className="text-gray-800 dark:text-gray-100 text-base sm:text-lg md:text-xl">
            Inheritance Infrastructure Private Limited is a dynamic real estate company focused on premium land investments. Built on trust and excellence, we develop well-planned residential and commercial plots in high-potential locations.
          </p>
          <NavLink
            to="/about"
            className="inline-block mt-4 text-[#ed8161] hover:text-[#c75c45] font-semibold transition-colors duration-300 text-base sm:text-lg md:text-xl"
            aria-label="Learn more about our company"
          >
            Learn More
          </NavLink>
          {/* Shine Effect on Hover */}
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -skew-x-12 pointer-events-none"></div>
        </motion.article>

        {/* Vision Card */}
        <motion.article
          className="relative bg-white dark:bg-gray-800 rounded-xl p-6 md:p-8 shadow-lg transition-all duration-500 border border-transparent hover:border-[#ed8161]/50 hover:shadow-2xl group"
          variants={cardVariants}
          custom={1}
          whileHover={{ scale: 1.05, rotate: 1 }}
        >
          <motion.div
            variants={iconVariants}
            className="text-5xl md:text-6xl mb-4 bg-gradient-to-r from-[#ed8161] to-[#c75c45] bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300"
          >
            <FaLowVision />
          </motion.div>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-blue-950 dark:text-white mb-4">Vision</h3>
          <p className="text-gray-800 dark:text-gray-100 text-base sm:text-lg md:text-xl">
            To be a trusted leader in real estate by creating sustainable, future-ready communities that enhance quality of life and deliver lasting value to our customers and stakeholders.
          </p>
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -skew-x-12 pointer-events-none"></div>
        </motion.article>

        {/* Mission Card */}
        <motion.article
          className="relative bg-white dark:bg-gray-800 rounded-xl p-6 md:p-8 shadow-lg transition-all duration-500 border border-transparent hover:border-[#ed8161]/50 hover:shadow-2xl group"
          variants={cardVariants}
          custom={2}
          whileHover={{ scale: 1.05, rotate: 1 }}
        >
          <motion.div
            variants={iconVariants}
            className="text-5xl md:text-6xl mb-4 bg-gradient-to-r from-[#ed8161] to-[#c75c45] bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300"
          >
            <FaFlag />
          </motion.div>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-blue-950 dark:text-white mb-4">Mission</h3>
          <ul className="text-gray-800 dark:text-gray-100 text-sm sm:text-base md:text-lg space-y-3">
            <li className="flex items-start">
              <span className="text-[#ed8161] mr-2">•</span> Deliver high-quality spaces with modern infrastructure.
            </li>
            <li className="flex items-start">
              <span className="text-[#ed8161] mr-2">•</span> Ensure transparency and customer satisfaction.
            </li>
            <li className="flex items-start">
              <span className="text-[#ed8161] mr-2">•</span> Promote sustainable, eco-friendly development.
            </li>
            <li className="flex items-start">
              <span className="text-[#ed8161] mr-2">•</span> Innovate with new trends and technologies.
            </li>
            <li className="flex items-start">
              <span className="text-[#ed8161] mr-2">•</span> Uphold ethical business practices.
            </li>
          </ul>
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -skew-x-12 pointer-events-none"></div>
        </motion.article>

        {/* Core Values Card */}
        <motion.article
          className="relative bg-white dark:bg-gray-800 rounded-xl p-6 md:p-8 shadow-lg transition-all duration-500 border border-transparent hover:border-[#ed8161]/50 hover:shadow-2xl group"
          variants={cardVariants}
          custom={3}
          whileHover={{ scale: 1.05, rotate: 1 }}
        >
          <motion.div
            variants={iconVariants}
            className="text-5xl md:text-6xl mb-4 bg-gradient-to-r from-[#ed8161] to-[#c75c45] bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300"
          >
            <FaTrophy />
          </motion.div>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-blue-950 dark:text-white mb-4">Core Values</h3>
          <ul className="text-gray-800 dark:text-gray-100 text-sm sm:text-base md:text-lg space-y-3">
            <li className="flex items-start">
              <span className="text-[#ed8161] mr-2">✔</span> Integrity & Transparency
            </li>
            <li className="flex items-start">
              <span className="text-[#ed8161] mr-2">✔</span> Customer Satisfaction
            </li>
            <li className="flex items-start">
              <span className="text-[#ed8161] mr-2">✔</span> Quality & Innovation
            </li>
            <li className="flex items-start">
              <span className="text-[#ed8161] mr-2">✔</span> Sustainability
            </li>
            <li className="flex items-start">
              <span className="text-[#ed8161] mr-2">✔</span> Excellence & Commitment
            </li>
          </ul>
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -skew-x-12 pointer-events-none"></div>
        </motion.article>
      </motion.div>

      {/* Closing Statement */}
      <motion.p
        className="text-center text-gray-800 dark:text-gray-100 text-lg sm:text-xl md:text-2xl mt-12 md:mt-16 max-w-4xl mx-auto"
        variants={cardVariants}
        custom={4}
      >
        With a commitment to delivering premium real estate solutions, <strong>Inheritance Infrastructure Pvt. Ltd.</strong> is shaping the future of urban living with reliable, well-planned, and high-value projects.
      </motion.p>

      {/* Subtle Wave Divider at Bottom */}
      <div className="absolute bottom-0 left-0 w-full h-16 overflow-hidden">
        <svg
          className="w-full h-full text-gray-200 dark:text-gray-800"
          fill="currentColor"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M0,0V46.29c47.79,22.2,103.59,32.29,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" />
        </svg>
      </div>
    </section>
  );
};

export default CompanyOverview;