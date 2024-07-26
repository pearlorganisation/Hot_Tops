"use client";
import DealsCards from "@/app/_components/Pages/DealsCards";
import { Router } from "next/router";
import React, { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import Select from "react-select";



async function getData() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/deals`);
    const data = await res.json();
    return data.data; // Assuming `data` has a `data` property containing the actual deals
  } catch (err) {
    console.log("Error Occurred", err);
    return null;
  }
}

const Page = () => {
  const [dealData, setDealData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const data = await getData();
      setDealData(data);
    }
    fetchData();
  }, []);

  useEffect(() => { 
    console.log(dealData);
  }, [dealData]);

  return (
    <div className=" mx-auto container pb-10">
      <div className=" px-10 pt-5 ">
        <header class="text-center  bg-white">
      

          <div className="flex items-center justify-center mb-2">
            <div className="flex-grow border-t border-red-800"></div>
            <h1 className="px-4 text-red-800 font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl">
              TOP HOT DEALS
            </h1>
            <div className="flex-grow border-t border-red-800"></div>
          </div>
        </header>
      </div>

      <div className="max-w-7xl  p-8 gap-10 grid md:grid-cols-2 lg:grid-cols-4 place-content-center">
        {Array.isArray(dealData) &&
          dealData.map((el, index) => <DealsCards data={el} key={index} />)}
        {!dealData && <h1>Loading </h1>}
      </div>
    </div>
  );
};

export default Page;
