import React from "react";
import { motion } from "framer-motion";
import { FaClipboard, FaLayerGroup, FaUserTie } from "react-icons/fa";

const MenusData = [
  {
    id: 1,
    title: "Hassle-Free Transactions",
    text: "Enjoy transparent processes and personalized support, making your real estate journey smooth and rewarding.",
    icon: <FaClipboard />,
  },
  {
    id: 2,
    title: "Wide Range of Properties",
    text: "Discover your dream property from our extensive portfolio, including residential, commercial, and investment opportunities.",
    icon: <FaLayerGroup />,
  },
  {
    id: 3,
    title: "Expert Guidance",
    text: "Our experienced agents provide personalized assistance, ensuring a smooth and hassle-free real estate journey.",
    icon: <FaUserTie />,
  },
];

const TimelineFeature = () => {
  return (
    <section className="relative w-full py-24 px-4 lg:px-32 bg-gradient-to-b from-[#fefcfb] to-[#f9f9f8] dark:from-[#121212] dark:to-[#000000]">
      <h2 className="text-center text-4xl font-bold text-[#7da893] dark:text-[#d3e4cd] font-averia mb-16 tracking-wide">
        REALTORS YOU CAN TRUST
      </h2>

      <div className="flex justify-center gap-8 flex-wrap">
        {MenusData.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative w-[300px] h-[360px] bg-gradient-to-br from-white to-[#eaf3ec] dark:from-gray-900 dark:to-[#1e2a22] border border-[#a8d5ba] dark:border-[#759c84] rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
          >
            {/* Icon inside top-right */}
            <div className="absolute top-4 right-4 w-16 h-16 rounded-full bg-white dark:bg-black border border-[#a8d5ba] dark:border-[#759c84] flex items-center justify-center text-[#7da893] text-4xl shadow-sm z-10">
              {item.icon}
            </div>

            {/* Content */}
            <div className="flex flex-col justify-center items-start h-full p-6 pt-24">
              <h3 className="text-xl font-semibold text-[#7da893] dark:text-[#d3e4cd] mb-2 tracking-wide">
                {item.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                {item.text}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TimelineFeature;
