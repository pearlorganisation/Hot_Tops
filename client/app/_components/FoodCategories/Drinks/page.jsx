import React, { useState } from "react";
import useSWR from "swr";
import { useDispatch } from "react-redux";
import { addToCart } from "@/app/lib/features/cartSlice/cartSlice";
import AddedToCartModel from "../../Modals/AddedToCartModel";
import DrinksCard from "./DrinksCards/DrinksCard";

const Drinks = () => {
  const [isAddClicked, setIsAddClicked] = useState(false);

  // Data fetching function
  const drinksFetcher = async (...args) =>
    fetch(...args).then((res) => {
      return res.json();
    });

  // Data fetching using useSWR
  const {
    data: drinksData,
    error,
    isLoading,
  } = useSWR(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/drinks`,
    drinksFetcher
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  return (
    <>
      <div className="container mx-auto max-w-7xl gap-10 grid sm:grid-cols-2 md:grid-cols-4 place-content-center p-10">
        {drinksData?.data.map((item, idx) => (
          <DrinksCard data={item} idx={idx} />
        ))}
      </div>
    </>
  );
};

export default Drinks;
