import React, { useState, useRef } from "react";
import Mbinfra from "../../public/assets/images/mbinfra_1.jpg";
import Peakorchard from "../../public/assets/images/peakorchard.jpg";
import Anjaneyagroup from "../../public/assets/images/anjaneyagroup.jpg";
import WoodsResidency from "../../public/assets/images/woodsresidency.jpg";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { BiSolidArrowToRight } from "react-icons/bi";

const MenusData = [
  {
    id: 1,
    name: "Royal Empire",
    title: "RRoyal Empire is an ambitious and luxurious real estate development ...",
    img: Mbinfra,
  },
  {
    id: 2,
    name: "Peak Orchard",
    title: "Peak Orchard Estate is an exclusive residential plotting project ...",
    img: Peakorchard,
  },
  {
    id: 3,
    name: "Anjaneya Nagar-V",
    title: "Anjaneya Nagar V is a premium residential plotting project V ...",
    img: Anjaneyagroup,
  },
  {
    id: 4,
    name: "Woods Residency",
    title: "Woods Residency is an elite residential plotting project ...",
    img: WoodsResidency,
  },
];

const GlowBorderCard = ({ item, index }) => {
  const cardRef = useRef(null);
  const [glow, setGlow] = useState({
    edge: null,
    pos: 0,
    visible: false,
  });

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const w = rect.width;
    const h = rect.height;

    const distances = [
      { edge: "top", dist: mouseY },
      { edge: "right", dist: w - mouseX },
      { edge: "bottom", dist: h - mouseY },
      { edge: "left", dist: mouseX },
    ];

    distances.sort((a, b) => a.dist - b.dist);
    const closest = distances[0];
    const glowThreshold = 50;

    if (closest.dist <= glowThreshold) {
      let pos = 0;
      switch (closest.edge) {
        case "top":
        case "bottom":
          pos = mouseX / w;
          break;
        case "left":
        case "right":
          pos = mouseY / h;
          break;
        default:
          pos = 0;
      }
      setGlow({ edge: closest.edge, pos, visible: true });
    } else {
      setGlow((prev) => ({ ...prev, visible: false }));
    }
  };

  const handleMouseLeave = () => {
    setGlow((prev) => ({ ...prev, visible: false }));
  };

  const glowSize = 80;

  const glowCommonStyle = {
    position: "absolute",
    pointerEvents: "none",
    borderRadius: "10px",
    filter: "blur(12px)",
    background: "rgba(237, 129, 97, 0.7)", // coral glow
    opacity: glow.visible ? 1 : 0,
    transition: "opacity 0.3s ease, top 0.2s ease, left 0.2s ease",
  };

  let glowStyle = {};

  if (glow.edge === "top") {
    glowStyle = {
      ...glowCommonStyle,
      top: 0,
      left: `calc(${glow.pos * 100}% - ${glowSize / 2}px)`,
      width: `${glowSize}px`,
      height: "8px",
    };
  } else if (glow.edge === "bottom") {
    glowStyle = {
      ...glowCommonStyle,
      bottom: 0,
      left: `calc(${glow.pos * 100}% - ${glowSize / 2}px)`,
      width: `${glowSize}px`,
      height: "8px",
    };
  } else if (glow.edge === "left") {
    glowStyle = {
      ...glowCommonStyle,
      left: 0,
      top: `calc(${glow.pos * 100}% - ${glowSize / 2}px)`,
      width: "8px",
      height: `${glowSize}px`,
    };
  } else if (glow.edge === "right") {
    glowStyle = {
      ...glowCommonStyle,
      right: 0,
      top: `calc(${glow.pos * 100}% - ${glowSize / 2}px)`,
      width: "8px",
      height: `${glowSize}px`,
    };
  }

  return (
    <motion.div
      ref={cardRef}
      key={item.id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative overflow-hidden rounded-xl shadow-lg group cursor-pointer"
      style={{ borderRadius: "1rem" }}
    >
      <img
        src={item.img}
        alt={item.name}
        className="w-full h-[300px] object-cover transform group-hover:scale-105 transition-transform duration-500"
      />
      {/* Glow spot */}
      <div style={glowStyle} />

      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/60 opacity-0 pointer-events-none
                   group-hover:opacity-100 group-hover:pointer-events-auto
                   transition-opacity duration-700 ease-in-out
                   flex flex-col justify-center items-center text-center p-6"
      >
        <motion.h3
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-xl font-bold text-white mb-3"
        >
          {item.name}
        </motion.h3>
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-sm text-white mb-4"
        >
          {item.title}
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <NavLink
            to={`/project_details/${item.name}`}
            className="bg-white text-[#558b6b] border border-[#ed8161] px-4 py-2 rounded-md flex items-center gap-2 font-medium hover:bg-[#ed8161]/20 transition"
          >
            Read More <BiSolidArrowToRight />
          </NavLink>
        </motion.div>
      </div>
    </motion.div>
  );
};

const HoverOverlayProjects = () => {
  return (
    <section className="py-16 px-5 md:px-20 bg-white dark:bg-[#111]">
      <h2 className="text-3xl font-bold text-center text-[#558b6b] dark:text-white font-averia mb-12">
        FEATURED PROJECTS
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {MenusData.map((item, index) => (
          <GlowBorderCard key={item.id} item={item} index={index} />
        ))}
      </div>
    </section>
  );
};

export default HoverOverlayProjects;
