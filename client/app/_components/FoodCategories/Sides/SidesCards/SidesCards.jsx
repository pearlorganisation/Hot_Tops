import React, { useState } from "react";
import { PiNotePencilFill } from "react-icons/pi";
import { useDispatch } from "react-redux";
import { addToCart } from "@/app/lib/features/cartSlice/cartSlice";
import Link from "next/link";
import AddedToCartModel from "@/app/_components/Modals/AddedToCartModel";

const SidesCards = ({ data, dummyData, idx }) => {
  console.log("dataa", data);
  // =-----------------------hooks--------------------------------
  const dispatch = useDispatch();
  const [selectedData, setSelectedData] = useState(null);
  const [isAddClicked, setIsAddClicked] = useState(false);
  return (
    <div
      className=" bg-white shadow-md rounded-md max-w-[15rem] 2xl:max-w-xs w-full newshadow mb-10"
      key={idx}
    >
      <img
        src={data?.banner}
        alt="Card Image"
        className="rounded-t-md w-full h-44 object-cover"
      />
        <h2 className="text-xl font-semibold px-2 py-4">{data?.sideName}</h2>
        <div>
          <select
            onChange={(Event) => {
              console.log(Event.target.value);
              setSelectedData(Event.target.value);
            }}
            name="pizzas"
            id="pizzas"
            className="border-2 p-2 w-full my-2"
          >
            <option>£ {data?.price}</option>
          </select>
        </div>
        {/* <p
          className={`text-red-600 font-bold ${
            isAddClicked && !selectedData ? "block" : "hidden"
          } `}
        >
          please select size first
        </p> */}
  
          <div className="bg-green-600 hover:bg-green-700 flex gap-2 items-center justify-center w-full">
            <button
              onClick={() => {
                setIsAddClicked(true);
                dispatch(
                  addToCart({
                    name: data?.sideName,
                    img: data?.banner,
                    size: selectedData || data?.price,
                    id: data?._id,
                  })
                );
              }}
        
              className="text-center rounded-lg w-full p-2 text-white"
              type="button"
            >
              Add
            </button>
          </div>
    
      
      <AddedToCartModel
        isAddClicked={isAddClicked}
        setIsAddClicked={setIsAddClicked}
      />
    </div>
  );
};

export default SidesCards;
