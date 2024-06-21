import React, { useState } from "react";
import useSWR from "swr";
import { useDispatch } from "react-redux";
import { addToCart } from "@/app/lib/features/cartSlice/cartSlice";
import AddedToCartModel from "../../Modals/AddedToCartModel";
import DipsCard from "./DipsCard/DipsCard.jsx";

const Dips = () => {
  const [isAddClicked, setIsAddClicked] = useState(false);

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

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  return (
    <>
      <div className="container mx-auto max-w-7xl gap-10 grid sm:grid-cols-2 md:grid-cols-4 place-content-center p-10">
        {dipsData?.data.map((item, idx) => (
          <DipsCard data={item} idx={idx} />
        ))}
      </div>
      <AddedToCartModel
        isAddClicked={isAddClicked}
        setIsAddClicked={setIsAddClicked}
      />
    </>
  );
};

export default Dips;
