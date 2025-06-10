// eslint-disable-next-line no-unused-vars
import React from "react";
import Mbinfra from "../../public/assets/images/mbinfra_1.jpg";
import Peakorchard from "../../public/assets/images/peakorchard.jpg";
import Anjaneyagroup from "../../public/assets/images/anjaneyagroup.jpg";
import WoodsResidency from "../../public/assets/images/woodsresidency.jpg";
// eslint-disable-next-line no-unused-vars
import { delay, motion } from "framer-motion";
import { FadeRight, FadeUp, FadeDown } from "../../utility/animation";
import { BiSolidArrowToRight } from "react-icons/bi";
import { NavLink } from "react-router-dom";

const MenusData = [
  {
    id: 1,
    name: "Royal Empire",
    title:
      "Royal Empire is an ambitious and luxurious real estate development designed to provide a perfect blend of residential and commercial spaces. The project is set to redefine urban living with state-of-the-art amenities and contemporary architectural design.",
    img: Mbinfra,
    delay: 0.3,
    textdelay: 0.5,
    btndelay: 0.6,
    fadeEffect: FadeRight(0.3),
  },
  {
    id: 2,
    name: "Peak Orchard",
    title:
      "Peak Orchard Estate is an exclusive residential plotting project strategically located near Godrej Orchard Estate, offering a perfect blend of modern infrastructure and serene surroundings. With only 72 well-planned plots, this premium development ensures a comfortable and secure living experience with top-notch amenities.",
    img: Peakorchard,
    delay: 1,
    textdelay: 1.5,
    btndelay: 1.6,
    fadeEffect: FadeDown(1.3),
  },
  {
    id: 3,
    name: "Anjaneya Nagar-V",
    title:
      "Anjaneya Nagar V is a premium residential plotting project strategically located near IIIT, MNLU, and Kavikulguru Kalidas Sanskrit University. Spanning 594 well-demarcated plots, this development is designed to offer a secure, sustainable, and comfortable living environment with top-notch infrastructure and amenities.",
    img: Anjaneyagroup,
    delay: 0.3,
    textdelay: 2.5,
    btndelay: 2.6,
    fadeEffect: FadeRight(2.3),
  },
  {
    id: 4,
    name: "Woods Residency",
    title:
      "Woods Residency is an elite residential plotting project with just 37 well-planned plots, ensuring exclusivity and a serene living environment. Located near Sahara City Project, Montfort CBSE School, and St. Vincent Pallotti College of Engineering and Technology, this development is perfect for those looking for a well-connected yet peaceful neighborhood.",
    img: WoodsResidency,
    delay: 1,
    textdelay: 3.5,
    btndelay: 3.6,
    fadeEffect: FadeDown(3.3),
  },
];

const Amenity = () => {
  return (
    <>
      <div className="pt-12 pb-12 p-3 lg:px-20 px-10 relative">
        <div className="pt-6 pb-6 mx-auto">
          {/* tile */}
          <h1 className="text-3xl text-center text-blue-950 font-averia font-bold">
            LATEST PROPERTIES
          </h1>
          {/* Amenities */}

          <div className="md:mt-12 mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
            {MenusData.map((menu) => (
              // eslint-disable-next-line react/jsx-key
              <div
                data-aos="fade-right"
                data-aos-anchor-placement="top-center"
                data-aos-delay={150}
                className="transition-all duration-300 ease-in-out hover:-translate-y-2"
              >
                <motion.div
                  variants={menu.fadeEffect}
                  initial="hidden"
                  whileInView="visible"
                  whileHover={{ scale: 1 }}
                  className="bg-white rounded-lg overflow-hidden shadow-lg"
                >
                  {/* Image */}
                  <div>
                    <img
                      src={menu.img}
                      alt=""
                      className="w-full xl:h-[320px] lg:h-[300px] md:h-[280px] h-[250px]"
                    />
                  </div>
                  <motion.div
                    variants={FadeUp(menu.textdelay)}
                    initial="hidden"
                    whileInView="visible"
                    className="p-[20px_10px_10px_10px] text-left"
                  >
                    {/* title */}
                    <h1 className="text-2xl font-averia text-blue-950 mt-2 mb-2">
                      {menu.name}
                    </h1>

                    <h3 className="text-md text-blue-950 opacity-75 mt-2 mb-5 md:h-[25vh] lg:h-[35vh] xl:h-[32vh]">
                      {menu.title}
                    </h3>
                  </motion.div>
                  <motion.div
                    variants={FadeRight(menu.btndelay)}
                    initial="hidden"
                    whileInView="visible"
                    className="flex p-[10px]"
                  >
                    {/* <NavLink
                      to={`/project_details/${menu.name}`}
                      className="read-more-btn flex items-center gap-2 mt-2 mb-4"
                    >
                      Read More
                      <BiSolidArrowToRight />
                    </NavLink> */}

                    <NavLink
                      to={`/project_details/${menu.name}`}
                      className="read-more-btn flex items-center gap-2 mt-2 mb-4 bg-blue-950 text-white px-4 py-2 rounded-md hover:bg-blue-950 transition-all duration-300 border-none outline-none"
                    >
                      Read More
                      <BiSolidArrowToRight />
                    </NavLink>
                  </motion.div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Amenity;
