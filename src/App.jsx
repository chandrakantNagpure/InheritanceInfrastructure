// eslint-disable-next-line no-unused-vars
// import React from 'react'
import Header from "./components/2025/Header";
import HeroVideoSection from "./components/2025/HeroVideoSection";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Project_details from "./components/Project_details";
import ScrollToTop from "./components/Helper/ScrollToTop";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Header />
      <HeroVideoSection />
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project_details/:id" element={<Project_details />} />
        {/* Add other routes */}
      </Routes>
      <ScrollToTop />
    </Router>
  );
};

export default App;
