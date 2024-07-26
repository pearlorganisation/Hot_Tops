"use client";
import { addToCart } from "@/app/lib/features/cartSlice/cartSlice";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import Select from "react-select";
import { toast } from "sonner";

async function getData(id) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/deals/${id}`
    );
    const data = await res.json();
    return data.data; // Assuming `data` has a `data` property containing the actual deals
  } catch (err) {
    console.log("Error Occurred", err);
    return null;
  }
}

const Page = () => {
  const searchParams = useSearchParams();
  const [dealViewData, setDealView] = useState(null);
  const dispatch = useDispatch();
  const cardId = searchParams.get("card_id");
  const sizeId = searchParams.get("size_id");
  const sizeDetailRef = useRef(null);

  const [dealDataPizza, setDealDataPizza] = useState([]);
  const [dealDataDrinks, setDealDataDrinks] = useState([]);

  useEffect(() => {
    if (dealViewData) {
      setDealDataPizza(new Array(dealViewData?.chooseItems?.pizza));
      setDealDataDrinks(new Array(dealViewData?.chooseItems?.drinks));
      sizeDetailRef.current = dealViewData?.sizes.find(
        (el) => el._id === sizeId
      );
      console.log(sizeDetailRef.current, "Size Details");
    }
  }, [dealViewData]);

  function handleDataSubmission() {
    const submitData = [
      ...dealDataPizza,
      ...dealDataDrinks,
      ...dealViewData?.defaultItems.map((el) => {
        return {
          label: el,
        };
      }),
    ];

    if (
      dealViewData &&
      submitData.every((item) => item !== null && item !== undefined)
    ) {
      console.log(submitData);
      dispatch(
        addToCart({
          name: dealViewData?.title,
          img: dealViewData?.banner,
          size: sizeDetailRef.current.size,
          id: dealViewData?._id,
          quantity: 1,
          price: Number(sizeDetailRef.current.price),
          totalSum: Number(sizeDetailRef.current.price),
          dealsData: [...submitData],
        })
      );
    } else {
      toast.error("Fill All Fields !!");
    }
  }

  useEffect(() => {
    async function fetchData() {
      const data = await getData(cardId);
      setDealView(data);
    }
    fetchData();
  }, []);

  const pizzaCount = dealViewData?.chooseItems?.pizzas || 0;
  const pizzas = new Array(pizzaCount).fill(null);

  const drinkCount = dealViewData?.chooseItems?.drinks || 0;
  const drinks = new Array(drinkCount).fill(null);

  return (
    <div className="p-5">
      {dealViewData ? (
        <div
          className="p-5 md:p-10 border flex flex-col gap-8 py-10 px-5 md:px-15 rounded-md"
          style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
        >
          <div className="flex flex-col md:flex-row text-3xl md:text-6xl p-5 md:p-10 text-slate-800 font-bold justify-between items-center md:px-20">
            <p>{dealViewData.title}</p>
            <p>
              £{dealViewData?.sizes?.find((el) => el._id === sizeId)?.price}
            </p>
          </div>
          <div className="flex justify-center items-center">
            <img
              src={dealViewData.banner}
              className="h-[200px] md:h-[400px] w-[200px] md:w-[400px]"
              alt="Deal Banner"
            />
          </div>
          {pizzaCount > 0 && (
            <div>
              <h1 className="text-xl md:text-2xl font-semibold mb-4">
                Choose Your Pizza
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {pizzas.map((_, index) => (
                  <Select
                    key={index}
                    onChange={(e) => {
                      setDealDataPizza((prev) => {
                        let temp = [...prev];
                        temp[index] = e;
                        return temp;
                      });
                      console.log(e, "e");
                    }}
                    options={dealViewData.pizza.map((el) => ({
                      label: el.pizzaName,
                      value: el._id,
                    }))}
                  />
                ))}
              </div>
            </div>
          )}
          {drinkCount > 0 && (
            <div>
              <h1 className="text-xl md:text-2xl font-semibold mb-4">
                Choose Your Drinks ({dealViewData.defaultDrinkType})
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {drinks.map((_, index) => (
                  <Select
                    key={index}
                    onChange={(e) => {
                      setDealDataDrinks((prev) => {
                        let temp = [...prev];
                        temp[index] = e;
                        return temp;
                      });
                    }}
                    options={dealViewData.drinks.map((el) => ({
                      label: el.drink,
                      value: el._id,
                    }))}
                  />
                ))}
              </div>
            </div>
          )}

          {dealViewData?.defaultItems?.length >= 1 && (
            <div>
              <h1 className="text-xl md:text-2xl font-semibold mb-4">
                Extra Loadings
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                {dealViewData.defaultItems.map((el, index) => (
                  <div
                    key={index}
                    className="w-full p-2 border border-gray-300 rounded-lg bg-gray-200 text-gray-700"
                  >
                    {el}
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="p-5 md:p-10 flex justify-center items-center">
            <button
              onClick={handleDataSubmission}
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full shadow-md transform hover:scale-105 transition-transform duration-200 ease-in-out"
            >
              ADD TO CART
            </button>
          </div>
        </div>
      ) : (
        <h1>Loading ....</h1>
      )}
    </div>
  );
};

export default Page;
