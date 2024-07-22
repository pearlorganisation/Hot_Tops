"use client";

import React from "react";

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
  {
    img: "https://topspizza.co.uk/storage/0MMxdqRsVDH0pJ2vAsJZ3yEpmOxmA7dzwddxQiCp.jpg",
    title: "Family Besties Deal",
  },
  {
    img: "https://topspizza.co.uk/storage/e2714541c08765d20673836606931dfb.jpeg",
    title: "The Flying Wiiings",
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

const page = () => {
  return (
    <>
      <div className="mx-auto container max-w-7xl p-10">
        <header class="text-center py-4 bg-white">
          <div class="flex items-center justify-center mb-2">
            <div class="flex-grow border-t border-red-800"></div>

            <div class="flex-grow border-t border-red-800"></div>
          </div>

          <div class="flex items-center justify-center mb-2">
            <div class="flex-grow border-t border-red-800"></div>
            <h1 class="px-4 text-red-800 font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl">
              TOPTASTIC DEALS
            </h1>
            <div class="flex-grow border-t border-red-800"></div>
          </div>
        </header>
      </div>

      <div className="container mx-auto max-w-7xl gap-10 grid md:grid-cols-4 place-content-center ">
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
  );
};

export default page;
