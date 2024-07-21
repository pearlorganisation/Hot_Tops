"use client";
import Image from "next/image";
import {useSearchParams } from "next/navigation";

import React, { useEffect, useState } from "react";

async function getData(id) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/deals/${id}`
    );
    const data = await res.json();
    return data.data; // Assuming `data` has a `data` property containing the actual deals
  } catch (err) {
    console.log("Error Occurred", err);
    return null;
  }
}

const page = () => {
  const searchParams = useSearchParams();
  const [dealViewData, setDealView] = useState(null);

  const cardId = searchParams.get("card_id");
  const sizeId = searchParams.get("size_id");

  useEffect(() => {

    console.log(dealViewData, "custom");
  }, [dealViewData]);

 

  useEffect(() => {
    async function fetchData() {
      const data = await getData(cardId);
      setDealView(data);
    }
    fetchData();
  }, []);

  return (
    <div className="h-screen ">
      {dealViewData && (
        <div className=" border-red-500 border flex flex-col gap-8 py-10 px-15 ">
          <div className="flex text-6xl text-slate-800 font-bold  justify-between px-20">
            <p className=""> {dealViewData.title}</p>
            <p>
              £{dealViewData?.sizes?.find((el) => el._id === sizeId)?.price}
            </p>
          </div>
          <div className="px-20 flex justify-center items-center">
            <img
              src={dealViewData.banner}
              className="h-[400px] w-[400px]"
              alt=""
            />
          </div>
          <div className="border border-black grid grid-cols-3 container mx-auto justify-between px-8">
            {dealViewData?.sizes.map((el) => (
              <p
                key={el._id}
                className={`uppercase ${
                  el._id === sizeId ? "text-red-400" : ""
                }`}
              >
                {el.size}
              </p>
            ))}
          </div>

          <div className="flex px-6">
            {dealViewData.defaultItems.map((el, index) => {
              return (
                <div
                  key={index}
                  className="w-full p-2 border border-gray-300 rounded-lg bg-gray-200 text-gray-700"
                >
                  {el}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default page;
