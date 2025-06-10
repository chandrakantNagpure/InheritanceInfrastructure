// eslint-disable-next-line no-unused-vars
import React from "react";
import { motion } from "framer-motion";
// import { FadeUp } from "../utility/animation.jsx";
import { FaLowVision } from "react-icons/fa";
import AboutImg from "../assets/images/home_image.jpg";
import { NavLink } from "react-router-dom";
import { FadeDown, FadeUp } from "../utility/animation";

const Vision = () => {
  return (
    <div className="pt-12 pb-12 p-3 lg:px-20 px-10 relative">
      <div className="pt-6 pb-6 mx-auto">
        {/* Title */}
        <h1 className="text-3xl text-center text-blue-950 font-averia font-normal">
          About Inheritance Infrastructure Pvt. Ltd.
        </h1>

        {/* Vision Section */}
        <div className="flex flex-col md:flex-row items-center justify-center mt-6 gap-10">
          {/* Right Side: Image */}
          <motion.div
            variants={FadeUp()}
            initial="hidden"
            whileInView={"visible"}
            className="w-full md:w-1/2"
          >
            <motion.img
              src={AboutImg} // Change this to your actual image path
              alt="Vision"
              className="w-full h-72 md:h-80 lg:h-96 rounded-lg shadow-lg"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            />
          </motion.div>
          {/* Left Side: Text */}
          <motion.div
            variants={FadeDown()}
            initial="hidden"
            whileInView={"visible"}
            className="w-full md:w-1/2 flex flex-col justify-between min-h-[300px]"
          >
            <div>
              <p className="text-lg text-blue-950">
                Inheritance Infrastructure Private Limited is a dynamic real
                estate company committed to delivering premium land investment
                opportunities. With a strong foundation built on trust,
                transparency, and excellence, we specialize in developing
                well-planned residential and commercial plots in high-potential
                locations.
              </p>

              <h1 className="text-2xl font-semibold text-blue-950 flex items-center gap-2 mt-4">
                <FaLowVision /> Vision
              </h1>

              <p className="text-lg text-blue-950 mt-2">
                To be a trusted leader in real estate development by creating
                sustainable, well-planned, and future-ready communities that
                enhance the quality of life and provide lasting value to our
                customers and stakeholders.
              </p>
            </div>

            {/* Read More Button */}
            <div className="mt-4">
              <NavLink
                to={`/about`}
                className="read-more-btn bg-blue-950 text-white px-4 py-2 rounded-md hover:bg-blue-950 transition-all duration-300 border-none outline-none"
              >
                Read More
              </NavLink>
              {/* <button className="bg-blue-950 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition">
                Read More
              </button> */}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Vision;
