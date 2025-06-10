import React, { useState, useEffect } from "react";
import logoImg from "../../public/assets/images/logo.png";
import { NavLink } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenuUnfold } from "react-icons/ai";
import { BsSun, BsMoon } from "react-icons/bs";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(() =>
    localStorage.getItem("theme") === "dark"
  );

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    if (newMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      document.documentElement.classList.add("dark");
    }
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "ABOUT", path: "/about" },
    { name: "PROJECT", path: "/project" },
    { name: "GALLERY", path: "/gallery" },
    { name: "CONTACT", path: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out transform backdrop-blur-md ${
        isScrolled
          ? "scale-100 opacity-100 shadow-md bg-white/80 dark:bg-black/70"
          : "scale-95 opacity-100 shadow-none bg-white/80 dark:bg-black/70"
      }`}
    >
      <div className="flex items-center justify-between px-5 lg:px-20 py-3">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <img
            src={logoImg}
            alt="Logo"
            className="w-[220px] h-[70px] object-contain transition-all duration-300"
          />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-sm items-center">
          {navLinks.map((link, i) => (
            <NavLink
              key={i}
              to={link.path}
              className={({ isActive }) =>
                `group relative inline-block cursor-pointer transition-colors duration-300 
                ${
                  isActive
                    ? "text-[#ed8161] font-semibold"
                    : "text-[#558b6b] dark:text-gray-200 hover:text-[#ed8161]"
                }`
              }
              onClick={closeMenu}
            >
              {link.name}
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[#ed8161] transform scale-x-0 group-hover:scale-x-100 origin-center transition-transform duration-300"></span>
            </NavLink>
          ))}

          {/* Theme Toggle */}
          <button
            onClick={toggleDarkMode}
            className="ml-4 text-[#558b6b] dark:text-white hover:text-[#ed8161] transition duration-300"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <BsSun size={20} /> : <BsMoon size={20} />}
          </button>
        </nav>

        {/* Mobile Icon */}
        <div className="md:hidden text-[#558b6b] dark:text-white cursor-pointer flex items-center gap-3">
          <button onClick={toggleDarkMode}>
            {darkMode ? <BsSun size={20} /> : <BsMoon size={20} />}
          </button>
          {menuOpen ? (
            <AiOutlineClose size={25} onClick={toggleMenu} />
          ) : (
            <AiOutlineMenuUnfold size={25} onClick={toggleMenu} />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden flex flex-col items-center gap-6 bg-white dark:bg-[#1f1f1f] text-[#558b6b] dark:text-white px-5 py-6 transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-[110%]"
        } absolute w-full top-full left-0 shadow-md`}
      >
        {navLinks.map((link, i) => (
          <NavLink
            key={i}
            to={link.path}
            className={({ isActive }) =>
              `group relative inline-block cursor-pointer transition duration-300 
              ${
                isActive
                  ? "text-[#ed8161] font-semibold"
                  : "hover:text-[#ed8161]"
              }`
            }
            onClick={closeMenu}
          >
            {link.name}
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[#ed8161] transform scale-x-0 origin-center transition-transform group-hover:scale-x-100"></span>
          </NavLink>
        ))}
      </div>
    </header>
  );
};

export default Header;
