// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import logoImg from "../public/assets/images/Inheritance_logo.png";
// eslint-disable-next-line no-unused-vars
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenuUnfold } from "react-icons/ai";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  return (
    <div className="fixed w-full z-10">
      <div>
        <div className="flex flex-row justify-between p-0 lg:px-20 px-5 h-20 bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
          <div className="flex flex-row items-center cursor-pointer gap-4">
            <img src={logoImg} alt="" className="w-[180px] h-[80px]" />
            {/* <p className="text-lg lg:text-3xl text-blue-950 font-averia font-bold">
              Inheritance Infrastructure
            </p> */}
          </div>
          <nav className="hidden md:flex flex-row items-center text-sm gap-4 md:gap-10 lg:gap-16">
            <NavLink
              to="/"
              spy={true}
              smooth={true}
              duration={500}
              className="group relative inline-block cursor-pointer text-blue-950 hover:text-blue-800"
            >
              HOME
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-800 transform scale-x-0 origin-center transition-transform group-hover:scale-x-100"></span>
            </NavLink>

            <NavLink
              to="/about"
              spy={true}
              smooth={true}
              duration={500}
              className="group relative inline-block cursor-pointer text-blue-950 hover:text-blue-800"
            >
              ABOUT
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-800 transform scale-x-0 origin-center transition-transform group-hover:scale-x-100"></span>
            </NavLink>

            <NavLink
              to="/contact"
              spy={true}
              smooth={true}
              duration={500}
              className="group relative inline-block cursor-pointer text-blue-950 hover:text-blue-800"
            >
              CONTACT
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-800 transform scale-x-0 origin-center transition-transform group-hover:scale-x-100"></span>
            </NavLink>
          </nav>

          <div className="md:hidden flex items-center text-blue-950 cursor-pointer">
            {menu ? (
              <AiOutlineClose size={25} onClick={handleChange} />
            ) : (
              <AiOutlineMenuUnfold size={25} onClick={handleChange} />
            )}
          </div>
        </div>
        <div
          className={`${
            menu ? "translate-x-0" : "-translate-x-full"
          } md:hidden flex flex-col absolute bg-baseColor text-blue-950 left-0 top-20 text-sm text-center pt-4 pb-4 gap-6 w-full h-fit transition-transform duration-300 overflow-auto`}
        >
          <NavLink
            to="/"
            spy={true}
            smooth={true}
            duration={500}
            className="group relative inline-block cursor-pointer text-blue-950 hover:text-blue-800"
            onClick={closeMenu}
          >
            HOME
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-800 transform scale-x-0 origin-center transition-transform group-hover:scale-x-50"></span>
          </NavLink>

          <NavLink
            to="/about"
            spy={true}
            smooth={true}
            duration={500}
            className="group relative inline-block cursor-pointer text-blue-950 hover:text-blue-800"
            onClick={closeMenu}
          >
            ABOUT
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-800 transform scale-x-0 origin-center transition-transform group-hover:scale-x-50"></span>
          </NavLink>

          <NavLink
            to="/contact"
            spy={true}
            smooth={true}
            duration={500}
            className="group relative inline-block cursor-pointer text-blue-950 hover:text-blue-800"
            onClick={closeMenu}
          >
            CONTACT
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-800 transform scale-x-0 origin-center transition-transform group-hover:scale-x-50"></span>
          </NavLink>
        </div>
        <div className="flex justify-end">
          <div className="bg-blue-950 text-white p-3 w-auto md:w-auto lg:w-auto xl:w-auto">
            <p className="flex flex-row justify-center">
              Call Us: +91-7887860121
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
