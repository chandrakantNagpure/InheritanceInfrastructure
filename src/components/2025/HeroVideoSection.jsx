import React from "react";
import heroVideo from "../../public/assets/videos/hero.mp4";

const HeroVideoSection = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-[#000000]/40 dark:bg-[#558b6b]/40 mix-blend-multiply z-10"></div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-md">
          Building Infrastructure That Lasts
        </h1>
        <p className="text-lg md:text-xl mb-6 max-w-2xl drop-shadow-sm">
          Powered by technology and rooted in trust — we bring your vision to life.
        </p>
        <button className="px-6 py-3 bg-[#ed8161] hover:bg-[#558b6b] text-white font-semibold rounded-full transition duration-300">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default HeroVideoSection;
