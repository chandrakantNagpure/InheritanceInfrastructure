import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import HeroVideoSection from "./2025/HeroVideoSection";
import OverlappingCards from './2025/OverlappingCards.jsx';
import BuildingTheFuture from './2025/BuildingTheFuture.jsx';
import TimelineFeature from './2025/TimelineFeature.jsx';
import ContactUsModern from './2025/ContactUsModern.jsx';
import SiteFooter from './2025/SiteFooter.jsx';


const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page on component mount
  }, []);

  // Structured Data for Organization (JSON-LD)
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Inheritance Infrastructure Pvt. Ltd.",
    "url": "https://www.inheritanceinfra.com", // Replace with actual domain
    "logo": "https://www.inheritanceinfra.com/logo.png", // Replace with actual logo URL
    "description": "Inheritance Infrastructure Private Limited is a dynamic real estate company specializing in premium land investment opportunities and well-planned residential and commercial plots.",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-123-456-7890", // Replace with actual phone number
      "contactType": "Customer Service",
      "areaServed": "IN",
      "availableLanguage": ["English", "Hindi"]
    },
    "sameAs": [
      "https://www.facebook.com/inheritanceinfra", // Replace with actual social media URLs
      "https://www.linkedin.com/company/inheritanceinfra",
      "https://www.instagram.com/inheritanceinfra"
    ]
  };

  return (
    <>
      <Helmet>
        <title>Inheritance Infrastructure Pvt. Ltd. | Premium Real Estate Solutions</title>
        <meta name="description" content="Discover premium land investment opportunities with Inheritance Infrastructure Pvt. Ltd. We specialize in developing well-planned residential and commercial plots in high-potential locations." />
        <meta name="keywords" content="real estate, land investment, residential plots, commercial plots, Inheritance Infrastructure, premium real estate, India real estate" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Inheritance Infrastructure Pvt. Ltd." />
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://www.inheritanceinfra.com/" /> {/* Replace with actual domain */}
        
        {/* Open Graph Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Inheritance Infrastructure Pvt. Ltd. | Premium Real Estate Solutions" />
        <meta property="og:description" content="Explore premium land investment opportunities with Inheritance Infrastructure Pvt. Ltd., specializing in residential and commercial plots." />
        <meta property="og:url" content="https://www.inheritanceinfra.com/" /> {/* Replace with actual domain */}
        <meta property="og:image" content="https://www.inheritanceinfra.com/og-image.jpg" /> {/* Replace with actual image URL */}
        <meta property="og:site_name" content="Inheritance Infrastructure Pvt. Ltd." />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Inheritance Infrastructure Pvt. Ltd. | Premium Real Estate Solutions" />
        <meta name="twitter:description" content="Explore premium land investment opportunities with Inheritance Infrastructure Pvt. Ltd., specializing in residential and commercial plots." />
        <meta name="twitter:image" content="https://www.inheritanceinfra.com/og-image.jpg" /> {/* Replace with actual image URL */}
        
        {/* Structured Data */}
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>
      <main>
        <HeroVideoSection />
        <BuildingTheFuture />
        <OverlappingCards />
        <TimelineFeature />
        <ContactUsModern />
        <SiteFooter />
      </main>
    </>
  );
};

export default Home;