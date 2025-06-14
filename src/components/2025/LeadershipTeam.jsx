import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import anandImg from '../../public/assets/images/Anand_Kumar.jpeg';

const LeadershipTeam = () => {
  // State for tracking the selected director for the modal
  const [selectedDirector, setSelectedDirector] = useState(null);

  // Directors data
  const directors = [
    {
      name: "Mr. Anand Kumar",
      title: "Director, Inheritance Infrastructure Private Limited",
      image: anandImg,
      description: [
        "Mr. Anand Kumar is a seasoned financial expert and a dynamic leader with over 16 years of rich experience in insurance, operations, retail banking, and government banking. Throughout his career, he has played a pivotal role in driving strategic growth, optimizing financial operations, and fostering strong client relationships across diverse banking sectors.",
      ],
    },
    {
      name: "Mr. Piyush Mate",
      title: "Director, Inheritance Infrastructure Private Limited",
      image: "https://placehold.co/400x400/ed8161/ffffff/png?text=Director+Image&font=poppins",
      description: [
        "Mr. Piyush Mate is a results-driven professional with a strong background in the FMCG sector and real estate industry. With five years of experience in the fast-moving consumer goods (FMCG) sector, he has honed his expertise in sales, distribution, and market strategy, developing a deep understanding of consumer behavior and business operations.",
      ],
    },
    {
      name: "Ms. Ruchika Bhojram Lautre",
      title: "Director, Inheritance Infrastructure Private Limited",
      image: "https://placehold.co/400x400/ed8161/ffffff/png?text=Director+Image&font=poppins",
      description: [
        "Ms. Ruchika Bhojram Lautre is a highly skilled professional with a strong background in finance and banking, coupled with extensive real estate expertise. With eight years of experience in insurance, operations, retail banking, and government banking, she has developed a deep understanding of financial management, risk assessment, and operational efficiency.",
      ],
    },
  ];

  // Animation variants for the card container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.5 },
    },
  };

  // Animation variants for individual cards
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  // Animation variants for the abstract shapes at the top
  const shapeVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 0.2, y: 0, transition: { duration: 1, ease: "easeOut", repeat: Infinity, repeatType: "reverse" } },
  };

  // Animation variants for the modal
  const modalVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: "easeOut" } },
    exit: { opacity: 0, scale: 0.9, transition: { duration: 0.2 } },
  };

  // Fallback image in case any director image fails to load
  const fallbackImage = "https://placehold.co/400x400/d1d5db/ffffff/png?text=Image+Not+Found&font=poppins";

  // Handle keyboard navigation (close modal on Escape key)
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape" && selectedDirector) {
        setSelectedDirector(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedDirector]);

  return (
    <section className="w-full py-16 md:py-20 bg-gradient-to-b0 dark:from-gray-800 dark:to-gray-900 font-poppins relative overflow-hidden">
      {/* Abstract Geometric Shapes at Top */}
      <div className="absolute top-0 left-0 w-full h-32 overflow-hidden">
        <motion.div
          className="absolute top-0 left-1/4 w-24 h-24 bg-gradient-to-r from-[#ed8161] to-[#c75c45] opacity-20 rounded-full"
          variants={shapeVariants}
          initial="hidden"
          animate="visible"
          style={{ transform: "translate(-50%, -50%)" }}
        ></motion.div>
        <motion.div
          className="absolute top-10 left-1/3 w-16 h-16 bg-gradient-to-r from-[#ed8161] to-[#c75c45] opacity-20 rotate-45"
          variants={shapeVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
          style={{ transform: "translate(-50%, -50%)" }}
        ></motion.div>
        <motion.div
          className="absolute top-5 right-1/4 w-20 h-20 border-2 border-[#ed8161]/30 rounded-full"
          variants={shapeVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.4 }}
          style={{ transform: "translate(50%, -50%)" }}
        ></motion.div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold bg-gradient-to-r from-[#ed8161] to-[#c75c45] bg-clip-text text-transparent">
            Meet Our Visionaries
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-200 mt-4 max-w-3xl mx-auto">
            Discover the leaders behind Inheritance Infrastructure Private Limited, shaping the future of real estate with innovation and excellence.
          </p>
        </motion.div>

        {/* Staggered Cards */}
        <motion.div
          className="relative flex flex-wrap justify-center gap-8 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {directors.map((director, index) => (
            <motion.div
              key={director.name}
              className="relative w-full sm:w-80 lg:w-96 bg-white dark:bg-gray-800 rounded-2xl shadow-xl group overflow-hidden"
              variants={cardVariants}
              whileHover={{
                y: -10,
                rotateX: index % 2 === 0 ? 3 : -3,
                rotateY: index % 2 === 0 ? -3 : 3,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)",
                transition: { duration: 0.3 },
              }}
              style={{
                marginTop: index % 2 === 0 ? "0" : "40px", // Staggered offset
              }}
            >
              {/* Background Gradient Animation on Hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#ed8161]/10 to-[#c75c45]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              ></motion.div>

              {/* Profile Image */}
              <div className="relative flex justify-center py-5">
                <motion.div
                  className="w-32 h-32 rounded-full overflow-hidden border-4 border-[#ed8161]/20 group-hover:border-[#ed8161]/50 transition-all duration-500"
                  whileHover={{ scale: 1.1 }}
                >
                  <img
                    src={director.image}
                    alt={`${director.name}, ${director.title}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onError={(e) => (e.target.src = fallbackImage)} // Fallback image on error
                  />
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8 text-center relative z-10">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-blue-950 dark:text-white mb-2">
                  {director.name}
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 mb-4">
                  {director.title}
                </p>
                <p className="text-sm sm:text-base md:text-lg text-gray-800 dark:text-gray-100 line-clamp-3">
                  {director.description[0]}
                </p>
                <button
                  onClick={() => setSelectedDirector(director)}
                  className="inline-block mt-4 text-[#ed8161] hover:text-[#c75c45] font-semibold transition-colors duration-300 text-base md:text-lg relative"
                  aria-label={`Read more about ${director.name}`}
                >
                  Read More
                  <motion.span
                    className="absolute -bottom-1 left-0 h-0.5 bg-[#ed8161]"
                    initial={{ width: "0%" }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  ></motion.span>
                </button>
              </div>

              {/* Gradient Glow on Hover */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#ed8161]/50 transition-all duration-500 pointer-events-none"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedDirector && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedDirector(null)}
          >
            <motion.div
              className="relative w-full max-w-lg bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-2xl p-6 md:p-8 max-h-[90vh] overflow-y-auto"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedDirector(null)}
                className="absolute top-4 right-4 text-gray-600 dark:text-gray-300 hover:text-[#ed8161] transition-colors duration-300"
                aria-label="Close modal"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>

              {/* Modal Content */}
              <div className="flex flex-col items-center text-center">
                <motion.div
                  className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-[#ed8161]/20 mb-6"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <img
                    src={selectedDirector.image}
                    alt={`${selectedDirector.name}, ${selectedDirector.title}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onError={(e) => (e.target.src = fallbackImage)} // Fallback image on error
                  />
                </motion.div>
                <motion.h3
                  className="text-2xl md:text-3xl font-semibold text-blue-950 dark:text-white mb-2 leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {selectedDirector.name}
                </motion.h3>
                <motion.p
                  className="text-sm md:text-base text-gray-600 dark:text-gray-300 mb-4 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  {selectedDirector.title}
                </motion.p>
                <motion.p
                  className="text-sm md:text-base text-gray-800 dark:text-gray-100 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  {selectedDirector.description[0]}
                </motion.p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Decorative Element at Bottom (Abstract Skyline) */}
      <div className="absolute bottom-0 left-0 w-full h-24 overflow-hidden">
        <motion.svg
          className="w-full h-full text-[#ed8161]/30 dark:text-[#ed8161]/20"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <polyline points="0,80 200,40 400,80 600,30 800,70 1000,50 1200,90" />
          <polyline points="100,90 300,50 500,90 700,40 900,80 1100,60 1200,90" opacity="0.5" />
        </motion.svg>
      </div>
    </section>
  );
};

export default LeadershipTeam;