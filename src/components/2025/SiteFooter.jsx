import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import logoImg from "../../assets/images/logo.png"; // Adjust path if needed

const SiteFooter = () => {
  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "ABOUT", path: "/about" },
    { name: "PROJECT", path: "/project" },
    { name: "GALLERY", path: "/gallery" },
    { name: "CONTACT", path: "/contact" },
  ];

  return (
    <footer className="relative z-10 pt-16 pb-8 px-6 md:px-20 bg-white dark:bg-[#101815] text-gray-700 dark:text-gray-300 select-none transition-colors duration-500">
      {/* Top colored accent bar */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#ed8161] via-[#ffba7b] to-[#558b6b]" />

      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Logo & Tagline */}
        <div className="flex flex-col items-start gap-4">
          <img
            src={logoImg}
            alt="Inheritance Infrastructure Logo"
            className="w-56 object-contain" // Increased from w-40 to w-56
          />
          <p className="text-gray-600 dark:text-gray-400 text-sm max-w-xs leading-relaxed transition-colors duration-500">
            Building trust through quality infrastructure. Your partner for
            properties in Nagpur and beyond.
          </p>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col gap-2 md:col-span-1">
        <h3
  className="
    text-lg font-semibold mb-4 text-gray-900 dark:text-white
    border-b-2 border-[#ed8161]
    inline-block pb-1
    max-w-max
    transition-colors duration-500
  "
>
  Navigation
</h3>

          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `hover:text-[#ed8161] transition-colors duration-200 ${
                      isActive ? "text-[#ed8161] font-semibold" : ""
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white border-b-2 border-[#ed8161] inline-block pb-1 transition-colors duration-500">
            Contact Us
          </h3>
          <ul className="space-y-4 text-sm text-gray-600 dark:text-gray-400 transition-colors duration-500">
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-[#ed8161] w-5 h-5 flex-shrink-0 mt-1" />
              <a
                href="https://www.google.com/maps/place/Plot+No.+25,+Sadan+Housing+Society,+Anu+Jyoti+Apartment,+Old+Sneh+Nagar,+Near+Santaji+College,+Nagpur,+Maharashtra+-+440015"
                target="_blank"
                rel="noopener noreferrer"
                className="leading-relaxed hover:text-[#ed8161] transition-colors duration-200"
              >
                Plot No. 25, Sadan Housing Society, Anu Jyoti Apartment, Old Sneh Nagar, Near Santaji College, Nagpur, Maharashtra - 440015, India.
              </a>
            </li>

            <li className="flex items-center gap-3">
              <FaEnvelope className="text-[#ed8161] w-5 h-5 flex-shrink-0" />
              <a
                href="mailto:properties@inheritanceinfra.in"
                className="hover:text-[#ed8161] transition-colors duration-200 break-all"
              >
                properties@inheritanceinfra.in
              </a>
            </li>

            <li className="flex items-center gap-3">
              <FaEnvelope className="text-[#ed8161] w-5 h-5 flex-shrink-0" />
              <a
                href="mailto:inheritanceinfra@gmail.com"
                className="hover:text-[#ed8161] transition-colors duration-200 break-all"
              >
                inheritanceinfra@gmail.com
              </a>
            </li>

            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-[#ed8161] w-5 h-5 flex-shrink-0" />
              <div className="flex flex-col">
                <a
                  href="tel:+918806600115"
                  className="hover:text-[#ed8161] transition-colors duration-200"
                >
                  (+91) 88066 00115
                </a>
                <a
                  href="tel:+918806600116"
                  className="hover:text-[#ed8161] transition-colors duration-200"
                >
                  (+91) 88066 00116
                </a>
              </div>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white border-b-2 border-[#ed8161] inline-block pb-1 transition-colors duration-500">
            Follow Us
          </h3>
          <p className="mb-4 text-sm text-gray-600 dark:text-gray-400 max-w-xs transition-colors duration-500">
            Follow us on social media for latest property updates and more.
          </p>
          <div className="flex gap-5 text-xl text-gray-600 dark:text-gray-400 transition-colors duration-500">
            <a
              href="https://www.facebook.com/share/15xvGkL6zi/?mibextid=qi2Omg"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#ed8161] transition-colors duration-300"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://youtube.com/@inheritanceinfrastructure?si=E32slGS6LWVSEqra"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#ed8161] transition-colors duration-300"
              aria-label="YouTube"
            >
              <FaYoutube />
            </a>
            <a
              href="https://www.instagram.com/inheritanceinfrastructure?utm_source=qr&igsh=MW1iZDNnYmhoODJlcA=="
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#ed8161] transition-colors duration-300"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="mt-16 border-t border-[#ed8161]/40 pt-6 text-center text-gray-500 dark:text-gray-400 text-sm select-text transition-colors duration-500">
        &copy; {new Date().getFullYear()} Inheritance Infrastructure. All
        rights reserved.
      </div>
    </footer>
  );
};

export default SiteFooter;
