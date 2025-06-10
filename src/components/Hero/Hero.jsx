// eslint-disable-next-line no-unused-vars
import React from "react";
import { motion } from "framer-motion";
import { FadeUp } from "../../utility/animation.jsx";
import { FaClipboard, FaLayerGroup, FaUserTie } from 'react-icons/fa';

const MenusData = [
  {
    id: 1,
    title: "Hassle-Free Transactions",
    text: "Enjoy transparent processes and personalized support, making your real estate journey smooth and rewarding.",
    textdelay: 1.2,
    delay: 1,
    textIcon: <FaClipboard />,
  },
  {
    id: 2,
    title: "Wide Range of Properties",
    text: "Discover your dream property from our extensive portfolio, including residential, commercial, and investment opportunities.",
    textdelay: 1.2,
    delay: 1,
    textIcon: <FaLayerGroup />,
  },
  {
    id: 3,
    title: "Expert Guidance",
    text: "Our experienced agents provide personalized assistance, ensuring a smooth and hassle-free real estate journey.",
    textdelay: 1.2,
    delay: 1,
    textIcon: <FaUserTie />,
  },
];

const Hero = () => {
  return (
    <>
      <div className="pt-12 pb-12 p-3 lg:px-20 px-10 relative">
        <div className="pt-6 pb-6 mx-auto">
          {/* tile */}
          <h1 className="text-3xl text-center text-blue-950 font-averia font-bold">
            REALTORS YOU CAN TRUST
          </h1>
          {/* Amenities */}
          <div className="flex flex-row items-center justify-center">
            <div className="xl:w-[65%] lg:w-[80%] md:w-[80%] w-[90%] md:mt-12 mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-2">
              {MenusData.map((menu) => (
                // eslint-disable-next-line react/jsx-key
                <div
                  data-aos="fade-right"
                  data-aos-anchor-placement="top-center"
                  data-aos-delay={20}
                >
                  <motion.div
                    variants={FadeUp(menu.delay)}
                    initial="hidden"
                    whileInView={"visible"}
                    whileHover={{ scale: 1 }}
                    className="bg-white rounded-lg overflow-hidden"
                  >
                    <motion.div
                      variants={FadeUp(menu.textdelay)}
                      initial="hidden"
                      whileInView={"visible"}
                      className="p-[20px_0_10px_0] text-center"
                    >
                       <div className="flex flex-row items-center justify-center text-8xl text-yellow-600 opacity-70 mb-6">
                        {menu.textIcon}
                       </div>
                      {/* title */}
                      <h1 className="text-xl font-semibold text-blue-950 mt-2 mb-2">
                        {menu.title}
                      </h1>
                      <h3 className="text-sm text-blue-950 opacity-75 mt-2 mb-5">
                        {menu.text}
                      </h3>
                    </motion.div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
