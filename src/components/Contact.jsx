import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { motion, useScroll, useTransform, useAnimation } from "framer-motion";
import SiteFooter from './2025/SiteFooter.jsx';

// Typewriter effect for the title
const TypewriterText = ({ text }) => {
  const controls = useAnimation();

  React.useEffect(() => {
    const type = async () => {
      for (let i = 0; i <= text.length; i++) {
        await controls.start({
          width: `${(i / text.length) * 100}%`,
          transition: { duration: 0.05 },
        });
      }
    };
    type();
  }, [controls, text]);

  return (
    <div className="relative inline-block">
      <motion.h1
        className="text-4xl sm:text-5xl md:text-6xl font-averia font-bold text-black text-shadow-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {text}
      </motion.h1>
    </div>
  );
};

// Contact Form Component (Integrated with FormSubmit.co)
const ContactForm = () => {
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-[0_5px_15px_rgba(0,0,0,0.1)] dark:shadow-[0_5px_15px_rgba(255,255,255,0.05)]"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h2 className="text-4xl font-averia font-bold text-blue-950 dark:text-white mb-6">
        Let’s Connect
      </h2>
      <form
        action="https://formsubmit.co/your-email@example.com"
        method="POST"
      >
        <input
          type="hidden"
          name="_next"
          value="http://your-site.com/thank-you"
        />
        <input type="hidden" name="_captcha" value="false" />

        <div className="mb-5">
          <label
            htmlFor="name"
            className="block text-blue-950 dark:text-gray-200 font-medium mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 text-blue-950 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 transition-all duration-300"
            placeholder="Your Name"
            required
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-blue-950 dark:text-gray-200 font-medium mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 text-blue-950 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 transition-all duration-300"
            placeholder="Your Email"
            required
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="phone"
            className="block text-blue-950 dark:text-gray-200 font-medium mb-2"
          >
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 text-blue-950 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 transition-all duration-300"
            placeholder="Your Phone Number"
            required
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="message"
            className="block text-blue-950 dark:text-gray-200 font-medium mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 text-blue-950 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 transition-all duration-300"
            rows="4"
            placeholder="Your Message"
            required
          ></textarea>
        </div>

        <motion.button
          type="submit"
          className="w-full px-6 py-3 bg-gradient-to-r from-[#ed8161] to-[#558b6b] text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
          whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.2)" }}
          whileTap={{ scale: 0.95 }}
        >
          Send Message
        </motion.button>
      </form>
    </motion.div>
  );
};

// Map Section Component
const MapSection = () => {
  const mapSrc =
    "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d59552.281073694394!2d79.12098225!3d21.1118658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sPlot%20No.%2025%2C%20Sadan%20Housing%20Society%2C%20Anu%20Jyoti%20Apartment%2C%20Old%20Sneh%20Nagar%2C%20Near%20Santaji%20College%2C%20Nagpur%2C%20Maharashtra-%20440015%2C%20India.!5e0!3m2!1sen!2sin!4v1729877622647!5m2!1sen!2sin";

  return (
    <motion.div
      className="rounded-2xl overflow-hidden shadow-lg h-[650px] border border-gray-200 dark:border-gray-700"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <iframe
        title="Inheritance Infrastructure Location"
        className="w-full h-full"
        frameBorder="0"
        src={mapSrc}
        allowFullScreen=""
        aria-hidden="false"
        loading="lazy"
        onError={(e) => {
          e.target.src = "";
          e.target.outerHTML = `<div class="flex items-center justify-center h-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300">Failed to load map. Please try again later.</div>`;
        }}
      />
    </motion.div>
  );
};

// Office Details Component
const OfficeDetails = () => {
  return (
    <motion.div
      className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-[0_5px_15px_rgba(0,0,0,0.1)] dark:shadow-[0_5px_15px_rgba(255,255,255,0.05)] text-center relative overflow-hidden"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.3 },
      }}
    >
      {/* Gradient Overlay on Hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-950/10 opacity-0"
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
      <h2 className="text-3xl font-averia font-bold text-blue-950 dark:text-white mb-4 relative z-10">
        Visit Us
      </h2>
      <p className="text-gray-700 dark:text-gray-300 mb-3 relative z-10">
        <strong>Address:</strong> Plot No. 25, Sadan Housing Society, Anu Jyoti
        Apartment, Old Sneh Nagar, Near Santaji College, Nagpur, Maharashtra-
        440015, India.
      </p>
      <p className="text-gray-700 dark:text-gray-300 mb-3 relative z-10">
        <strong>Phone:</strong>{" "}
        <a
          href="tel:+917887860121"
          className="text-purple-600 dark:text-purple-400 hover:underline"
        >
          +91-7887860121
        </a>
      </p>
      <p className="text-gray-700 dark:text-gray-300 relative z-10">
        <strong>Email:</strong>{" "}
        <a
          href="mailto:properties@inheritanceinfra.in"
          className="text-purple-600 dark:text-purple-400 hover:underline"
        >
          properties@inheritanceinfra.in
        </a>
        ,{" "}
        <a
          href="mailto:inheritanceinfra@gmail.com"
          className="text-purple-600 dark:text-purple-400 hover:underline"
        >
          inheritanceinfra@gmail.com
        </a>
      </p>
    </motion.div>
  );
};

// Main Contact Component
const Contact = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Parallax effect for form and map section
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const formTranslateY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const mapTranslateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.5 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const backgroundVariants = {
    hidden: { opacity: 0, scale: 1.1 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1.2, ease: "easeOut" } },
  };

  // Fallback background image
  const fallbackImage =
    "https://placehold.co/1920x1080/cccccc/ffffff/png?text=Banner+Image+Not+Found&font=poppins";

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      {/* Subtle Grain Texture Background */}
      <div
        className="absolute inset-0 opacity-10 dark:opacity-20 pointer-events-none"
        style={{
          backgroundImage: "url('https://www.transparenttextures.com/patterns/noisy-grid.png')",
          backgroundSize: "200px 200px",
        }}
      />

      {/* New Banner Section with Increased Height */}
      <section className="relative w-full min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Animation */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80')",
          }}
          variants={backgroundVariants}
          initial="hidden"
          animate="visible"
          onError={(e) => (e.target.style.backgroundImage = `url(${fallbackImage})`)}
        />

        {/* Previous Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-50 dark:to-gray-900" aria-hidden="true" />

        {/* Wave Effect at the Bottom */}
        <motion.div
          className="absolute bottom-0 left-0 w-full h-24"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <svg
            className="w-full h-full"
            viewBox="0 0 1440 100"
            preserveAspectRatio="none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              d="M0 60C240 20 480 80 720 40C960 0 1200 80 1440 40V100H0V60Z"
              fill="white"
              fillOpacity="0.1"
              animate={{
                d: [
                  "M0 60C240 20 480 80 720 40C960 0 1200 80 1440 40V100H0V60Z",
                  "M0 40C240 80 480 20 720 60C960 100 1200 20 1440 60V100H0V40Z",
                ],
              }}
              transition={{ repeat: Infinity, repeatType: "reverse", duration: 5 }}
            />
          </svg>
        </motion.div>

        {/* Content */}
        <motion.div
          className="relative z-10 flex flex-col items-center justify-center text-center text-black px-4 py-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Page Title with Typewriter Effect */}
          <motion.div variants={itemVariants}>
            <TypewriterText text="Contact Us" />
          </motion.div>

          {/* Subtitle */}
          <motion.p
            className="mt-4 text-lg md:text-2xl opacity-80 max-w-2xl mx-auto font-poppins"
            variants={itemVariants}
          >
            Have questions or need assistance? We’re here to help you every step of the way.
          </motion.p>

          {/* Breadcrumb */}
          <motion.nav
            className="flex items-center gap-2 text-base sm:text-lg font-poppins mt-4"
            aria-label="Breadcrumb"
            variants={itemVariants}
          >
            <NavLink
              to="/"
              className="hover:text-purple-300 transition-colors duration-300"
              aria-label="Home"
            >
              Home
            </NavLink>
            <span className="text-gray-300">/</span>
            <span className="text-[#ed8161]">Contact</span>
          </motion.nav>
        </motion.div>
      </section>

      {/* Contact Form and Map Section with Parallax */}
      <section
        ref={sectionRef}
        className="relative container mx-auto px-4 py-20"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div style={{ translateY: formTranslateY }}>
            <ContactForm />
          </motion.div>
          <motion.div
            style={{ translateY: mapTranslateY }}
            className="h-[650px]"
          >
            <MapSection />
          </motion.div>
        </div>
      </section>

      {/* Office Details Section */}
      <section className="container mx-auto px-4 py-16">
        <OfficeDetails />
      </section>

      <SiteFooter />
    </div>
  );
};

export default Contact;