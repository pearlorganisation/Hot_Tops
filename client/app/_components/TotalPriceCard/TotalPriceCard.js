"use client";
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useSelector } from "react-redux";

const TotalPriceCard = () => {
  const { price, allToppings } = useSelector((state) => state.cart);

  const [mount, setMount] = useState(false);
  useEffect(() => {
    setMount(true);
    return () => {
      setMount(false);
    };
  }, []);

  return (
    <>
      {mount &&
        createPortal(
          <div className="fixed bottom-5 rounded-md right-5 bg-red-600 p-6 text-white font-semibold text-center">
            <div> Price : {allToppings?.price}</div>
            <div>Extra Price : {allToppings?.extraPrice.toFixed(2)}</div>
            <div>Total Price : {allToppings?.totalPrice.toFixed(2)}</div>
          </div>,
          document.body
        )}
    </>
  );
};

export default TotalPriceCard;
