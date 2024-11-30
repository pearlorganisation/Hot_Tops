"use client";

import React, { useEffect, useState } from "react";
import {  Pagination } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import DealsCards from "../Pages/DealsCards";
import { useDispatch } from "react-redux";
import { trackerStatus } from "@/app/lib/features/orderDetails/orderDetailsslice";
import Link from "next/link";
import { oAuthLogin } from "@/app/lib/features/auth/authSlice";

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
async function getBanners(){
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/banner`)
    const data = await res.json();
    return data.data
  } catch (error) {
    console.log("Error Occurred in banner api", error);
    return null;
  }
}



const HomePage = () => {


  
  const dispatch = useDispatch()
  
    const [popularDealData, setPopularDealData] = useState(null);
    const [banner, setBanner] = useState([]);
    
    async function googleAuth() {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");
      if (token) {
        const isProduction = window.location.protocol === "https:";
        console.log(isProduction)
        // Set the cookie with the token
        document.cookie = `authToken=${token}; path=/; SameSite=None; ${isProduction ? "Secure;" : ""}`; 
        // Clean the URL
        window.history.replaceState({}, document.title, "/");
      }
      console.log("No user data found.");
    } 

    async function getUserData(){
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/oAuth/google/userData`,{
          credentials: 'include'
        })
        const data = await res.json();
        console.log(data)
        dispatch(oAuthLogin(data.data))
      } catch (error) {
        console.log("Error Occurred in banner api", error);
        return null;
      }
    }

  useEffect(() => {
    async function fetchData() {
      const data = await getData();
      setPopularDealData(data);
    }
    async function bannerData(){
      const data = await getBanners();
      setBanner(data)
    }


    dispatch(trackerStatus(false))
    fetchData();
    bannerData()
    googleAuth()
    getUserData()
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
        {banner?.map((el, i) => {
            return (
              <SwiperSlide className="pb-8" key={i} >
             { el?.deal?._id ? <Link href={{
              pathname: `menu/deals/deals_view`,
              query: { card_id: el?.deal?._id, size_id: el?.deal?.sizes[0]?._id  },
            }}>
                <Image width={2500} height={1000}  src={el?.banner} alt="Deals Banner" className="h-full mx-auto w-full lg:w-[70%] xl:w-[70%] sm:h-fit md:[30vh] md:h-fit xl:h-[65vh] 2xl:w-[60%] 2xl:h-[70vh]  object-cover" />
                </Link>
                :
                <Image width={2500} height={1000}  src={el?.banner} alt="Deals Banner" className="h-full mx-auto w-full lg:w-[70%] xl:w-[70%] sm:h-fit md:[30vh] md:h-fit xl:h-[65vh] 2xl:w-[60%] 2xl:h-[70vh]  object-cover" />}
       
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
      <div className="flex gap-8 mb-10 flex-wrap justify-center">
        {Array.isArray(popularDealData) &&
          popularDealData.map((el) => (
            <DealsCards key={el.id} path={"menu"} data={el} />
          ))}
      </div>
    ) : (
      <div className="flex item-center justify-center pt-[25vh] h-[85vh] ">
        {/* <ClockLoader color="#991b1b" size={100} className="border"/> */}
        <Image src="/HOTPIZZALOGO.jpg" alt="Pizza Logo"  width={300} height={300} className="h-[10vh] w-[30vw]  object-contain" />
      </div>
    )}
    </>
    </>
  );
};

export default HomePage;
