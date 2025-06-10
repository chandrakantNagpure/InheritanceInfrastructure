import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "react-router-dom";
import { BiSolidArrowToRight } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";

import Mbinfra from "../../assets/images/mbinfra_1.jpg";
import Peakorchard from "../../assets/images/peakorchard.jpg";
import Anjaneyagroup from "../../assets/images/anjaneyagroup.jpg";
import WoodsResidency from "../../assets/images/woodsresidency.jpg";

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

const Modal = ({ item, onClose }) => {
  return (
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
              className="w-full h-80 md:h-[24rem] object-cover rounded-lg mb-6"
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
};

const ResponsiveGridWithModal = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  return (
    <section className="relative w-full py-24 px-4 lg:px-32 bg-[linear-gradient(to_bottom,_#ffffff_0%,_#fff6f3_0%,_#f2f7f4_100%)] dark:bg-[linear-gradient(to_bottom,_#1a1a1a_0%,_#0d0d0d_50%,_#000000_100%)]">
      <h2 className="text-4xl font-bold text-center text-[#558b6b] font-averia mb-16">
        FEATURED PROJECTS
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {MenusData.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            onClick={() => setSelectedCard(item)}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                setSelectedCard(item);
              }
            }}
            className="relative cursor-pointer overflow-hidden rounded-2xl shadow-lg group focus:outline-none focus:ring-2 focus:ring-[#ed8161] transition-all duration-300"
          >
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
              decoding="async"
            />

            {/* Hover Overlay */}
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent text-white p-6 opacity-0 translate-y-full group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
              <h3 className="text-xl font-bold mb-2">{item.name}</h3>
              <button
                onClick={() => setSelectedCard(item)}
                className="inline-block bg-[#ed8161] hover:bg-[#e46c4f] text-white text-sm px-4 py-2 rounded-full mt-1 transition-all duration-200"
              >
                Click Me
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      <Modal item={selectedCard} onClose={() => setSelectedCard(null)} />
    </section>
  );
};

export default ResponsiveGridWithModal;
