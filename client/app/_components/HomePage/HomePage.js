"use client";

import { Navigation, Pagination } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import pizza1 from "../../_assets/images/pizza1.jpg"
import pizza2 from "../../_assets/images/pizza2.jpg"
import Image from "next/image";
import DealsCards from "../Pages/DealsCards";
  async function getData() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/deals?isPopular=true`);
    const data = await res.json();
    return data.data; // Assuming `data` has a `data` property containing the actual deals
  } catch (err) {
    console.log("Error Occurred", err);
    return null;
  }
}
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
  
    const [popularDealData, setPopularDealData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const data = await getData();
      setPopularDealData(data);
    }
    fetchData();
  }, []);


  return (
    <>
      {" "}


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
                <Image src={el} className="h-[20vh] md:h-[60vh] w-full  object-cover" />
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
              TOP HOT DEALS
            </h1>
            <div class="flex-grow border-t border-red-800"></div>
          </div>
        </header>
      </div>

      <div className="container mb-10 mx-auto max-w-7xl gap-10 grid md:grid-cols-4 place-content-center ">
        {Array.isArray(popularDealData) && popularDealData.map((el) => (
          <DealsCards path={"menu"} data={el}/>
        ))}
      </div>
    </>
    </>
  );
};

export default HomePage;
