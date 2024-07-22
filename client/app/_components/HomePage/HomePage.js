"use client";

import { Navigation, Pagination } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import pizza1 from "../../_assets/images/pizza1.jpg"
import pizza2 from "../../_assets/images/pizza2.jpg"
import Image from "next/image";

const HomePage = () => {

  const img = [
     pizza2,
     pizza1
  ];

  
const data = [
  {
    img: "https://topspizza.co.uk/storage/4e717e09cbf56647d691d2e395e715ed.jpg",
    title: "Early Week Special",
  },
  {
    img: "https://topspizza.co.uk/storage/SEPMMLZptaCkuMv8xtHyyrJaN2NOaMCoBo4c7t53.jpg",
    title: "Hungry Man",
  },
  {
    img: "https://topspizza.co.uk/storage/9e7bd02cc1bc3fc807510696da8fa4ca.jpg",
    title: "Two Of Us",
  },
  {
    img: "https://topspizza.co.uk/storage/8effc81ed0f2e9cf7884e3322f9dbd69.jpg",
    title: "Party Pack Deall",
  },

];

  return (
    <>
      {" "}
      {/* <div className="mx-auto container max-w-7xl p-10 ">
        <Swiper
         slidesPerView={1}
         spaceBetween={10}
         pagination={{
           clickable: true,
         }}

         modules={[Pagination]}
        className="mySwiper">
          {img.map((el, i) => {
            return (
              <SwiperSlide key={i} >
                <img src={el.path} className="h-[55vh] w-full object-cover" />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div> */}

      <div className="mx-auto container max-w-7xl px-10 ">
      <Swiper
      className="z-55 p-2"
        slidesPerView={1}
        pagination={{
          clickable: true,
        }}
        
        modules={[Pagination]}
      >
        {img.map((el, i) => {
            return (
              <SwiperSlide className="pb-8" key={i} >
                <Image src={el} className="h-[60vh] w-full  object-cover" />
              </SwiperSlide>
            );
          })}
      </Swiper>
      </div>
      <>
      <div className="mx-auto container max-w-7xl px-10">
        <header class="text-center pb-10  bg-white">
          <div class="flex items-center justify-center my-2">
            <div class="flex-grow border-t border-red-800"></div>

            <div class="flex-grow border-t border-red-800"></div>
          </div>

          <div class="flex items-center justify-center">
            <div class="flex-grow border-t border-red-800"></div>
            <h1 class="px-4 text-red-800 font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl">
              POPULAR PIZZA DEALS
            </h1>
            <div class="flex-grow border-t border-red-800"></div>
          </div>
        </header>
      </div>

      <div className="container mb-10 mx-auto max-w-7xl gap-10 grid md:grid-cols-4 place-content-center ">
        {data.map((el, id) => (
          <div
            class="bg-white shadow-md rounded-lg max-w-xs w-full newshadow p-4"
            key={id}
          >
            <img
              src={el.img}
              alt="Card Image"
              className="rounded-t-lg w-full  object-cover"
            />

            <div class="p-4">
              <h2 class="text-xl font-semibold mb-4">{el.title}</h2>
              <div class="relative">
                <div className="bg-green-600">
                  <p className="text-center text-white p-2 ">
                    Select store to order
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
    </>
  );
};

export default HomePage;
