import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "react-router-dom";
import { BiSolidArrowToRight } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Mbinfra from "../../public/assets/images/mbinfra_1.jpg";
import Peakorchard from "../../public/assets/images/peakorchard.jpg";
import Anjaneyagroup from "../../public/assets/images/anjaneyagroup.jpg";
import WoodsResidency from "../../public/assets/images/woodsresidency.jpg";

const MenusData = [
  {
    id: 1,
    name: "Royal Empire",
    title:
      "Royal Empire is an ambitious and luxurious real estate development with high-end amenities and prime location.",
    img: Mbinfra,
  },
  {
    id: 2,
    name: "Peak Orchard",
    title:
      "Peak Orchard Estate is an exclusive residential plotting project with scenic views and premium facilities.",
    img: Peakorchard,
  },
  {
    id: 3,
    name: "Anjaneya Nagar-V",
    title:
      "Anjaneya Nagar V is a premium residential plotting project offering peaceful living with modern infrastructure.",
    img: Anjaneyagroup,
  },
  {
    id: 4,
    name: "Woods Residency",
    title:
      "Woods Residency is an elite residential plotting project surrounded by lush greenery and excellent connectivity.",
    img: WoodsResidency,
  },
];

// Modal component remains unchanged
const Modal = ({ item, onClose }) => (
  <AnimatePresence>
    {item && (
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="bg-white dark:bg-[#172218] rounded-xl max-w-3xl w-full mx-4 p-6 relative shadow-xl overflow-auto max-h-[90vh]"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 dark:hover:text-white text-3xl"
          >
            <IoMdClose />
          </button>

          <img
            src={item.img}
            alt={item.name}
            className="w-full h-64 md:h-80 object-cover rounded-lg mb-6"
            loading="lazy"
            decoding="async"
          />
          <h3 className="text-3xl font-bold text-[#558b6b] font-averia mb-4">
            {item.name}
          </h3>
          <p className="text-gray-800 dark:text-gray-300 text-lg leading-relaxed mb-6">
            {item.title}
          </p>

          <NavLink
            to={`/project_details/${item.name}`}
            className="inline-flex items-center gap-2 font-semibold text-[#ed8161] hover:underline text-xl"
            onClick={onClose}
          >
            Read More <BiSolidArrowToRight size={24} />
          </NavLink>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

// Modern Arrow Component
const CustomArrow = ({ direction, onClick }) => (
  <button
    onClick={onClick}
    className={`absolute top-1/2 z-10 -translate-y-1/2 bg-[#ed8161] hover:bg-[#e46c4f] text-white p-3 rounded-full shadow-lg transition duration-300 ${
      direction === "left" ? "left-4" : "right-4"
    }`}
  >
    {direction === "left" ? <FaArrowLeft size={18} /> : <FaArrowRight size={18} />}
  </button>
);

const ResponsiveSliderWithModal = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: "15%",
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <CustomArrow direction="right" />,
    prevArrow: <CustomArrow direction="left" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          centerPadding: "10%",
        },
      },
      {
        breakpoint: 768,
        settings: {
          centerPadding: "5%",
        },
      },
      {
        breakpoint: 480,
        settings: {
          centerPadding: "0",
        },
      },
    ],
  };

  return (
    <section className="relative w-full py-24 px-4 bg-[linear-gradient(to_bottom,_#ffffff_0%,_#fff6f3_0%,_#f2f7f4_100%)] dark:bg-[linear-gradient(to_bottom,_#1a1a1a_0%,_#0d0d0d_50%,_#000000_100%)]">
      <h2 className="text-4xl font-bold text-center text-[#558b6b] font-averia mb-16">
        FEATURED PROJECTS
      </h2>

      <div className="container-fluid px-0">
        <Slider {...settings}>
          {MenusData.map((item) => (
            <div key={item.id} className="px-4">
              <motion.div
                className="relative cursor-pointer overflow-hidden rounded-2xl shadow-lg group"
                onClick={() => setSelectedCard(item)}
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-[420px] object-cover rounded-2xl group-hover:scale-105 transition-transform duration-300"
                />

                {/* Hover Overlay */}
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent text-white p-6 opacity-0 translate-y-full group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
                  <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                  <button
                    onClick={() => setSelectedCard(item)}
                    className="inline-block bg-[#ed8161] hover:bg-[#e46c4f] text-white text-sm px-4 py-2 rounded-full mt-1"
                  >
                    Click Me
                  </button>
                </div>
              </motion.div>
            </div>
          ))}
        </Slider>
      </div>

      <Modal item={selectedCard} onClose={() => setSelectedCard(null)} />

      {/* Dot Styling */}
      <style>{`
        .slick-dots {
          bottom: -35px;
        }
        .slick-dots li button:before {
          font-size: 12px;
          color: #ccc;
        }
        .slick-dots li.slick-active button:before {
          color: #ed8161;
        }
      `}</style>
    </section>
  );
};

export default ResponsiveSliderWithModal;
