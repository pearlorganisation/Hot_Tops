"use client";
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useSelector } from "react-redux";

const TotalPriceCard = () => {
  const { price } = useSelector((state) => state.cart);

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
            <div> </div>
            <div></div>
            <div>Total Price : {price?.totalPrice}</div>
          </div>,
          document.body
        )}
    </>
  );
};

export default TotalPriceCard;
