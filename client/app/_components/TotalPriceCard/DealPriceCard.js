"use client";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const DealPriceCard = ({dealPrice,extraPrice}) => {
  const { price, allToppings, defaultPrice } = useSelector(
    (state) => state.cart
  );

  return (

          <div className="fixed bottom-5 rounded-md right-5 bg-red-600 p-6 text-white font-semibold text-center">
            <div>Deal Price : {dealPrice}</div>
            <div>
              Extra Price :{" "}
              {Math.max(0, extraPrice?.toFixed(2))}
            </div>
            <div>Total Deal Price : {Number(Math.max(0, extraPrice)+ dealPrice)?.toFixed(2)}</div>
          </div>

  );
};

export default DealPriceCard;
