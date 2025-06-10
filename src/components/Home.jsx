// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import Slider from './Slider/Slider';
import Amenity from './Hero/Amenity';
import Hero from './Hero/Hero';
import Footer from "./Footer";
import ContactUs from './ContactUs';
import OverlappingCards  from './2025/OverlappingCards.jsx';
import BuildingTheFuture from '../components/2025/BuildingTheFuture.jsx';
import PropertyShowcase from '../components/2025/PropertyShowcase.jsx';
import WhyChooseUs from '../components/2025/WhyChooseUs.jsx';
import TimelineFeature  from './2025/TimelineFeature.jsx';
import ContactUsModern  from './2025/ContactUsModern.jsx';
import SiteFooter  from './2025/SiteFooter.jsx';
import WhatsAppButton  from './2025/WhatsAppButton.jsx';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page on component mount
  }, []);

  return (
    <div>
      {/* <Slider /> */}
      {/* <PropertyShowcase /> */}
      <BuildingTheFuture />
      {/* <WhyChooseUs /> */}
      <OverlappingCards  />
      <TimelineFeature  />
      <ContactUsModern />
      {/* <Amenity /> */}
      {/* <Hero/> */}
      {/* <ContactUs /> */}
      {/* <Footer /> */}
      <SiteFooter />
      <WhatsAppButton />
    </div>
  )
};

export default Home