import React, { useState } from "react";
import { PiNotePencilFill } from "react-icons/pi";
import { useDispatch } from "react-redux";
import { addToCart } from "@/app/lib/features/cartSlice/cartSlice";
import Link from "next/link";
import AddedToCartModel from "@/app/_components/Modals/AddedToCartModel";

const DessertCards = ({ data, dummyData, idx }) => {
  console.log("dataa", data);
  // =-----------------------hooks--------------------------------
  const dispatch = useDispatch();
  const [selectedData, setSelectedData] = useState(null);
  return (
    <div
      className=" p-3 bg-white shadow-md rounded-lg max-w-[15rem] 2xl:max-w-xs w-full newshadow"
      key={idx}
    >
      <img
        src={data?.banner}
        alt="Card Image"
        className="rounded-t-lg w-full object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-4">{data?.dessertName}</h2>
        <div>
          <select
            onChange={(Event) => {
              console.log(Event.target.value);
              setSelectedData(Event.target.value);
            }}
            name="pizzas"
            id="pizzas"
            className="border-2 p-2 w-full m-1"
          >
            <option>£{data?.price}</option>
          </select>
        </div>
        {/* <p
          className={`text-red-600 font-bold ${
            isAddClicked && !selectedData ? "block" : "hidden"
          } `}
        >
          please select size first
        </p> */}
        <div className="relative flex items-center ">
          <div className="bg-green-600 flex gap-2 items-center justify-center w-full">
            <button
              onClick={() => {
                dispatch(
                  addToCart({
                    name: data?.dessertName,
                    img: data?.banner,
                    size: selectedData || data?.price,
                    id: data?._id,
                    quantity: 1,
                    price: Number(selectedData || data?.price),
                    totalSum: Number(selectedData || data?.price),
                  })
                );
              }}
              data-modal-target="popup-modal"
              data-modal-toggle="popup-modal"
              data-modal-hide="popup-modal"
              className="p-2 text-white text-center"
              type="button"
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DessertCards;
