// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import projects from "./projectData"; // Make sure this imports the projects data array
import Footer from "./Footer";
import { Building, Home, Store, Star } from "lucide-react"; // Import icons
import { FadeDown, FadeLeft, FadeRight, FadeUp } from "../utility/animation";
import {
  FaBuilding,
  FaDownload,
  FaHandshake,
  FaProjectDiagram,
} from "react-icons/fa";

// mbinfra
import M_Image_1 from "../assets/projects/mbinfra/M_Image_1.jpg";
import M_Image_3 from "../assets/projects/mbinfra/M_Image_3.jpg";
import M_Image_5 from "../assets/projects/mbinfra/M_Image_5.jpg";
import M_Image_6 from "../assets/projects/mbinfra/M_Image_6.jpg";
import M_Image_7 from "../assets/projects/mbinfra/M_Image_7.jpg";
import M_Image_11 from "../assets/projects/mbinfra/M_Image_11.png";
import M_Image_12 from "../assets/projects/mbinfra/M_Image_12.png";
import M_Image_13 from "../assets/projects/mbinfra/M_Image_13.png";
import M_Image_14 from "../assets/projects/mbinfra/M_Image_14.png";
// building structure
import M_BS_1 from "../assets/projects/mbinfra/M_BS_1.jpg";
import M_BS_2 from "../assets/projects/mbinfra/M_BS_2.jpg";
import M_BS_3 from "../assets/projects/mbinfra/M_BS_3.jpg";
import emerald_floor_plan from "../assets/projects/mbinfra/emerald_floor_plan.jpg";
import topaz_floor_plan from "../assets/projects/mbinfra/topaz_floor_plan.jpg";
import pearl_floor_plan from "../assets/projects/mbinfra/pearl_floor_plan.jpg";
import ruby_floor_plan from "../assets/projects/mbinfra/ruby_floor_plan.jpg";
// Amenities
import M_Image_8 from "../assets/projects/mbinfra/M_Image_8.jpg";
import M_Image_9 from "../assets/projects/mbinfra/M_Image_9.jpg";
import M_Image_10 from "../assets/projects/mbinfra/M_Image_10.jpg";
import AM_Image_11 from "../assets/projects/mbinfra/AM_Image_11.jpg";
import AM_Image_12 from "../assets/projects/mbinfra/AM_Image_12.jpg";
import AM_Image_13 from "../assets/projects/mbinfra/AM_Image_13.jpg";

// peak orchard
import PO_Image_1 from "../assets/projects/peakorchard/2.jpg";
import PO_Image_2 from "../assets/projects/peakorchard/PO_Image_2.png";
import PO_Image_3 from "../assets/projects/peakorchard/PO_Image_3.png";
import PO_Image_4 from "../assets/projects/peakorchard/PO_Image_4.png";

// anjaneyagroup group
import AN_Image_1 from "../assets/projects/anjaneyagroup/AN_Image_1.jpg";
import AN_Image_2 from "../assets/projects/anjaneyagroup/AN_Image_2.jpg";
import AN_Image_3 from "../assets/projects/anjaneyagroup/AN_Image_3.jpg";
import AN_Image_4 from "../assets/projects/anjaneyagroup/AN_Image_4.jpg";

// woods residency
import W_Image_1 from "../assets/projects/woods/W_Image_1.jpg";
import W_Image_2 from "../assets/projects/woods/W_Image_2.jpg";
import W_Image_3 from "../assets/projects/woods/W_Image_3.jpg";
import W_Image_4 from "../assets/projects/woods/W_Image_4.jpg";
import W_Image_5 from "../assets/projects/woods/W_Image_5.jpg";

// pdf's
import Royal_Empire_Final from "../assets/projects/mbinfra/Royal_Empire_Final.pdf";
import Peak_Orchard_Estate from "../assets/projects/peakorchard/Peak_Orchard_Estate.pdf";
import Anjaneya_Nagar from "../assets/projects/anjaneyagroup/Anjaneya_Nagar.pdf";
import Woods_Residency from "../assets/projects/woods/Woods_Residency.pdf";

const Project_details = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page on component mount
  }, []);

  const { id } = useParams();
  const project = projects.find(
    (proj) => proj.name.toLowerCase() === id.toLowerCase()
  );

  if (!project) return <p className="text-center">Project not found</p>;

  if (project.name === "Royal Empire")
    return (
      <>
        <div className="flex flex-col items-center px-6">
          <motion.h2
            className="text-4xl font-bold font-averia text-blue-950 opacity-70 mb-8 mt-32"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {project.title}
          </motion.h2>
          {/* text */}
          <div className="w-full lg:w-3/4 flex flex-col lg:flex-row items-center gap-10 mb-5">
            {/* Details Section with Fade Right */}
            <motion.div
              className="w-full flex flex-col gap-4"
              variants={FadeUp()}
              initial="hidden"
              whileInView="visible"
            >
              <p className="text-blue-950 opacity-75">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <strong>Royal Empire</strong> is an ambitious and luxurious real
                estate development designed to provide a perfect blend of
                residential and commercial spaces. The project is set to
                redefine urban living with state-of-the-art amenities and
                contemporary architectural design.
              </p>
            </motion.div>
          </div>
          {/* Download Button */}
          <div className="w-full lg:w-3/4 text-left mb-5">
            <a
              href={Royal_Empire_Final}
              download="Royal_Empire_Final.pdf"
              className="bg-blue-950 text-white flex items-center gap-2 px-4 py-2 rounded-lg shadow-md hover:bg-blue-900 transition-all w-fit"
            >
              <FaDownload className="text-lg" /> Download Brochure
            </a>
          </div>

          <div
            className="w-full lg:w-3/4 flex flex-col lg:flex-row items-center gap-10 mb-10"
            data-aos-delay={150}
          >
            {/* Image Section with Fade Left */}
            <motion.div
              className="w-full lg:w-1/2"
              variants={FadeLeft()}
              initial="hidden"
              whileInView="visible"
            >
              <img
                src={M_Image_1}
                alt={project.title}
                className="rounded-lg shadow-xl w-full min-h-[450px] max-h-[450px]"
              />
            </motion.div>

            {/* Details Section with Fade Right */}
            <motion.div
              className="w-full lg:w-1/2"
              variants={FadeRight()}
              initial="hidden"
              whileInView="visible"
            >
              <img
                src={M_Image_3}
                alt={project.title}
                className="rounded-lg shadow-xl w-full min-h-[450px] max-h-[450px]"
              />
            </motion.div>
          </div>

          {/* text */}
          <div className="w-full lg:w-3/4 flex flex-col lg:flex-row items-center gap-10 mb-10">
            {/* Details Section with Fade Right */}
            <motion.div
              className="w-full flex flex-col gap-4"
              variants={FadeUp()}
              initial="hidden"
              whileInView="visible"
            >
              <h1 className="text-2xl font-bold font-averia text-blue-950 mb-2 mt-4 text-center uppercase">
                Key Highlights
              </h1>
            </motion.div>
          </div>

          <div className="w-full lg:w-3/4 mx-auto p-6 bg-white shadow-lg rounded-lg">
            {/* Section: Building Structure */}
            <div className="mb-6 grid grid-cols-1 lg:grid-cols-2 items-center">
              {/* Left: Title and List */}
              <motion.div
                variants={FadeLeft()}
                initial="hidden"
                whileInView="visible"
              >
                <h2 className="text-xl font-semibold text-blue-950 mb-2">
                  Building Structure
                </h2>
                <ul className="list-disc ml-6 text-blue-950 opacity-75">
                  <li>
                    Total Floors: <strong>17</strong>
                  </li>
                  <li>
                    Parking: 3 dedicated floors (Lower Ground, Upper Ground,
                    Mezzanine)
                  </li>
                  <li>
                    Residential Flats: <strong>14 upper floors</strong> offering
                    modern apartments.
                  </li>
                </ul>
              </motion.div>

              {/* Right: Large Icon */}
              <motion.div
                className="flex justify-center"
                variants={FadeRight()}
                initial="hidden"
                whileInView="visible"
              >
                <Building className="text-yellow-500 w-24 h-24" />
              </motion.div>
            </div>
            <div className="w-full lg:w-3/3 flex flex-col lg:flex-row items-center gap-5 mb-10">
              {/* building structure images */}
              <motion.div
                className="w-full lg:w-1/3 shadow-2xl rounded-lg"
                variants={FadeLeft()}
                initial="hidden"
                whileInView="visible"
              >
                <img
                  src={M_BS_1}
                  alt={project.title}
                  className="rounded-lg shadow-xl w-full min-h-[320px] max-h-[350px]"
                />
              </motion.div>

              {/* Details Section with Fade Right */}
              <motion.div
                className="w-full lg:w-1/3 shadow-2xl rounded-lg"
                variants={FadeDown()}
                initial="hidden"
                whileInView="visible"
              >
                <img
                  src={M_BS_2}
                  alt={project.title}
                  className="rounded-lg shadow-xl w-full min-h-[320px] max-h-[350px]"
                />
              </motion.div>

              {/* Details Section with Fade Right */}
              <motion.div
                className="w-full lg:w-1/3 shadow-2xl rounded-lg"
                variants={FadeRight()}
                initial="hidden"
                whileInView="visible"
              >
                <img
                  src={M_BS_3}
                  alt={project.title}
                  className="rounded-lg shadow-xl w-full min-h-[320px] max-h-[350px]"
                />
              </motion.div>
            </div>
            <div className="w-full lg:w-4/4 flex flex-col lg:flex-row items-center gap-5 mb-10">
              {/* building images */}
              <motion.div
                className="relative w-full lg:w-1/4 overflow-hidden group shadow-2xl rounded-lg"
                variants={FadeUp()}
                initial="hidden"
                whileInView="visible"
              >
                <img
                  src={emerald_floor_plan}
                  alt={project.title}
                  className="rounded-lg shadow-xl w-full min-h-[320px] max-h-[350px] transition-transform duration-300 group-hover:scale-110"
                />
              </motion.div>
              <motion.div
                className="relative w-full lg:w-1/4 overflow-hidden group shadow-2xl rounded-lg"
                variants={FadeLeft()}
                initial="hidden"
                whileInView="visible"
              >
                {/* Image with hover effect */}
                <img
                  src={topaz_floor_plan}
                  alt={project.title}
                  className="rounded-lg shadow-xl w-full min-h-[320px] max-h-[350px] transition-transform duration-300 group-hover:scale-110"
                />
              </motion.div>
              <motion.div
                className="relative w-full lg:w-1/4 overflow-hidden group shadow-2xl rounded-lg"
                variants={FadeDown()}
                initial="hidden"
                whileInView="visible"
              >
                <img
                  src={pearl_floor_plan}
                  alt={project.title}
                  className="rounded-lg shadow-xl w-full min-h-[320px] max-h-[350px] transition-transform duration-300 group-hover:scale-110"
                />
              </motion.div>
              <motion.div
                className="relative w-full lg:w-1/4 overflow-hidden group shadow-2xl rounded-lg"
                variants={FadeRight()}
                initial="hidden"
                whileInView="visible"
              >
                <img
                  src={ruby_floor_plan}
                  alt={project.title}
                  className="rounded-lg shadow-xl w-full min-h-[320px] max-h-[350px] transition-transform duration-300 group-hover:scale-110"
                />
              </motion.div>
            </div>

            {/* Section: Residential Units */}
            <div className="mb-6 grid grid-cols-1 lg:grid-cols-2 items-center">
              {/* Left: Title and List */}
              <div>
                <h2 className="text-xl font-semibold text-blue-950 mb-2">
                  Residential Units
                </h2>
                <ul className="list-disc ml-6 text-blue-950 opacity-75">
                  <li>
                    Total Flats: <strong>246</strong>
                  </li>
                  <li>
                    2 BHK Apartments: <strong>154 units</strong>
                  </li>
                  <li>
                    3 BHK Apartments: <strong>92 units</strong>
                  </li>
                  <li>
                    Thoughtfully designed layouts for comfort & natural light.
                  </li>
                </ul>
              </div>

              {/* Right: Large Icon */}
              <div className="flex justify-center">
                <Home className="text-yellow-500 w-24 h-24" />
              </div>
            </div>
            <div className="w-full lg:w-4/4 flex flex-col lg:flex-row items-center gap-5 mb-10">
              {/* building images */}
              <motion.div
                className="relative w-full lg:w-1/4 overflow-hidden group shadow-2xl rounded-lg"
                variants={FadeUp()}
                initial="hidden"
                whileInView="visible"
              >
                {/* Label */}
                <div className="absolute top-2 left-2 bg-blue-950 text-white text-sm px-3 py-1 rounded-md shadow-lg z-10 uppercase">
                  Wing - Emerald
                </div>
                <img
                  src={M_Image_12}
                  alt={project.title}
                  className="rounded-lg shadow-xl w-full min-h-[320px] max-h-[350px] transition-transform duration-300 group-hover:scale-110"
                />
              </motion.div>
              <motion.div
                className="relative w-full lg:w-1/4 overflow-hidden group shadow-2xl rounded-lg"
                variants={FadeLeft()}
                initial="hidden"
                whileInView="visible"
              >
                {/* Label */}
                <div className="absolute top-2 left-2 bg-blue-950 text-white text-sm px-3 py-1 rounded-md shadow-lg z-10 uppercase">
                  Wing - Topaz
                </div>

                {/* Image with hover effect */}
                <img
                  src={M_Image_11}
                  alt={project.title}
                  className="rounded-lg shadow-xl w-full min-h-[320px] max-h-[350px] transition-transform duration-300 group-hover:scale-110"
                />
              </motion.div>
              <motion.div
                className="relative w-full lg:w-1/4 overflow-hidden group shadow-2xl rounded-lg"
                variants={FadeDown()}
                initial="hidden"
                whileInView="visible"
              >
                {/* Label */}
                <div className="absolute top-2 left-2 bg-blue-950 text-white text-sm px-3 py-1 rounded-md shadow-lg z-10 uppercase">
                  Wing - Pearl
                </div>
                <img
                  src={M_Image_13}
                  alt={project.title}
                  className="rounded-lg shadow-xl w-full min-h-[320px] max-h-[350px] transition-transform duration-300 group-hover:scale-110"
                />
              </motion.div>
              <motion.div
                className="relative w-full lg:w-1/4 overflow-hidden group shadow-2xl rounded-lg"
                variants={FadeRight()}
                initial="hidden"
                whileInView="visible"
              >
                {/* Label */}
                <div className="absolute top-2 left-2 bg-blue-950 text-white text-sm px-3 py-1 rounded-md shadow-lg z-10 uppercase">
                  Wing - Ruby
                </div>
                <img
                  src={M_Image_14}
                  alt={project.title}
                  className="rounded-lg shadow-xl w-full min-h-[320px] max-h-[350px] transition-transform duration-300 group-hover:scale-110"
                />
              </motion.div>
            </div>
            <div className="w-full lg:w-3/3 flex flex-col lg:flex-row items-center gap-5 mb-10">
              {/* building images */}
              <motion.div
                className="w-full lg:w-1/3 shadow-2xl rounded-lg"
                variants={FadeLeft()}
                initial="hidden"
                whileInView="visible"
              >
                <img
                  src={M_Image_5}
                  alt={project.title}
                  className="rounded-lg shadow-xl w-full min-h-[320px] max-h-[350px]"
                />
              </motion.div>

              {/* Details Section with Fade Right */}
              <motion.div
                className="w-full lg:w-1/3 shadow-2xl rounded-lg"
                variants={FadeDown()}
                initial="hidden"
                whileInView="visible"
              >
                <img
                  src={M_Image_6}
                  alt={project.title}
                  className="rounded-lg shadow-xl w-full min-h-[320px] max-h-[350px]"
                />
              </motion.div>

              {/* Details Section with Fade Right */}
              <motion.div
                className="w-full lg:w-1/3 shadow-2xl rounded-lg"
                variants={FadeRight()}
                initial="hidden"
                whileInView="visible"
              >
                <img
                  src={M_Image_7}
                  alt={project.title}
                  className="rounded-lg shadow-xl w-full min-h-[320px] max-h-[350px]"
                />
              </motion.div>
            </div>

            {/* Section: Commercial Spaces */}
            <div className="mb-6 grid grid-cols-1 lg:grid-cols-2 items-center">
              {/* Left: Title and List */}
              <div>
                <h2 className="text-xl font-semibold text-blue-950 mb-2">
                  Commercial Spaces
                </h2>
                <ul className="list-disc ml-6 text-blue-950 opacity-75">
                  <li>
                    Total Shops: <strong>89</strong>
                  </li>
                  <li>Strategically located for visibility & easy access.</li>
                  <li>Ideal for retail outlets, offices, & businesses.</li>
                </ul>
              </div>

              {/* Right: Large Icon */}
              <div className="flex justify-center">
                <Store className="text-yellow-500 w-24 h-24" />
              </div>
            </div>

            {/* Section: Amenities and Features */}
            <div className="mb-6 grid grid-cols-1 lg:grid-cols-2 items-center">
              {/* Left: Title and List */}
              <div>
                <h2 className="text-xl font-semibold text-blue-950 mb-2">
                  Amenities and Features
                </h2>
                <ul className="list-disc ml-6 text-blue-950 opacity-75">
                  <li>Modern elevators</li>
                  <li>24/7 security with CCTV</li>
                  <li>Power backup for common areas</li>
                  <li>Swimming pool & children’s play areas</li>
                  <li>Indoor gym, meditation room, walking track</li>
                  <li>Clubhouse with green garden</li>
                  <li>Multi-purpose court & Indoor games room</li>
                </ul>
              </div>

              {/* Right: Large Icon */}
              <div className="flex justify-center">
                <Star className="text-yellow-500 w-24 h-24" />
              </div>
            </div>
            {/* Ammenities Images */}
            <div className="w-full lg:w-3/3 flex flex-col lg:flex-row items-center gap-5 mb-10">
              <motion.div
                className="w-full lg:w-1/3 shadow-2xl rounded-lg"
                variants={FadeLeft()}
                initial="hidden"
                whileInView="visible"
              >
                <img
                  src={M_Image_8}
                  alt={project.title}
                  className="rounded-lg shadow-xl w-full min-h-[320px] max-h-[350px]"
                />
              </motion.div>

              {/* Details Section with Fade Right */}
              <motion.div
                className="w-full lg:w-1/3 shadow-2xl rounded-lg"
                variants={FadeUp()}
                initial="hidden"
                whileInView="visible"
              >
                <img
                  src={M_Image_9}
                  alt={project.title}
                  className="rounded-lg shadow-xl w-full min-h-[320px] max-h-[350px]"
                />
              </motion.div>

              {/* Details Section with Fade Right */}
              <motion.div
                className="w-full lg:w-1/3 shadow-2xl rounded-lg"
                variants={FadeRight()}
                initial="hidden"
                whileInView="visible"
              >
                <img
                  src={M_Image_10}
                  alt={project.title}
                  className="rounded-lg shadow-xl w-full min-h-[320px] max-h-[350px]"
                />
              </motion.div>
            </div>
            <div className="w-full lg:w-3/3 flex flex-col lg:flex-row items-center gap-5 mb-10">
              <motion.div
                className="w-full lg:w-1/3 shadow-2xl rounded-lg"
                variants={FadeLeft()}
                initial="hidden"
                whileInView="visible"
              >
                <img
                  src={AM_Image_11}
                  alt={project.title}
                  className="rounded-lg shadow-xl w-full min-h-[320px] max-h-[350px]"
                />
              </motion.div>

              {/* Details Section with Fade Right */}
              <motion.div
                className="w-full lg:w-1/3 shadow-2xl rounded-lg"
                variants={FadeUp()}
                initial="hidden"
                whileInView="visible"
              >
                <img
                  src={AM_Image_12}
                  alt={project.title}
                  className="rounded-lg shadow-xl w-full min-h-[320px] max-h-[350px]"
                />
              </motion.div>

              {/* Details Section with Fade Right */}
              <motion.div
                className="w-full lg:w-1/3 shadow-2xl rounded-lg"
                variants={FadeRight()}
                initial="hidden"
                whileInView="visible"
              >
                <img
                  src={AM_Image_13}
                  alt={project.title}
                  className="rounded-lg shadow-xl w-full min-h-[320px] max-h-[350px]"
                />
              </motion.div>
            </div>
          </div>
          {/* text */}
          <div className="w-full lg:w-3/4 flex flex-col lg:flex-row items-center gap-10 mb-10">
            {/* Details Section with Fade Right */}
            <motion.div
              className="w-full flex flex-col gap-4"
              variants={FadeUp()}
              initial="hidden"
              whileInView="visible"
            >
              <h3 className="text-blue-950 text-xl mt-6">
                <strong>Project Vision</strong>
              </h3>
              <p className="text-blue-950 opacity-75">
                Royal Empire aims to create a harmonious living and business
                ecosystem, providing residents with a comfortable lifestyle
                while offering thriving opportunities for commercial growth.
              </p>
            </motion.div>
          </div>
        </div>
        <Footer />
      </>
    );

  if (project.name === "Peak Orchard")
    return (
      <>
        <div className="flex flex-col items-center px-6">
          <motion.h2
            className="text-4xl font-bold font-averia text-blue-950 opacity-70 mb-8 mt-32"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {project.title}
          </motion.h2>
          {/* text */}
          <div className="w-full lg:w-3/4 flex flex-col lg:flex-row items-center gap-10 mb-10">
            {/* Details Section with Fade Right */}
            <motion.div
              className="w-full flex flex-col gap-4"
              variants={FadeUp()}
              initial="hidden"
              whileInView="visible"
            >
              <h3 className="text-blue-950 text-xl mt-6">
                <strong>
                  Prime Location | Premium Living | Thoughtful Development
                </strong>
              </h3>
              <p className="text-blue-950 opacity-75">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                Peak Orchard Estate is an exclusive residential plotting project
                strategically located near Godrej Orchard Estate, offering a
                perfect blend of modern infrastructure and serene surroundings.
                With only 72 well-planned plots, this premium development
                ensures a comfortable and secure living experience with
                top-notch amenities.
              </p>
            </motion.div>
          </div>
          {/* Download Button */}
          <div className="w-full lg:w-3/4 text-left mb-5">
            <a
              href={Peak_Orchard_Estate}
              download="Peak_Orchard_Estate.pdf"
              className="bg-blue-950 text-white flex items-center gap-2 px-4 py-2 rounded-lg shadow-md hover:bg-blue-900 transition-all w-fit"
            >
              <FaDownload className="text-lg" /> Download Brochure
            </a>
          </div>

          <div
            className="w-full lg:w-3/4 flex flex-col lg:flex-row items-center gap-10 mb-10"
            data-aos-delay={150}
          >
            {/* Image Section with Fade Left */}
            <motion.div
              className="w-full lg:w-full"
              variants={FadeRight()}
              initial="hidden"
              whileInView="visible"
            >
              <img
                src={PO_Image_1}
                alt={project.title}
                className="rounded-lg shadow-xl w-full min-h-[450px] max-h-[550px]"
              />
            </motion.div>
          </div>
          <div className="w-90 lg:w-3/4 mx-auto p-6 mb-6 bg-white shadow-lg rounded-lg">
            {/* Project Highlights */}
            <div className="mb-6 grid grid-cols-1 lg:grid-cols-2 items-center">
              {/* Left: Title and List */}
              <div>
                <h2 className="text-xl font-semibold text-blue-950 mb-2">
                  Project Highlights
                </h2>
                <ul className="list-disc ml-6 text-blue-950 opacity-75">
                  <li>
                    <strong>Total Plots</strong> : 72
                  </li>
                  <li>
                    <strong>Location</strong> : Near Godrej Orchard Estate.
                  </li>
                </ul>
              </div>

              {/* Right: Large Icon */}
              <div className="flex justify-center">
                <FaProjectDiagram className="text-yellow-500 w-24 h-24" />
              </div>
            </div>
            <div className="w-full lg:w-3/3 flex flex-col lg:flex-row items-center gap-5 mb-10">
              {/* building structure images */}
              <motion.div
                className="w-full lg:w-1/3 shadow-2xl rounded-lg"
                variants={FadeLeft()}
                initial="hidden"
                whileInView="visible"
              >
                <img
                  src={PO_Image_2}
                  alt={project.title}
                  className="rounded-lg shadow-xl w-full min-h-[320px] max-h-[350px]"
                />
              </motion.div>

              {/* Details Section with Fade Right */}
              <motion.div
                className="w-full lg:w-1/3 shadow-2xl rounded-lg"
                variants={FadeDown()}
                initial="hidden"
                whileInView="visible"
              >
                <img
                  src={PO_Image_3}
                  alt={project.title}
                  className="rounded-lg shadow-xl w-full min-h-[320px] max-h-[350px]"
                />
              </motion.div>

              {/* Details Section with Fade Right */}
              <motion.div
                className="w-full lg:w-1/3 shadow-2xl rounded-lg"
                variants={FadeRight()}
                initial="hidden"
                whileInView="visible"
              >
                <img
                  src={PO_Image_4}
                  alt={project.title}
                  className="rounded-lg shadow-xl w-full min-h-[320px] max-h-[350px]"
                />
              </motion.div>
            </div>

            {/* Infrastructure & Amenities: */}
            <div className="mb-6 grid grid-cols-1 lg:grid-cols-2 items-center">
              {/* Left: Title and List */}
              <div>
                <h2 className="text-xl font-semibold text-blue-950 mb-2">
                  Infrastructure & Amenities:
                </h2>
                <ul className="list-disc ml-6 text-blue-950 opacity-75">
                  <li>
                    <strong>Cement Roads</strong> : Well-constructed internal
                    roads for smooth connectivity.
                  </li>
                  <li>
                    <strong>Underground Electrification</strong> : Ensuring a
                    clutter-free and safe environment.
                  </li>
                  <li>
                    <strong>Sewer Drainage System</strong> : Efficient
                    wastewater management.
                  </li>
                  <li>
                    <strong>Stormwater Line</strong> : Advanced drainage system
                    to prevent waterlogging.
                  </li>
                  <li>
                    <strong>Fully Developed Three Open Spaces</strong> :
                    Dedicated green areas for community recreation.
                  </li>
                  <li>
                    <strong>Sewage Treatment Plant (STP)</strong> : Sustainable
                    and eco-friendly waste management.
                  </li>
                  <li>
                    <strong>24×7 Security</strong> : Gated community with
                    round-the-clock surveillance.
                  </li>
                  <li>
                    <strong>Drinking Water Provision</strong> : Reliable water
                    supply for every plot.
                  </li>
                  <li>
                    <strong>Complete Demarcation of All Plots</strong> : Clear
                    boundaries for hassle-free ownership.
                  </li>
                  <li>
                    <strong>Green Gym in Open Spaces</strong> : Outdoor fitness
                    facilities promoting a healthy lifestyle.
                  </li>
                  <li>
                    <strong>Walking Tracks in Open Spaces</strong> : Designed
                    for relaxation and well-being.
                  </li>
                  <li>
                    <strong>And Many More</strong> : Thoughtfully designed
                    features to enhance the overall living experience.
                  </li>
                </ul>
              </div>

              {/* Right: Large Icon */}
              <div className="flex justify-center">
                <FaBuilding className="text-yellow-500 w-24 h-24" />
              </div>
            </div>
          </div>
          {/* text */}
          <div className="w-full lg:w-3/4 flex flex-col lg:flex-row items-center gap-10 mb-10">
            {/* Details Section with Fade Right */}
            <motion.div
              className="w-full flex flex-col gap-4"
              variants={FadeUp()}
              initial="hidden"
              whileInView="visible"
            >
              <p className="text-blue-950 opacity-75">
                Peak Orchard Estate is not just about plots; it’s about building
                a thriving community with modern infrastructure, open spaces,
                and sustainable living. Secure your piece of this premium
                development today!!
              </p>
            </motion.div>
          </div>
        </div>
        <Footer />
      </>
    );

  if (project.name === "Anjaneya Nagar-V")
    return (
      <>
        <div className="flex flex-col items-center px-6">
          <motion.h2
            className="text-4xl font-bold font-averia text-blue-950 opacity-70 mb-8 mt-32"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {project.title}
          </motion.h2>
          {/* text */}
          <div className="w-full lg:w-3/4 flex flex-col lg:flex-row items-center gap-10 mb-10">
            {/* Details Section with Fade Right */}
            <motion.div
              className="w-full flex flex-col gap-4"
              variants={FadeUp()}
              initial="hidden"
              whileInView="visible"
            >
              <h3 className="text-blue-950 text-xl mt-6">
                <strong>
                  Prime Location | Thoughtful Infrastructure | Modern Amenities
                </strong>
              </h3>
              <p className="text-blue-950 opacity-75">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <strong>Anjaneya Nagar V</strong> is a premium residential
                plotting project strategically located{" "}
                <strong>
                  near IIIT, MNLU, and Kavikulguru Kalidas Sanskrit University
                </strong>
                . Spanning 594 well-demarcated plots, this development is
                designed to offer a secure, sustainable, and comfortable living
                environment with top-notch infrastructure and amenities.
              </p>
            </motion.div>
          </div>
          {/* Download Button */}
          <div className="w-full lg:w-3/4 text-left mb-5">
            <a
              href={Anjaneya_Nagar}
              download="Anjaneya_Nagar.pdf"
              className="bg-blue-950 text-white flex items-center gap-2 px-4 py-2 rounded-lg shadow-md hover:bg-blue-900 transition-all w-fit"
            >
              <FaDownload className="text-lg" /> Download Brochure
            </a>
          </div>

          <div
            className="w-full lg:w-3/4 flex flex-col lg:flex-row items-center gap-10 mb-10"
            data-aos-delay={150}
          >
            {/* Image Section with Fade Left */}
            <motion.div
              className="w-full lg:w-full"
              variants={FadeRight()}
              initial="hidden"
              whileInView="visible"
            >
              <img
                src={AN_Image_1}
                alt={project.title}
                className="rounded-lg shadow-xl w-full min-h-[450px] max-h-[550px]"
              />
            </motion.div>
          </div>
          <div className="w-90 lg:w-3/4 mx-auto p-6 mb-6 bg-white shadow-lg rounded-lg">
            {/* Project Highlights */}
            <div className="mb-6 grid grid-cols-1 lg:grid-cols-2 items-center">
              {/* Left: Title and List */}
              <div>
                <h2 className="text-xl font-semibold text-blue-950 mb-2">
                  Project Highlights
                </h2>
                <ul className="list-disc ml-6 text-blue-950 opacity-75">
                  <li>
                    <strong>Total Plots</strong> : 594
                  </li>
                  <li>
                    <strong>Location</strong> : Near IIIT, MNLU & Kavikulguru
                    Kalidas Sanskrit University.
                  </li>
                </ul>
              </div>

              {/* Right: Large Icon */}
              <div className="flex justify-center">
                <FaProjectDiagram className="text-yellow-500 w-24 h-24" />
              </div>
            </div>
            <div className="w-full lg:w-3/3 flex flex-col lg:flex-row items-center gap-5 mb-10">
              {/* building structure images */}
              <motion.div
                className="w-full lg:w-1/3 shadow-2xl rounded-lg"
                variants={FadeLeft()}
                initial="hidden"
                whileInView="visible"
              >
                <img
                  src={AN_Image_2}
                  alt={project.title}
                  className="rounded-lg shadow-xl w-full min-h-[320px] max-h-[350px]"
                />
              </motion.div>

              {/* Details Section with Fade Right */}
              <motion.div
                className="w-full lg:w-1/3 shadow-2xl rounded-lg"
                variants={FadeDown()}
                initial="hidden"
                whileInView="visible"
              >
                <img
                  src={AN_Image_3}
                  alt={project.title}
                  className="rounded-lg shadow-xl w-full min-h-[320px] max-h-[350px]"
                />
              </motion.div>

              {/* Details Section with Fade Right */}
              <motion.div
                className="w-full lg:w-1/3 shadow-2xl rounded-lg"
                variants={FadeRight()}
                initial="hidden"
                whileInView="visible"
              >
                <img
                  src={AN_Image_4}
                  alt={project.title}
                  className="rounded-lg shadow-xl w-full min-h-[320px] max-h-[350px]"
                />
              </motion.div>
            </div>

            {/* Infrastructure & Key Amenities: */}
            <div className="mb-6 grid grid-cols-1 lg:grid-cols-2 items-center">
              {/* Left: Title and List */}
              <div>
                <h2 className="text-xl font-semibold text-blue-950 mb-2">
                  Infrastructure & Key Amenities:
                </h2>
                <ul className="list-disc ml-6 text-blue-950 opacity-75">
                  <li>
                    <strong>Tar Roads</strong> : Well-constructed internal roads
                    for smooth connectivity.
                  </li>
                  <li>
                    <strong>Overhead Electrification </strong> : Ensuring a
                    reliable and efficient power supply.
                  </li>
                  <li>
                    <strong>Sewer Drainage System </strong> : Proper waste
                    management for a clean and hygienic environment.
                  </li>
                  <li>
                    <strong>Stormwater Line</strong> : Advanced drainage system
                    to prevent waterlogging.
                  </li>
                  <li>
                    <strong>Fully Developed Seven Open Spaces</strong> :
                    Dedicated green zones for recreation and community
                    engagement.
                  </li>
                  <li>
                    <strong>Sewage Treatment Plant (STP)</strong> :
                    Environment-friendly wastewater management system.
                  </li>
                  <li>
                    <strong>24×7 Security</strong> : Gated community with
                    round-the-clock surveillance for peace of mind.
                  </li>
                  <li>
                    <strong>Drinking Water Provision </strong> : Assured clean
                    and safe water supply for all plots.
                  </li>
                  <li>
                    <strong>Complete Demarcation of All Plots</strong> : Clear
                    boundary markings for hassle-free ownership.
                  </li>
                  <li>
                    <strong>Green Gym in Open Spaces</strong> : Outdoor fitness
                    areas promoting a healthy lifestyle.
                  </li>
                  <li>
                    <strong>Walking Tracks in Open Spaces </strong> : Dedicated
                    pathways for relaxation and well-being.
                  </li>
                  <li>
                    <strong>And Many More</strong> : Additional features
                    designed to enhance the quality of life.
                  </li>
                </ul>
              </div>

              {/* Right: Large Icon */}
              <div className="flex justify-center">
                <FaBuilding className="text-yellow-500 w-24 h-24" />
              </div>
            </div>

            {/* Why Choose Anjaneya Nagar V?: */}
            <div className="mb-6 grid grid-cols-1 lg:grid-cols-2 items-center">
              {/* Left: Title and List */}
              <div>
                <h2 className="text-xl font-semibold text-blue-950 mb-2">
                  Why Choose Anjaneya Nagar V?
                </h2>
                <ul className="text-blue-950 opacity-75">
                  <li>
                    ✔{" "}
                    <span className="ml-2">
                      Prime Location with proximity to top educational
                      institutions.
                    </span>
                  </li>
                  <li>
                    ✔{" "}
                    <span className="ml-2">
                      Modern Infrastructure ensuring a premium living
                      experience.
                    </span>
                  </li>
                  <li>
                    ✔{" "}
                    <span className="ml-2">
                      Well-Planned Open Spaces for a healthy and refreshing
                      environment.
                    </span>
                  </li>
                  <li>
                    ✔{" "}
                    <span className="ml-2">
                      Safe & Secure Community with 24x7 monitoring.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Right: Large Icon */}
              <div className="flex justify-center">
                <FaHandshake className="text-yellow-500 w-24 h-24" />
              </div>
            </div>
          </div>
          {/* text */}
          <div className="w-full lg:w-3/4 flex flex-col lg:flex-row items-center gap-10 mb-10">
            {/* Details Section with Fade Right */}
            <motion.div
              className="w-full flex flex-col gap-4"
              variants={FadeUp()}
              initial="hidden"
              whileInView="visible"
            >
              <p className="text-blue-950 opacity-75">
                <strong>Anjaneya Nagar V</strong> is not just about owning a
                plot—it’s about securing a future in a well-developed,
                future-ready community. Whether you’re looking for investment or
                a peaceful residential space, this project offers the perfect
                blend of connectivity, nature, and urban amenities.
              </p>
            </motion.div>
          </div>
        </div>
        <Footer />
      </>
    );

  if (project.name === "Woods Residency")
    return (
      <>
        <div className="flex flex-col items-center px-6">
          <motion.h2
            className="text-4xl font-bold font-averia text-blue-950 opacity-70 mb-8 mt-32"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {project.title}
          </motion.h2>
          {/* text */}
          <div className="w-full lg:w-3/4 flex flex-col lg:flex-row items-center gap-10 mb-10">
            {/* Details Section with Fade Right */}
            <motion.div
              className="w-full flex flex-col gap-4"
              variants={FadeUp()}
              initial="hidden"
              whileInView="visible"
            >
              <h3 className="text-blue-950 text-xl mt-6">
                <strong>
                  Exclusive Community | Prime Location | Modern Infrastructure
                </strong>
              </h3>
              <p className="text-blue-950 opacity-75">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <strong>Woods Residency</strong> is an elite residential
                plotting project with just{" "}
                <strong>37 well-planned plots</strong>, ensuring exclusivity and
                a serene living environment.{" "}
                <strong>
                  Located near Sahara City Project, Montfort CBSE School, and
                  St. Vincent Pallotti College of Engineering and Technology
                </strong>
                , this development is perfect for those looking for a
                well-connected yet peaceful neighborhood.
              </p>
            </motion.div>
          </div>
          {/* Download Button */}
          <div className="w-full lg:w-3/4 text-left mb-5">
            <a
              href={Woods_Residency}
              download="Woods_Residency.pdf"
              className="bg-blue-950 text-white flex items-center gap-2 px-4 py-2 rounded-lg shadow-md hover:bg-blue-900 transition-all w-fit"
            >
              <FaDownload className="text-lg" /> Download Brochure
            </a>
          </div>
          <div
            className="w-full lg:w-3/4 flex flex-col lg:flex-row items-center gap-10 mb-10"
            data-aos-delay={150}
          >
            {/* Image Section with Fade Left */}
            <motion.div
              className="w-full lg:w-full"
              variants={FadeRight()}
              initial="hidden"
              whileInView="visible"
            >
              <img
                src={W_Image_1}
                alt={project.title}
                className="rounded-lg shadow-xl w-full min-h-[450px] max-h-[550px]"
              />
            </motion.div>
          </div>

          <div className="w-90 lg:w-3/4 mx-auto p-6 mb-6 bg-white shadow-lg rounded-lg">
            {/* Project Highlights */}
            <div className="mb-6 grid grid-cols-1 lg:grid-cols-2 items-center">
              {/* Left: Title and List */}
              <div>
                <h2 className="text-xl font-semibold text-blue-950 mb-2">
                  Project Highlights
                </h2>
                <ul className="list-disc ml-6 text-blue-950 opacity-75">
                  <li>
                    <strong>Total Plots</strong> : 37
                  </li>
                  <li>
                    <strong>Location</strong> : Near Sahara City Project,
                    Montfort CBSE School & St. Vincent Pallotti College of
                    Engineering and Technology.
                  </li>
                </ul>
              </div>

              {/* Right: Large Icon */}
              <div className="flex justify-center">
                <FaProjectDiagram className="text-yellow-500 w-24 h-24" />
              </div>
            </div>
            <div className="w-full lg:w-3/3 flex flex-col lg:flex-row items-center gap-5 mb-10">
              {/* building structure images */}
              <motion.div
                className="w-full lg:w-3/3 shadow-2xl rounded-lg"
                variants={FadeUp()}
                initial="hidden"
                whileInView="visible"
              >
                <img
                  src={W_Image_3}
                  alt={project.title}
                  className="rounded-lg shadow-xl w-full h-[30vh] md:h-[45vh] lg:h-[45vh] xl:h-[55vh]"
                />
              </motion.div>
            </div>
            {/* Infrastructure & Key Amenities: */}
            <div className="mb-6 grid grid-cols-1 lg:grid-cols-2 items-center">
              {/* Left: Title and List */}
              <div>
                <h2 className="text-xl font-semibold text-blue-950 mb-2">
                  Infrastructure & Key Amenities:
                </h2>
                <ul className="list-disc ml-6 text-blue-950 opacity-75">
                  <li>
                    <strong>Cement Roads</strong> : Well-laid internal roads for
                    seamless access.
                  </li>
                  <li>
                    <strong>Underground Electrification</strong> : Ensuring a
                    clean and hazard-free environment.
                  </li>
                  <li>
                    <strong>Sewer Drainage System</strong> : Proper waste
                    management for hygiene and cleanliness.
                  </li>
                  <li>
                    <strong>Stormwater Line</strong> : Advanced drainage system
                    to prevent waterlogging.
                  </li>
                  <li>
                    <strong>Fully Developed Three Open Spaces</strong> :
                    Dedicated green areas for relaxation and community
                    engagement.
                  </li>
                  <li>
                    <strong>Sewage Treatment Plant (STP)</strong> : Sustainable
                    and eco-friendly wastewater management.
                  </li>
                  <li>
                    <strong>24×7 Security</strong> : Gated community with
                    round-the-clock surveillance.
                  </li>
                  <li>
                    <strong>Drinking Water Provision </strong> : Reliable and
                    safe water supply for all plots.
                  </li>
                  <li>
                    <strong>Complete Demarcation of All Plots</strong> : Clear
                    boundaries for hassle-free ownership.
                  </li>
                  <li>
                    <strong>Green Gym in Open Spaces</strong> : Outdoor fitness
                    areas promoting a healthy lifestyle.
                  </li>
                  <li>
                    <strong>Walking Tracks in Open Spaces</strong> : Dedicated
                    pathways for relaxation and well-being.
                  </li>
                  <li>
                    <strong>And Many More</strong> : Additional thoughtful
                    amenities for an enhanced living experience.
                  </li>
                </ul>
              </div>

              {/* Right: Large Icon */}
              <div className="flex justify-center">
                <FaBuilding className="text-yellow-500 w-24 h-24" />
              </div>
            </div>
            <div className="w-full lg:w-3/3 flex flex-col lg:flex-row items-center gap-5 mb-10">
              {/* layout images */}
              <motion.div
                className="w-full lg:w-1/3 shadow-2xl rounded-lg"
                variants={FadeRight()}
                initial="hidden"
                whileInView="visible"
              >
                <img
                  src={W_Image_2}
                  alt={project.title}
                  className="rounded-lg shadow-xl w-full min-h-[450px] max-h-[450px]"
                />
              </motion.div>

              <motion.div
                className="w-full lg:w-1/3 shadow-2xl rounded-lg"
                variants={FadeUp()}
                initial="hidden"
                whileInView="visible"
              >
                <img
                  src={W_Image_4}
                  alt={project.title}
                  className="rounded-lg shadow-xl w-full min-h-[450px] max-h-[450px]"
                />
              </motion.div>

              <motion.div
                className="w-full lg:w-1/3 shadow-2xl rounded-lg"
                variants={FadeLeft()}
                initial="hidden"
                whileInView="visible"
              >
                <img
                  src={W_Image_5}
                  alt={project.title}
                  className="rounded-lg shadow-xl w-full min-h-[450px] max-h-[450px]"
                />
              </motion.div>
            </div>
            {/* Why Choose Woods Residency? */}
            <div className="mb-6 grid grid-cols-1 lg:grid-cols-2 items-center">
              {/* Left: Title and List */}
              <div>
                <h2 className="text-xl font-semibold text-blue-950 mb-2">
                  Why Choose Woods Residency?
                </h2>
                <ul className="text-blue-950 opacity-75">
                  <li>
                    ✔{" "}
                    <span className="ml-2">
                      <strong>Prime Location</strong> - Close to major
                      educational institutions and residential landmarks.
                    </span>
                  </li>
                  <li>
                    ✔{" "}
                    <span className="ml-2">
                      <strong>Limited Plots</strong> - Exclusive community
                      living with a peaceful environment.
                    </span>
                  </li>
                  <li>
                    ✔{" "}
                    <span className="ml-2">
                      <strong>Modern Infrastructure</strong> - Thoughtfully
                      planned with essential and luxury amenities.
                    </span>
                  </li>
                  <li>
                    ✔{" "}
                    <span className="ml-2">
                      <strong>Green & Sustainable</strong> - Open spaces,
                      walking tracks, and STP for a clean and green lifestyle.
                    </span>
                  </li>
                  <li>
                    ✔{" "}
                    <span className="ml-2">
                      <strong>Safe & Secure</strong> - 24x7 security ensuring
                      peace of mind for residents.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Right: Large Icon */}
              <div className="flex justify-center">
                <FaHandshake className="text-yellow-500 w-24 h-24" />
              </div>
            </div>            
          </div>
          {/* text */}
          <div className="w-full lg:w-3/4 flex flex-col lg:flex-row items-center gap-10 mb-10">
            {/* Details Section with Fade Right */}
            <motion.div
              className="w-full flex flex-col gap-4"
              variants={FadeUp()}
              initial="hidden"
              whileInView="visible"
            >
              <p className="text-blue-950 opacity-75">
                <strong>Woods Residency</strong> is an ideal choice for
                investors and homeowners looking for a well-developed,
                future-ready residential community. Secure your plot today in
                this exclusive, high-value location!
              </p>
            </motion.div>
          </div>
        </div>
        <Footer />
      </>
    );
};

export default Project_details;
