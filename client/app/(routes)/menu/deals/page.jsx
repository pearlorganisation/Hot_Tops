"use client";
import DealsCards from "@/app/_components/Pages/DealsCards";
import { Router } from "next/router";
import React, { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import Select from "react-select";

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
    title: "Party Pack Deal",
  },
  {
    img: "https://topspizza.co.uk/storage/0MMxdqRsVDH0pJ2vAsJZ3yEpmOxmA7dzwddxQiCp.jpg",
    title: "Family Besties Deal",
  },
  {
    img: "https://topspizza.co.uk/storage/e2714541c08765d20673836606931dfb.jpeg",
    title: "The Flying Wings",
  },
  {
    img: "https://topspizza.co.uk/storage/e6bd8b321f6e2eafab8275f2be249e97.jpg",
    title: "Buy 1 Get 1 Free",
  },
  {
    img: "https://topspizza.co.uk/storage/GXpBpsj4r7pMHvR2QX1RnNJlh0TRVztO2wuxas8W.jpg",
    title: "The Great Double",
  },
];

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

  return (
    <>
      <div className="mx-auto container max-w-7xl p-10">
        <header className="text-center py-4 bg-white">
          <div className="flex items-center justify-center mb-2">
            <div className="flex-grow border-t border-red-800"></div>
            <div className="flex-grow border-t border-red-800"></div>
          </div>

          <div className="flex items-center justify-center mb-2">
            <div className="flex-grow border-t border-red-800"></div>
            <h1 className="px-4 text-red-800 font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl">
              TOPTASTIC DEALS
            </h1>
            <div className="flex-grow border-t border-red-800"></div>
          </div>
        </header>
      </div>

      <div className="container mx-auto max-w-8xl p-8 gap-10 grid md:grid-cols-2 lg:grid-cols-4 place-content-center">
        {Array.isArray(dealData) &&
          dealData.map((el, index) => <DealsCards data={el} key={index} />)}
        {!dealData && <h1>Loading </h1>}
      </div>
    </>
  );
};

export default Page;
