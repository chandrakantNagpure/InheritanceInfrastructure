import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import anandImg from '../../public/assets/images/Anand_Kumar.jpeg';
const LeadershipTeam = () => {
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.5 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const shapeVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 0.2, y: 0, transition: { duration: 1, ease: "easeOut", repeat: Infinity, repeatType: "reverse" } },
  };

  return (
    <section className="w-full py-20 md:py-20 bg-gradient-to-b dark:from-gray-800 dark:to-gray-900 font-poppins relative overflow-hidden">
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
              {/* Profile Image */}
              <div className="relative flex justify-center">
                <motion.div
                  className="w-32 h-32 rounded-full overflow-hidden border-4 border-[#ed8161]/20 group-hover:border-[#ed8161]/50 transition-all duration-500"
                  whileHover={{ scale: 1.1 }}
                >
                  <img
                    src={director.image}
                    alt={`${director.name}, ${director.title}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8 text-center">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-blue-950 dark:text-white mb-2">
                  {director.name}
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 mb-4">
                  {director.title}
                </p>
                <p className="text-sm sm:text-base md:text-lg text-gray-800 dark:text-gray-100 line-clamp-3">
                  {director.description[0]}
                </p>
                <NavLink
                  to={`/team/${director.name.toLowerCase().replace(/\s/g, "-")}`}
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
                </NavLink>
              </div>

              {/* Gradient Glow on Hover */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#ed8161]/50 transition-all duration-500 pointer-events-none"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>

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