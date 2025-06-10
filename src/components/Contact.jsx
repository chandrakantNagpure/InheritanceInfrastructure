// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
// eslint-disable-next-line no-unused-vars
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page on component mount
  }, []);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to backend)
    alert("Form Submitted!");
  };

  return (
    <>
      <div className="container mx-auto px-4 py-24">
        <motion.h1
          className="text-5xl font-averia font-semibold text-center text-blue-950  mb-8 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Contact Us
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Google Map Section */}
          <motion.div
            className="rounded-lg overflow-hidden shadow-xl border border-blue-200"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Google Maps Embed */}
            <iframe
              title="map"
              className="w-full h-full"
              frameBorder="0"
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d59552.281073694394!2d79.12098225!3d21.1118658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sPlot%20No.%2025%2C%20Sadan%20Housing%20Society%2C%20Anu%20Jyoti%20Apartment%2C%20Old%20Sneh%20Nagar%2C%20Near%20Santaji%20College%2C%20Nagpur%2C%20Maharashtra-%20440015%2C%20India.!5e0!3m2!1sen!2sin!4v1729877622647!5m2!1sen!2sin"
              allowFullScreen=""
              aria-hidden="false"
            />
          </motion.div>
          {/* Contact Form */}
          <motion.div
            className="bg-white shadow-xl rounded-lg p-8 border border-blue-200"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-semibold mb-6 text-blue-950 opacity-70">
              Get in Touch
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-blue-950 opacity-70 font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-950 opacity-70"
                  placeholder="Your Name"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-blue-950 opacity-70 font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-950 opacity-70"
                  placeholder="Your Email"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-blue-950 opacity-70 font-medium mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-950 opacity-70"
                  placeholder="Your Phone Number"
                  required
                />
              </div>

              <div className="mb-6">
                <label className="block text-blue-950 opacity-70 font-medium mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-950 opacity-70"
                  rows="4"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>

              <motion.button
                type="submit"
                className="w-full px-6 py-3 bg-blue-950 text-white font-semibold rounded-lg shadow-md hover:opacity-70 hover:shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Submit
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Address and Contact Details */}
        <motion.div
          className="mt-12 rounded-lg p-8 text-center shadow-md"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-semibold text-blue-950 opacity-70 mb-4">
            Our Office
          </h2>
          <p className="text-gray-700 opacity-70">
            <strong>Address:</strong> Plot No. 25, Sadan Housing Society, Anu
            Jyoti Apartment, Old Sneh Nagar, Near Santaji College, Nagpur,
            Maharashtra- 440015, India.
          </p>
          <p className="text-gray-700 opacity-70">
            <strong>Phone:</strong> +91-7887860121
          </p>
          <p className="text-gray-700 opacity-70">
            <strong>Email:</strong> properties@inheritanceinfra.in,
            inheritanceinfra@gmail.com
          </p>
        </motion.div>
      </div>
      <footer className="bg-gray-800 text-white py-8">
        <div className="w-[90%] mx-auto">
          {/* Bottom Footer */}
          <div className="text-center">
            <p>
              &copy; {new Date().getFullYear()} Inheritance Infrastructure. All
              Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Contact;
