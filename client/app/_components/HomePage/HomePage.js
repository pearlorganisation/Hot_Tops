"use client";

import { Navigation, Pagination } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import pizza1 from "../../_assets/images/pizza3.jpg"
import pizza2 from "../../_assets/images/pizza4.jpg"
import Image from "next/image";
import DealsCards from "../Pages/DealsCards";
import { ClockLoader } from "react-spinners";
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
      <div className="w-full">
      <Swiper
      className="z-55 "
        slidesPerView={1}
        pagination={{
          clickable: true,
        }}
        
        modules={[Pagination]}
      >
        {img.map((el, i) => {
            return (
              <SwiperSlide className="pb-8" key={i} >
                <Image src={el} className="h-[20vh] mx-auto w-full lg:w-full border-2 xl:w-[80%] sm:h-fit md:[30vh] md:h-fit xl:h-[60vh] 2xl:w-[90%] 2xl:h-[60vh]  object-cover" />
              </SwiperSlide>
            );
          })}
      </Swiper>
      </div>
      <>
      <div className="mx-auto container max-w-7xl px-5 lg:px-10">
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

      {popularDealData ? (
      <div className="container mb-10 mx-auto max-w-7xl gap-10 grid md:grid-cols-4 place-content-center">
        {Array.isArray(popularDealData) &&
          popularDealData.map((el) => (
            <DealsCards key={el.id} path={"menu"} data={el} />
          ))}
      </div>
    ) : (
      <div className="flex justify-center pt-[25vh] h-[85vh]">
        <ClockLoader color="#991b1b" size={100} />
      </div>
    )}
    </>
    </>
  );
};

export default HomePage;
