// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FadeLeft, FadeRight, FadeUp } from "../utility/animation";
import { FaFlag, FaLowVision, FaTrophy } from "react-icons/fa";
// import { NavLink } from "react-router-dom";
import Anand_Kumar from "../assets/images/Anand_Kumar.jpeg";
import No_image from "../assets/images/no_image.png";
import Footer from "./Footer";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page on component mount
  }, []);

  return (
    <>
      <div className="container mx-auto px-4 py-24">
        <motion.h1
          className="text-5xl font-averia font-semibold text-center text-blue-950 mb-8 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          About Us
        </motion.h1>

        <motion.div
          className="mt-12 rounded-lg p-8 text-center shadow-md"
          // initial={{ opacity: 0, y: 50 }}
          // animate={{ opacity: 1, y: 0 }}
          // transition={{ duration: 0.6 }}
          variants={FadeRight()}
          initial="hidden"
          whileInView="visible"
        >
          <h2 className="text-3xl font-semibold text-blue-950 mb-6">
            Inheritance Infrastructure Private Limited
          </h2>
          <p className="text-gray-800 text-left mb-4">
            <strong>Inheritance Infrastructure Private Limited </strong>is a
            dynamic real estate company committed to delivering premium land
            investment opportunities. With a strong foundation built on trust,
            transparency, and excellence, we specialize in developing
            well-planned residential and commercial plots in high-potential
            locations.
          </p>
          <p className="text-gray-800 text-left mb-4">
            Led by three visionary directors with extensive experience in the
            finance and banking industry, our leadership brings deep financial
            acumen and strategic expertise to every project. This ensures not
            only the viability of our developments but also maximized returns
            for our investors and customers.
          </p>
          <p className="text-gray-800 text-left mb-4">
            At Inheritance Infrastructure, we believe in creating value-driven
            real estate solutions with a focus on quality infrastructure, legal
            integrity, and long-term growth. Our developments are thoughtfully
            planned, integrating modern amenities and sustainable practices to
            offer a seamless experience for buyers and investors alike.
          </p>
          <p className="text-gray-800 text-left mb-4">
            With a commitment to excellence, customer satisfaction, and ethical
            business practices, Inheritance Infrastructure Private Limited
            stands as a trusted name in the real estate sector.
          </p>

          {/* Vision */}
          <div className="w-full mt-4">
            <div
              data-aos="fade-right"
              data-aos-anchor-placement="top-center"
              data-aos-delay={20}
            >
              <motion.div
                variants={FadeUp()}
                initial="hidden"
                whileInView={"visible"}
                whileHover={{ scale: 1 }}
                className="bg-white rounded-lg overflow-hidden"
              >
                <motion.div
                  variants={FadeUp()}
                  initial="hidden"
                  whileInView={"visible"}
                  className="p-[20px_0_10px_0] text-left"
                >
                  {/* title */}
                  <h1 className="text-2xl font-semibold text-gray-800 mt-2 mb-2 flex items-center gap-2">
                    <FaLowVision /> Vision
                  </h1>
                  <h3 className="text-md text-gray-800 mt-2 mb-5">
                    To be a trusted leader in real estate development by
                    creating sustainable, well-planned, and future-ready
                    communities that enhance the quality of life and provide
                    lasting value to our customers and stakeholders.
                  </h3>
                </motion.div>
              </motion.div>
            </div>
          </div>

          <div className="w-full">
            <div
              data-aos="fade-right"
              data-aos-anchor-placement="top-center"
              data-aos-delay={20}
            >
              <motion.div
                variants={FadeUp()}
                initial="hidden"
                whileInView={"visible"}
                whileHover={{ scale: 1 }}
                className="bg-white rounded-lg overflow-hidden"
              >
                <motion.div
                  variants={FadeUp()}
                  initial="hidden"
                  whileInView={"visible"}
                  className="p-[20px_0_10px_0] text-left"
                >
                  {/* title */}
                  <h1 className="text-2xl font-semibold text-gray-800 mt-2 mb-2 flex items-center gap-2">
                    <FaFlag /> Mission
                  </h1>
                  <h3 className="text-md text-gray-800 mt-2 mb-5">
                    <ul className="mt-2 space-y-2">
                      <li>
                        •{" "}
                        <span className="font-semibold">
                          Deliver Excellence:
                        </span>{" "}
                        Develop high-quality residential and commercial spaces
                        with modern infrastructure and world-class amenities.
                      </li>
                      <li>
                        •{" "}
                        <span className="font-semibold">
                          Customer-Centric Approach:
                        </span>{" "}
                        Ensure transparency, trust, and satisfaction by offering
                        hassle-free property ownership.
                      </li>
                      <li>
                        •{" "}
                        <span className="font-semibold">
                          Sustainable Development:
                        </span>{" "}
                        Implement eco-friendly practices, green spaces, and
                        advanced infrastructure for a better future.
                      </li>
                      <li>
                        •{" "}
                        <span className="font-semibold">
                          Innovation & Growth:
                        </span>{" "}
                        Continuously adapt to new trends and technologies to set
                        new benchmarks in the real estate industry.
                      </li>
                      <li>
                        •{" "}
                        <span className="font-semibold">
                          Ethical Business Practices:
                        </span>{" "}
                        Uphold integrity, accountability, and professionalism in
                        every transaction.
                      </li>
                    </ul>
                  </h3>
                </motion.div>
              </motion.div>
            </div>
          </div>

          <div className="w-full">
            <div
              data-aos="fade-right"
              data-aos-anchor-placement="top-center"
              data-aos-delay={20}
            >
              <motion.div
                variants={FadeUp()}
                initial="hidden"
                whileInView={"visible"}
                whileHover={{ scale: 1 }}
                className="bg-white rounded-lg overflow-hidden"
              >
                <motion.div
                  variants={FadeUp()}
                  initial="hidden"
                  whileInView={"visible"}
                  className="p-[20px_0_10px_0] text-left"
                >
                  {/* title */}
                  <h1 className="text-2xl font-semibold text-gray-800 mt-2 mb-2 flex items-center gap-2">
                    <FaTrophy /> Core Values
                  </h1>
                  <h3 className="text-md text-gray-800 mt-2 mb-5">
                    <ul className="mt-2 space-y-2">
                      <li>
                        ✔{" "}
                        <span className="font-semibold">
                          Integrity & Transparency
                        </span>{" "}
                        – Building trust with honesty and ethical business
                        practices.
                      </li>
                      <li>
                        ✔{" "}
                        <span className="font-semibold">
                          Customer Satisfaction
                        </span>{" "}
                        – Prioritizing client needs and ensuring a smooth buying
                        experience.
                      </li>
                      <li>
                        ✔{" "}
                        <span className="font-semibold">
                          Quality & Innovation
                        </span>{" "}
                        – Developing projects with high standards, modern
                        designs, and smart solutions.
                      </li>
                      <li>
                        ✔ <span className="font-semibold">Sustainability</span>{" "}
                        – Creating green, eco-conscious developments that
                        benefit the environment and society.
                      </li>
                      <li>
                        ✔{" "}
                        <span className="font-semibold">
                          Excellence & Commitment
                        </span>{" "}
                        – Striving for perfection in planning, execution, and
                        service.
                      </li>
                    </ul>
                  </h3>
                </motion.div>
              </motion.div>
            </div>
          </div>

          <div className="w-full">
            <motion.div
              variants={FadeUp()}
              initial="hidden"
              whileInView={"visible"}
              className="p-[20px_0_10px_0] text-left"
            >
              <h3 className="text-md text-gray-800 mt-2 mb-5">
                With a commitment to delivering premium real estate solutions,
                Inheritance Infrastructure Pvt. Ltd. is shaping the future of
                urban living with reliable, well-planned, and high-value
                projects.
              </h3>
            </motion.div>
          </div>
        </motion.div>

        {/* <motion.div
        className="mt-12 rounded-lg p-8 text-center shadow-md"
        variants={FadeLeft()}
        initial="hidden"
        whileInView="visible"
      >        
      </motion.div> */}

        {/* 1st */}
        <motion.div
          className="mt-12 relative flex flex-col md:flex-row items-center bg-white shadow-lg p-4 md:p-6 rounded-lg overflow-hidden"
          variants={FadeLeft()}
          initial="hidden"
          whileInView="visible"
        >
          {/* Left Side - Animated Image Box */}
          <div className="relative w-full md:w-1/4 h-96 md:h-80 perspective-1000">
            <motion.div
              className="w-full h-full"
              initial={{ rotateY: 0 }}
              whileHover={{ rotateY: 180 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src={Anand_Kumar}
                alt="Leader"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Outer Accents on Image Border */}
            {/* Top-Left Corner */}
            <div className="absolute -top-1 -left-1 w-24 md:w-36 h-1 bg-yellow-600"></div>
            <div className="absolute -top-1 -left-1 h-24 md:h-36 w-1 bg-yellow-600"></div>

            {/* Bottom-Right Corner */}
            <div className="absolute -bottom-1 -right-1 w-24 md:w-36 h-1 bg-yellow-600"></div>
            <div className="absolute -bottom-1 -right-1 h-24 md:h-36 w-1 bg-yellow-600"></div>
          </div>

          {/* Right Side - Animated Leader Details */}
          <motion.div
            className="w-full md:w-3/4 pl-0 md:pl-6 pt-4 md:pt-4"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 text-center md:text-left">
              Mr. Anand Kumar
            </h2>
            <p className="text-md md:text-lg text-gray-800 text-center md:text-left">
              Director, Inheritance Infrastructure Private Limited
            </p>
            <p className="text-sm md:text-base text-gray-700 mt-2 text-left md:text-left">
              Mr. Anand Kumar is a seasoned financial expert and a dynamic
              leader with over 16 years of rich experience in insurance,
              operations, retail banking, and government banking. Throughout his
              career, he has played a pivotal role in driving strategic growth,
              optimizing financial operations, and fostering strong client
              relationships across diverse banking sectors.
            </p>
            <p className="text-sm md:text-base text-gray-700 mt-2 text-left md:text-left">
              In addition to his extensive financial background, Mr. Anand Kumar
              has been actively involved in the real estate industry for over
              four years. His deep understanding of market dynamics, regulatory
              frameworks, and investment strategies has been instrumental in
              shaping Inheritance Infrastructure Private Limited’s vision of
              delivering high-value real estate projects.
            </p>
            <p className="text-sm md:text-base text-gray-700 mt-2 text-left md:text-left">
              With a keen eye for detail and a commitment to excellence, Mr.
              Anand Kumar ensures that every project under Inheritance
              Infrastructure upholds the highest standards of quality,
              transparency, and customer satisfaction. His expertise in finance
              and banking, combined with his real estate acumen, makes him a key
              driving force behind the company’s success.
            </p>
          </motion.div>
        </motion.div>

        {/* 2nd */}
        <motion.div
          className="mt-12 relative flex flex-col md:flex-row items-center bg-white shadow-lg p-4 md:p-6 rounded-lg overflow-hidden"
          variants={FadeRight()}
          initial="hidden"
          whileInView="visible"
        >
          {/* Left Side - Animated Image Box */}
          <motion.div
            className="w-full md:w-3/4 pl-0 md:pl-6 pb-4 md:pb-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 text-center md:text-left">
              Mr. Piyush Mate
            </h2>
            <p className="text-md md:text-lg text-gray-800 text-center md:text-left">
              Director, Inheritance Infrastructure Private Limited
            </p>
            <p className="text-sm md:text-base text-gray-700 mt-2 text-left md:text-left">
              Mr. Piyush Mate is a results-driven professional with a strong
              background in the FMCG sector and real estate industry. With five
              years of experience in the fast-moving consumer goods (FMCG)
              sector, he has honed his expertise in sales, distribution, and
              market strategy, developing a deep understanding of consumer
              behavior and business operations.
            </p>
            <p className="text-sm md:text-base text-gray-700 mt-2 text-left md:text-left">
              Building on this foundation, Mr. Piyush Mate transitioned into the
              real estate sector, where he has spent over four years driving
              growth and innovation. His strategic approach, market insights,
              and customer-centric vision have been instrumental in shaping
              Inheritance Infrastructure Private Limited’s portfolio of premium
              real estate projects.
            </p>
            <p className="text-sm md:text-base text-gray-700 mt-2 text-left md:text-left">
              With a passion for delivering quality developments and creating
              long-term value for investors and buyers, Mr. Piyush Mate plays a
              crucial role in ensuring that the company remains a trusted name
              in the industry. His blend of FMCG expertise and real estate
              acumen brings a unique perspective to the company’s operations and
              customer engagement strategies.
            </p>
          </motion.div>

          {/* Right Side - Animated Leader Details */}
          <div className="relative w-full md:w-1/4 h-96 md:h-80 perspective-1000">
            <motion.div
              className="w-full h-full"
              initial={{ rotateY: 0 }}
              whileHover={{ rotateY: 180 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src={No_image}
                alt="Leader"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Outer Accents on Image Border */}
            {/* Top-Left Corner */}
            <div className="absolute -top-1 -left-1 w-24 md:w-36 h-1 bg-yellow-600"></div>
            <div className="absolute -top-1 -left-1 h-24 md:h-36 w-1 bg-yellow-600"></div>

            {/* Bottom-Right Corner */}
            <div className="absolute -bottom-1 -right-1 w-24 md:w-36 h-1 bg-yellow-600"></div>
            <div className="absolute -bottom-1 -right-1 h-24 md:h-36 w-1 bg-yellow-600"></div>
          </div>
        </motion.div>

        {/* 3rd */}
        <motion.div
          className="mt-12 relative flex flex-col md:flex-row items-center bg-white shadow-lg p-4 md:p-6 rounded-lg overflow-hidden"
          variants={FadeLeft()}
          initial="hidden"
          whileInView="visible"
        >
          {/* Left Side - Animated Image Box */}
          <div className="relative w-full md:w-1/4 h-96 md:h-80 perspective-1000">
            <motion.div
              className="w-full h-full"
              initial={{ rotateY: 0 }}
              whileHover={{ rotateY: 180 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src={No_image}
                alt="Leader"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Outer Accents on Image Border */}
            {/* Top-Left Corner */}
            <div className="absolute -top-1 -left-1 w-24 md:w-36 h-1 bg-yellow-600"></div>
            <div className="absolute -top-1 -left-1 h-24 md:h-36 w-1 bg-yellow-600"></div>

            {/* Bottom-Right Corner */}
            <div className="absolute -bottom-1 -right-1 w-24 md:w-36 h-1 bg-yellow-600"></div>
            <div className="absolute -bottom-1 -right-1 h-24 md:h-36 w-1 bg-yellow-600"></div>
          </div>

          {/* Right Side - Animated Leader Details */}
          <motion.div
            className="w-full md:w-3/4 pl-0 md:pl-6 pt-4 md:pt-4"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 text-center md:text-left">
              Ms. Ruchika Bhojram Lautre
            </h2>
            <p className="text-md md:text-lg text-gray-800 text-center md:text-left">
              Director, Inheritance Infrastructure Private Limited
            </p>
            <p className="text-sm md:text-base text-gray-700 mt-2 text-left md:text-left">
              Ms. Ruchika Bhojram Lautre is a highly skilled professional with a
              strong background in finance and banking, coupled with extensive
              real estate expertise. With eight years of experience in
              insurance, operations, retail banking, and government banking, she
              has developed a deep understanding of financial management, risk
              assessment, and operational efficiency.
            </p>
            <p className="text-sm md:text-base text-gray-700 mt-2 text-left md:text-left">
              Her strategic insights and expertise in handling banking
              operations have been invaluable in ensuring the smooth financial
              execution of real estate projects. Over the past four years, she
              has been actively involved in the real estate sector, contributing
              significantly to the growth and success of Inheritance
              Infrastructure Private Limited.
            </p>
            <p className="text-sm md:text-base text-gray-700 mt-2 text-left md:text-left">
              Ms. Ruchika Bhojram Lautre is known for her meticulous approach,
              strong leadership, and commitment to delivering excellence. Her
              ability to integrate financial discipline with real estate
              development has helped the company maintain its reputation for
              transparency, quality, and customer satisfaction. As a key
              decision-maker, she continues to play a vital role in driving the
              company’s vision forward.
            </p>
          </motion.div>
        </motion.div>
      </div>
      <Footer />
    </>
  );
};

export default About;
