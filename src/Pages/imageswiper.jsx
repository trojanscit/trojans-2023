import React, { useRef } from "react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "../styles/eventshome.css";
import logo_round from "../Assets/Trojans_logo/trojans_logo.webp";
import cit_logo from "../Assets/Trojans_logo/cit_white_logo.webp";

SwiperCore.use([Navigation, Pagination, Autoplay]);

const images = [logo_round, cit_logo];

const ImageSwiper = () => {
  const swiperRef = useRef(null);

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={false}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="mySwiper"
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} alt={`Slide ${index + 1}`} id="img_swiper" />
          </SwiperSlide>
        ))}
      </Swiper>
      <div>
        <button onClick={handlePrev} id="slider_button_prev">
          {"<"}
        </button>
        <button onClick={handleNext} id="slider_button_next">
          {">"}
        </button>
      </div>
    </div>
  );
};

export default ImageSwiper;
