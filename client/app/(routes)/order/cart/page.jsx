"use client";

import React from "react";
import { useAppSelector } from "@/app/lib/hooks";
import { useSelector } from "react-redux";

const Cart = () => {
  // ----------------------hooks------------------------------------
  const cart = useSelector((state) => state.cart.cartData);
  return (
    <>
      <div className="max-w-7xl mx-auto bg-white shadow-md rounded-lg overflow-hidden my-4">
        <div className="bg-red-500 text-white text-center py-2">
          <h2 className="text-2xl font-bold">YOUR BASKET</h2>
        </div>
        {Array.isArray(cart) &&
          cart?.length > 0 &&
          cart?.map((data, idx) => {
            const price = data?.size?.split("-");
            console.log(price);
            return (
              <div className="p-4 border-b grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                <div className="flex items-center space-x-4 md:col-span-2">
                  <div className="w-20 h-20 bg-gray-200">
                    <img src={data?.img} className="h-20" />
                  </div>
                  <p className="text-xl font-semibold">
                    {data?.name}
                    {`(${price[0]})`}
                  </p>
                </div>
                <div className="flex justify-end space-x-2">
                  <button className="bg-gray-300 text-gray-800 px-2 py-1 rounded">
                    -
                  </button>
                  <span className="px-2 py-1">1</span>
                  <button className="bg-gray-300 text-gray-800 px-2 py-1 rounded">
                    +
                  </button>
                  <button className="bg-blue-500 text-white px-2 py-1 rounded">
                    ✎
                  </button>
                  <button className="bg-red-500 text-white px-2 py-1 rounded">
                    🗑
                  </button>
                </div>
                <div className="col-span-1 text-right text-xl font-semibold md:col-span-3 md:text-left">
                  ₹{price[1]}
                </div>
              </div>
            );
          })}
        <div className="bg-green-500 text-white text-center py-3 cursor-pointer">
          <span>Select time & place</span>
        </div>
      </div>
    </>
  );
};

export default Cart;
