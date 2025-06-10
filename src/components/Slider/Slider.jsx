// eslint-disable-next-line no-unused-vars
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import inheritance_wall from "../../public/assets/images/inheritance_wall.png";
// import inheritance_video from "../../public/assets/images/inheritance_logo_video.mp4";
import sliderImg1 from "../../public/assets/images/mbinfra_1.jpg";
import sliderImg2 from "../../public/assets/images/peakorchard.jpg";
import sliderImg3 from "../../public/assets/images/anjaneyagroup.jpg";
import sliderImg4 from "../../public/assets/images/woodsresidency.jpg";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1324 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1324, min: 764 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const Slider = () => {
  return (
    <div>
      <Carousel
        additionalTransfrom={0}
        arrows={false}
        autoPlay={true}
        autoPlaySpeed={5000}
        centerMode={false}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        responsive={responsive}
        itemClass="item"
      >
        {/* <div className="relative">
              <video
                src={inheritance_video}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-[50vh] lg:h-screen object-cover"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
                
              </div>
            </div>
          </Carousel>
        </div> */}
        <div className="relative mt-16">
          <img
            src={sliderImg1}
            alt=""
            className="w-full h-[50vh] lg:h-screen object-fill"
          />          
        </div>

        <div className="relative mt-16">
          <img
            src={sliderImg2}
            alt=""
            className="w-full h-[50vh] lg:h-screen object-fill"
          />
        </div>
        <div className="relative mt-16">
          <img
            src={sliderImg3}
            alt=""
            className="w-full h-[50vh] lg:h-screen object-fill"
          />
        </div>
        <div className="relative mt-16">
          <img
            src={sliderImg4}
            alt=""
            className="w-full h-[50vh] lg:h-screen object-fill"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
