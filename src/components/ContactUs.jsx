import { useState } from "react";
import emailjs from "emailjs-com";

const ContactUs = () => {
  // to send email
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = "service_x147r7f"; // Replace with your EmailJS service ID
    const templateID = "template_gctosva"; // Replace with your EmailJS template ID
    const userID = "UrvHFT0AFgb7yrCN4"; // Replace with your EmailJS user ID
    
    emailjs
      .send(serviceID, templateID, formData, userID)
      .then((response) => {
        console.log("Email sent successfully!", response);
        alert("Email sent successfully!");
        setFormData({ name: "", mobile: "", email: "", message: "" }); // Clear form
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        alert("Failed to send email.");
      });
  };

  return (
    <div className="pt-12 pb-12 p-3 lg:px-20 px-10 relative">
      {/* tile */}
      <h1 className="text-3xl text-center text-blue-950 font-averia font-bold mb-4">
        CONTACT US
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
        {/* Left Side: Address and Map */}

        <div className="space-y-2">
          <iframe
            className="w-full h-64 lg:h-[480px] rounded-lg shadow-md mb-4"
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d59552.281073694394!2d79.12098225!3d21.1118658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sPlot%20No.%2025%2C%20Sadan%20Housing%20Society%2C%20Anu%20Jyoti%20Apartment%2C%20Old%20Sneh%20Nagar%2C%20Near%20Santaji%20College%2C%20Nagpur%2C%20Maharashtra-%20440015%2C%20India.!5e0!3m2!1sen!2sin!4v1729877622647!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps"
          ></iframe>
          {/* <p className="text-gray-700">
            <strong>Address:</strong> Plot No. 25, Sadan Housing Society, Anu Jyoti Apartment, Old Sneh Nagar, Near Santaji College, Nagpur, Maharashtra- 440015, India.
          </p>
          <p className="text-gray-700">
            <strong>Phone:</strong> +91-7887860121
          </p>
          <p className="text-gray-700">
            <strong>Email:</strong> properties@inheritanceinfra.in, inheritanceinfra@gmail.com
          </p> */}
        </div>

        {/* Right Side: Input Form */}
        <div className="p-4 bg-gray-100 rounded-lg shadow-md">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-950"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label
                className="block text-gray-700 font-medium"
                htmlFor="mobile"
              >
                Mobile No.
              </label>
              <input
                type="text"
                id="mobile"
                value={formData.mobile}
                onChange={handleChange}
                minLength={10}
                maxLength={10}
                className="w-full p-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-950"
                placeholder="Enter your mobile no."
              />
            </div>

            <div>
              <label
                className="block text-gray-700 font-medium"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-950"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label
                className="block text-gray-700 font-medium"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-950"
                placeholder="Enter your message"
                rows="4"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full p-2 bg-blue-950 text-white rounded-md hover:opacity-70"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
