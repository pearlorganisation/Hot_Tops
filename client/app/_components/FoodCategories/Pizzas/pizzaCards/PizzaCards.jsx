import React, { useState } from "react";
import { PiNotePencilFill } from "react-icons/pi";
import { useDispatch } from "react-redux";
import { addToCart } from "@/app/lib/features/cartSlice/cartSlice";
import Link from "next/link";

const PizzaCards = ({ data, dummyData, idx }) => {
  console.log("dataa", data);
  // =-----------------------hooks--------------------------------
  const dispatch = useDispatch();
  const [selectedData, setSelectedData] = useState(null);
  const [isAddClicked, setIsAddClicked] = useState(false);
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
        <h2 className="text-xl font-semibold mb-4">{data?.pizzaName}</h2>
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
            {data?.priceSection.map((data, idx) => {
              return (
                <option value={`${data?.size}-${data?.price}`}>
                  {`${data?.size} Є${data?.price}`}
                </option>
              );
            })}
          </select>
        </div>
        <p
          className={`text-red-600 font-bold ${
            isAddClicked && !selectedData ? "block" : "hidden"
          } `}
        >
          please select size first
        </p>
        <div className="relative flex items-center ">
          <Link href={`/menu/product/${data?.pizzaName}`}>
            <PiNotePencilFill size={30} />
          </Link>
          <div className="bg-green-600 flex gap-2 items-center justify-center w-[80%]">
            <button
              onClick={() => {
                setIsAddClicked(true);
                selectedData &&
                  dispatch(
                    addToCart({
                      name: data?.pizzaName,
                      img: data?.banner,
                      size: selectedData,
                    })
                  );
              }}
              data-modal-target="popup-modal"
              data-modal-toggle="popup-modal"
              data-modal-hide="popup-modal"
              className="text-center p-2 text-white text-center"
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

export default PizzaCards;
