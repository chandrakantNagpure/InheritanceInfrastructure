// eslint-disable-next-line no-unused-vars
// import React from 'react'
import Header from "./components/2025/Header";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Project_details from "./components/Project_details";
import ScrollToTop from "./components/Helper/ScrollToTop";
import WhatsAppButton from './components/2025/WhatsAppButton.jsx';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Header />
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project_details/:id" element={<Project_details />} />
        {/* Add other routes */}
      </Routes>
      <WhatsAppButton />
      <ScrollToTop />
    </Router>
  );
};

export default App;
