import React, { useEffect, useRef } from "react";
import { FaLowVision } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Word Splitting for animation
const SplitWords = React.forwardRef(({ text, className, style }, ref) => {
  const words = text.split(" ").map((word, i) => (
    <span
      key={i}
      style={{
        opacity: 0,
        display: "inline-block",
        marginRight: "0.25rem",
        color: style?.color || "#666",
        filter: "none",
        transition: "color 0.3s ease",
        ...style,
      }}
      ref={(el) => {
        if (el && ref.current && !ref.current.includes(el)) {
          ref.current.push(el);
        }
      }}
    >
      {word}
    </span>
  ));

  return (
    <p className={className} style={style}>
      {words}
    </p>
  );
});

const BuildingTheFuture = () => {
  const sectionRef = useRef(null);
  const titleRefs = useRef([]);
  const para1Refs = useRef([]);
  const subTitleRefs = useRef([]);
  const para2Refs = useRef([]);
  const iconRef = useRef(null);
  const buttonContainerRef = useRef(null);
  const buttonRef = useRef([]);
  const imageRef = useRef(null);
  const imageWrapperRef = useRef(null); // For 3D effect wrapper

  // Clear refs before use
  titleRefs.current = [];
  para1Refs.current = [];
  subTitleRefs.current = [];
  para2Refs.current = [];
  buttonRef.current = [];

  useEffect(() => {
    const headerHeight = document.querySelector("header")?.offsetHeight || 80;

    let ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: `top+=${headerHeight} top`,
          end: "+=100%",
          scrub: true,
          pin: true,
          anticipatePin: 1,
          pinSpacing: true,
        },
      });

      timeline
        .fromTo(
          imageRef.current,
          { opacity: 0, scale: 0.9 },
          { opacity: 1, scale: 1, duration: 1, ease: "power2.out" }
        )
        .to(titleRefs.current, { opacity: 1, color: "inherit", stagger: 0.05 })
        .to(
          para1Refs.current,
          { opacity: 1, color: "inherit", stagger: 0.03 },
          "+=0.2"
        )
        .to(
          subTitleRefs.current,
          { opacity: 1, color: "inherit", stagger: 0.07 },
          "+=0.2"
        )
        .to(
          para2Refs.current,
          { opacity: 1, color: "inherit", stagger: 0.03 },
          "+=0.2"
        )
        .fromTo(
          iconRef.current,
          { opacity: 0, scale: 0.8 },
          { opacity: 1, scale: 1 },
          "+=0.3"
        )
        .to(buttonContainerRef.current, { opacity: 1 }, "+=0.3")
        .to(buttonRef.current, { opacity: 1, stagger: 0.12 });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // 3D Image Hover Animation
  useEffect(() => {
    const wrapper = imageWrapperRef.current;
    const image = imageRef.current;

    const handleMouseMove = (e) => {
      const bounds = wrapper.getBoundingClientRect();
      const centerX = bounds.left + bounds.width / 2;
      const centerY = bounds.top + bounds.height / 2;
      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;

      const rotateX = (-deltaY / bounds.height) * 10;
      const rotateY = (deltaX / bounds.width) * 10;

      gsap.to(image, {
        rotateX,
        rotateY,
        scale: 1.05,
        transformPerspective: 1000,
        transformOrigin: "center",
        ease: "power2.out",
        duration: 0.4,
      });
    };

    const handleMouseLeave = () => {
      gsap.to(image, {
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        duration: 0.5,
        ease: "power3.out",
      });
    };

    wrapper.addEventListener("mousemove", handleMouseMove);
    wrapper.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      wrapper.removeEventListener("mousemove", handleMouseMove);
      wrapper.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const lightTextColor = "#1e293b";
  const darkTextColor = "#fff";

  return (
    <section
      ref={sectionRef}
      className="relative flex flex-col lg:flex-row justify-center items-center px-5 lg:px-20 gap-10 lg:gap-16
      bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#fffaf7] via-white to-[#f2f7f4]
      dark:from-[#1b1b1b] dark:via-[#0f0f0f] dark:to-black
      pt-16 pb-16 md:pt-24 md:pb-24"
      style={{ minHeight: "100vh" }}
    >
      {/* Image Column with 3D effect */}
      <div
        ref={imageWrapperRef}
        className="w-full lg:w-1/2 flex justify-center items-center perspective-[1200px]"
      >
        <img
          ref={imageRef}
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
          alt="Real Estate Property"
          className="w-full max-w-[550px] lg:max-w-[650px] rounded-2xl shadow-2xl object-cover transition-transform duration-300"
        />
      </div>

      {/* Text Column */}
      <div className="w-full lg:w-1/2 text-center">
        <SplitWords
          text="About Inheritance Infrastructure Pvt. Ltd."
          className="text-3xl md:text-4xl font-bold font-averia mb-6"
          ref={titleRefs}
          style={{ color: lightTextColor }}
        />
        <SplitWords
          text="Inheritance Infrastructure Private Limited is a dynamic real estate company committed to delivering premium land investment opportunities. With a strong foundation built on trust, transparency, and excellence, we specialize in developing well-planned residential and commercial plots in high-potential locations."
          className="text-lg max-w-3xl mx-auto leading-relaxed mb-6"
          ref={para1Refs}
          style={{ color: lightTextColor }}
        />
        <h3
          className="flex justify-center items-center gap-2 text-xl font-semibold mb-2 text-center"
          style={{ color: lightTextColor }}
        >
          <FaLowVision
            ref={iconRef}
            className="text-[#ed8161]"
            style={{ opacity: 0 }}
          />
          <SplitWords
            text="Our Vision"
            className="inline-block"
            ref={subTitleRefs}
            style={{ color: lightTextColor }}
          />
        </h3>
        <SplitWords
          text="To be a trusted leader in real estate development by creating sustainable, well-planned, and future-ready communities that enhance the quality of life and provide lasting value to our customers and stakeholders."
          className="text-lg max-w-3xl mx-auto leading-relaxed mb-6"
          ref={para2Refs}
          style={{ color: lightTextColor }}
        />
        <div
          ref={buttonContainerRef}
          className="inline-block bg-[#ed8161] text-white px-5 py-2 rounded-md hover:bg-[#c75c45] transition duration-300 cursor-pointer opacity-0"
        >
          {"Read More".split(" ").map((word, i) => (
            <span
              key={i}
              style={{ opacity: 0, display: "inline-block", marginRight: "0.3rem" }}
              ref={(el) => {
                if (el && !buttonRef.current.includes(el)) {
                  buttonRef.current.push(el);
                }
              }}
            >
              {word}
            </span>
          ))}
        </div>
      </div>

      {/* Dark Mode Style Overrides */}
      <style>
        {`
          .dark .text-3xl span,
          .dark .text-lg span,
          .dark .text-xl span {
            color: ${darkTextColor} !important;
          }
          .dark h3,
          .dark p {
            color: ${darkTextColor} !important;
          }
        `}
      </style>
    </section>
  );
};

export default BuildingTheFuture;
