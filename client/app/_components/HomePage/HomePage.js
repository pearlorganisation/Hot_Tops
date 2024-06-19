"use client";
1;
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
      <div className="container mx-auto max-w-6xl py-2 md:py-20 ">
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
      <div className="text-center text-lg font-medium p-5 ">
        <h1>TOPTASTIC DEALS</h1>
      </div>
      <section className="container mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-4 mx-auto place-content-center ">
          <div class="bg-white shadow-md rounded-lg max-w-sm w-full">
            <img
              src="https://topspizza.co.uk/storage/SEPMMLZptaCkuMv8xtHyyrJaN2NOaMCoBo4c7t53.jpg"
              alt="Card Image"
              class="rounded-t-lg w-full  object-cover"
            />
            <div class="p-4">
              <h2 class="text-xl font-semibold mb-4">Hungry Man</h2>
              <div class="relative">
                <select class="w-full border border-gray-300 rounded-lg p-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="option1">Large 1$</option>
                  <option value="option2">Large 2$</option>
                  <option value="option3">Large 3$</option>
                </select>
                <button class="absolute inset-y-0 right-0 flex items-center bg-blue-500 text-white p-2 rounded-r-lg hover:bg-blue-600">
                  Go
                </button>
              </div>
            </div>
          </div>

          <div class="bg-white shadow-md rounded-lg max-w-sm w-full">
            <img
              src="https://topspizza.co.uk/storage/SEPMMLZptaCkuMv8xtHyyrJaN2NOaMCoBo4c7t53.jpg"
              alt="Card Image"
              class="rounded-t-lg w-full  object-cover"
            />
            <div class="p-4">
              <h2 class="text-xl font-semibold mb-4">Hungry Man</h2>
              <div class="relative">
                <select class="w-full border border-gray-300 rounded-lg p-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="option1">Large 1$</option>
                  <option value="option2">Large 2$</option>
                  <option value="option3">Large 3$</option>
                </select>
                <button class="absolute inset-y-0 right-0 flex items-center bg-blue-500 text-white p-2 rounded-r-lg hover:bg-blue-600">
                  Go
                </button>
              </div>
            </div>
          </div>

          <div class="bg-white shadow-md rounded-lg max-w-sm w-full">
            <img
              src="https://topspizza.co.uk/storage/SEPMMLZptaCkuMv8xtHyyrJaN2NOaMCoBo4c7t53.jpg"
              alt="Card Image"
              class="rounded-t-lg w-full  object-cover"
            />
            <div class="p-4">
              <h2 class="text-xl font-semibold mb-4">Hungry Man</h2>
              <div class="relative">
                <select class="w-full border border-gray-300 rounded-lg p-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="option1">Large 1$</option>
                  <option value="option2">Large 2$</option>
                  <option value="option3">Large 3$</option>
                </select>
                <button class="absolute inset-y-0 right-0 flex items-center bg-blue-500 text-white p-2 rounded-r-lg hover:bg-blue-600">
                  Go
                </button>
              </div>
            </div>
          </div>

          <div class="bg-white shadow-md rounded-lg max-w-sm w-full">
            <img
              src="https://topspizza.co.uk/storage/SEPMMLZptaCkuMv8xtHyyrJaN2NOaMCoBo4c7t53.jpg"
              alt="Card Image"
              class="rounded-t-lg w-full  object-cover"
            />
            <div class="p-4">
              <h2 class="text-xl font-semibold mb-4">Hungry Man</h2>
              <div class="relative">
                <select class="w-full border border-gray-300 rounded-lg p-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="option1">Large 1$</option>
                  <option value="option2">Large 2$</option>
                  <option value="option3">Large 3$</option>
                </select>
                <button class="absolute inset-y-0 right-0 flex items-center bg-blue-500 text-white p-2 rounded-r-lg hover:bg-blue-600">
                  Go
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
