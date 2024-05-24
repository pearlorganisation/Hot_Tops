"use client";
import { Navigation, Pagination } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
const HomePage = () => {
  const img = [
    {
      path: "https://topspizza.co.uk/storage/x9PWLd1tgdQ5xi6dpiYu6KqhbGSezoYTcla07Q1F.jpg",
    },
    {
      path: "https://topspizza.co.uk/storage/5b88bc077435f2b4f75ae72f75644726.jpg",
    },
    {
      path: "https://topspizza.co.uk/storage/myop3cgax48C0sq2nWBMwuQr703sA2JsaCjfl6Bb.jpg",
    },
  ];

  return (
    <>
      {" "}
      <div className="container mx-auto max-w-6xl py-10">
        <Swiper className="mySwiper">
          {img.map((el, i) => {
            return (
              <SwiperSlide>
                <img src={el.path} className="rounded" />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};

export default HomePage;
