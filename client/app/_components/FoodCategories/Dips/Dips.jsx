import React, { useState } from "react";
import useSWR from "swr";
import { useDispatch } from "react-redux";
import { addToCart } from "@/app/lib/features/cartSlice/cartSlice";
import AddedToCartModel from "../../Modals/AddedToCartModel";
import DipsCard from "./DipsCard/DipsCard.jsx";
import { ClockLoader } from "react-spinners";

const Dips = () => {

  // Data fetching function
  const dipsfetcher = async (...args) =>
    fetch(...args).then((res) => {
      return res.json();
    });

  // Data fetching using useSWR
  const {
    data: dipsData,
    error,
    isLoading,
  } = useSWR(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/dips`, dipsfetcher);

  if (error) return <div className="h-screen text-red-800 text-center text-3xl md:text-5xl font-bold">Sorry , Failed to load ... </div>;
  if (isLoading) return <div className="flex justify-center pt-[25vh] h-[85vh] "><ClockLoader color="#991b1b" size={100}/></div>;

  return (
    <>
      <div className="container mx-auto max-w-7xl gap-10 grid sm:grid-cols-2 md:grid-cols-4 place-content-center p-10">
        {dipsData?.data.map((item, idx) => (
          <DipsCard data={item} idx={idx} />
        ))}
      </div>

    </>
  );
};

export default Dips;
