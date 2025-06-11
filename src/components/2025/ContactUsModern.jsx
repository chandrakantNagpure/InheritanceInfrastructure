import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaMap, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactUsModern = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    message: "",
  });
  const [showToast, setShowToast] = useState(false);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.mobile.trim()) newErrors.mobile = "Mobile number is required.";
    else if (!/^\d{10}$/.test(formData.mobile))
      newErrors.mobile = "Enter a valid 10-digit mobile number.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email format.";
    if (!formData.message.trim()) newErrors.message = "Message is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    setErrors({ ...errors, [e.target.id]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    try {
      const response = await fetch("https://formsubmit.co/ajax/vetapo3244@linacit.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          mobile: formData.mobile,
          email: formData.email,
          message: formData.message,
          _subject: "New Contact Form Submission!",
          _template: "table",
        }),
      });

      const data = await response.json();
      if (data.success) {
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000);
        setFormData({ name: "", mobile: "", email: "", message: "" });
        setErrors({});
      } else {
        console.error("FormSubmit Error:", data.message);
        alert(`Failed to send message: ${data.message}`);
      }
    } catch (error) {
      console.error("Network Error:", error);
      alert("Failed to send message due to a network error.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="relative w-full overflow-hidden dark:bg-gray-900 md:h-screen">
      {/* Background Map */}
      <iframe
        title="map"
        src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d59552.281073694394!2d79.12098225!3d21.1118658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sPlot%20No.%2025%2C%20Sadan%20Housing%20Society%2C%20Nagpur!5e0!3m2!1sen!2sin!4v1729877622647!5m2!1sen!2sin"
        className="
          absolute top-0 left-0 w-full h-full z-0 
          filter brightness-90 dark:brightness-75 
          max-md:relative max-md:h-80 max-md:mb-6"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      {/* Contact Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="
          absolute z-10 bg-white/70 dark:bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl 
          p-8 max-w-lg w-[90%] left-1/2 -translate-x-1/2 bottom-10 md:bottom-20 
          text-gray-800 dark:text-white
          max-md:relative max-md:mx-auto max-md:w-full max-md:max-w-[80%] max-md:left-1 max-md:-translate-x-1"
      >
        <h2 className="text-3xl font-bold text-center mb-6 font-averia text-blue-950 dark:text-white">
          Contact Us
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Honeypot field for spam protection */}
          <input type="text" name="_honey" style={{ display: "none" }} />

          <div className="flex gap-4 flex-col md:flex-row">
            <div className="flex-1">
              <input
                id="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                name="name"
                className="w-full p-2 rounded-lg border focus:ring-2 focus:ring-blue-900 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
              />
              {errors.name && <p className="text-red-600 text-sm">{errors.name}</p>}
            </div>

            <div className="flex-1">
              <input
                id="mobile"
                type="text"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="Mobile"
                maxLength="10"
                name="mobile"
                className="w-full p-2 rounded-lg border focus:ring-2 focus:ring-blue-900 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
              />
              {errors.mobile && <p className="text-red-600 text-sm">{errors.mobile}</p>}
            </div>
          </div>

          <div>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              name="email"
              className="w-full p-2 rounded-lg border focus:ring-2 focus:ring-blue-900 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
            />
            {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}
          </div>

          <div>
            <textarea
              id="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              rows="4"
              name="message"
              className="w-full p-2 rounded-lg border focus:ring-2 focus:ring-blue-900 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
            ></textarea>
            {errors.message && <p className="text-red-600 text-sm">{errors.message}</p>}
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-blue-800 dark:bg-blue-900 text-white py-2 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-800 transition disabled:opacity-50"
          >
            {isLoading ? "Sending..." : "Send Message"}
          </button>
        </form>

        {/* Quick Info */}
        <div className="mt-6 space-y-2 text-sm">
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-red-500" />
            <a
              href="https://goo.gl/maps/kYNcyZpqWckxu3Bx7"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-red-600"
            >
              Plot No. 25, Sadan Housing Society, Nagpur
            </a>
          </div>
          <div className="flex items-center gap-2">
            <FaPhoneAlt className="text-green-500" />
            <a href="tel:+918806600115" className="hover:underline">
              +91-8806600115
            </a>
            ,{" "}
            <a href="tel:+918806600116" className="hover:underline">
              +91-8806600116
            </a>
          </div>
          <div className="flex items-center gap-2">
            <FaEnvelope className="text-blue-500" />
            <a href="mailto:properties@inheritanceinfra.in" className="hover:underline">
              properties@inheritanceinfra.in
            </a>
          </div>
        </div>
      </motion.div>

      {/* Toast Notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-green-600 text-white px-6 py-3 rounded-full shadow-lg"
          >
            Message sent successfully!
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ContactUsModern;