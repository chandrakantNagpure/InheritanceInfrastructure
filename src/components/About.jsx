import React, { useEffect } from "react";
import Banner from "./2025/Banner";
import CompanyOverview from "./2025/CompanyOverview";
import LeadershipTeam from "./2025/LeadershipTeam";
import SiteFooter from './2025/SiteFooter.jsx';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page on component mount
  }, []);

  return (
    <div className="font-poppins  bg-gray-100">
      <Banner />
      <CompanyOverview />
      <LeadershipTeam />
      <SiteFooter />
    </div>
  );
};

export default About;