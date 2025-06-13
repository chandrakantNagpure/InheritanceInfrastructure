import React from "react";
import { FaLowVision } from "react-icons/fa";

const BuildingTheFuture = () => {
  return (
    <section
      className="relative flex flex-col lg:flex-row justify-center items-center px-5 lg:px-20 gap-10 lg:gap-16
        bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#fffaf7] via-white to-[#f2f7f4]
        dark:from-[#1b1b1b] dark:via-[#0f0f0f] dark:to-black
        pt-10 pb-16 md:pt-24 md:pb-24 sm:pt-[200px]"
      style={{ minHeight: "100vh", fontFamily: "'Poppins', sans-serif" }}
    >
      {/* Image Column */}
      <div className="w-full lg:w-1/2 flex justify-center items-center perspective-[1200px]">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
          alt="Real Estate Property"
          className="w-full max-w-[550px] lg:max-w-[650px] rounded-2xl shadow-2xl object-cover"
        />
      </div>

      {/* Text Column */}
      <div className="w-full lg:w-1/2 text-center">
        <p className="text-4xl md:text-6xl font-bold mb-8 text-slate-800 dark:text-white">
          About Inheritance Infrastructure Pvt. Ltd.
        </p>
        <p className="text-xl max-w-3xl mx-auto leading-relaxed mb-8 text-slate-700 dark:text-gray-200">
          Inheritance Infrastructure Private Limited is a dynamic real estate company committed to delivering premium land investment opportunities. With a strong foundation built on trust, transparency, and excellence, we specialize in developing well-planned residential and commercial plots in high-potential locations.
        </p>
        <h3 className="flex justify-center items-center gap-2 text-3xl font-semibold mb-4 text-slate-800 dark:text-white">
          <FaLowVision className="text-[#ed8161]" />
          Our Vision
        </h3>
        <p className="text-xl max-w-3xl mx-auto leading-relaxed mb-8 text-slate-700 dark:text-gray-200">
          To be a trusted leader in real estate development by creating sustainable, well-planned, and future-ready communities that enhance the quality of life and provide lasting value to our customers and stakeholders.
        </p>
        <div className="inline-block bg-[#ed8161] text-white px-6 py-3 rounded-md hover:bg-[#c75c45] transition duration-300 cursor-pointer text-lg">
          Read More
        </div>
      </div>
    </section>
  );
};

export default BuildingTheFuture;