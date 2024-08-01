"use client";
import { addToCart } from "@/app/lib/features/cartSlice/cartSlice";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { TbEdit } from "react-icons/tb";
import { useDispatch } from "react-redux";
import Select from "react-select";
import { toast } from "sonner";
import Link from "next/link";
import { getCustomizationDetails } from "@/app/lib/features/orderDetails/orderDetailsslice";
import { MdEditSquare } from "react-icons/md";

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
    console.log(dealViewData, "deal data pizza");
  }, [dealViewData]);

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
    <div className="">
      {dealViewData ? (
        <div>
          <div className="text-2xl md:text-5xl md:p-10 text-slate-800  md:px-20">
            <img
              src={dealViewData.banner}
              className="md:hidden mx-auto w-full h-full  object-cover "
              alt="Deal Banner"
            />
            <div className="mt-5 md:mt-0 flex gap-4 mx-3 justify-between items-center">
              {/* <p className="">{dealViewData.title}</p> */}
              <p className="text-red-800 font-bold">{dealViewData.title}</p>

              <p className="text-green-700 font-bold">
                £{dealViewData?.sizes?.find((el) => el._id === sizeId)?.price}
              </p>
            </div>
          </div>
          <div className="flex justify-center md:justify-between md:px-32 items-center pt-6 md:pt-0 ">
            <div>
              {pizzaCount > 0 && (
                <div>
                  <h1 className="text-lg md:text-2xl font-medium mb-4">
                    Choose Your Pizza
                  </h1>
                 
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">

                    {pizzas.map((_, index) => (
                      <div className="flex items-center  gap-2">
                {Array.isArray(dealDataPizza) && dealDataPizza[index] && (
                    <Link
                          onClick={() => {
                            console.log(
                              {
                                name: dealDataPizza[index]?.label,
                                img: dealDataPizza[index]?.banner,
                                priceSection:
                                  dealViewData.sizes.length === 1
                                    ? dealDataPizza[index].priceSection.filter(
                                        (el) =>
                                          el.size.name ===
                                          dealViewData?.sizes[0].size
                                      )
                                    : dealDataPizza[index].priceSection.filter(
                                        (el) =>
                                          el.size.name ===
                                          dealDataPizza[
                                            index
                                          ].priceSection.filter(
                                            (el) =>
                                              el.size.name ===
                                              sizeDetailRef.current.size
                                          )
                                      ),

                                id: dealDataPizza[index]?.id,
                                // id: uniquePizzaId,
                                sauceName: dealDataPizza[index]?.sauceName,
                                cheeseName: dealDataPizza[index]?.cheeseName,
                                vegetarianToppingsName:
                                  dealDataPizza[index]?.vegetarianToppingsName,
                                baseName: dealDataPizza[index]?.baseName,
                                meatToppingsName:
                                  dealDataPizza?.[index]?.meatToppingsName,

                                // selectedData: selectedData,
                              },
                              "submitting to customization page"
                            );

                            dispatch(
                              getCustomizationDetails({
                                name: dealDataPizza[index]?.label,
                                img: dealDataPizza[index]?.banner,
                                priceSection:
                                  dealViewData.sizes.length === 1
                                    ? dealDataPizza[index].priceSection.filter(
                                        (el) =>
                                          el.size.name ===
                                          dealViewData?.sizes[0].size
                                      )
                                    : dealDataPizza[index].priceSection,
                                id: dealDataPizza[index]?.id,
                                sauceName: dealDataPizza[index]?.sauceName,
                                cheeseName: dealDataPizza[index]?.cheeseName,
                                vegetarianToppingsName:
                                  dealDataPizza[index]?.vegetarianToppingsName,
                                baseName: dealDataPizza[index]?.baseName,
                                meatToppingsName:
                                  dealDataPizza?.[index]?.meatToppingsName,
                              })
                            );
                          }}
                          href={`/menu/product/${dealDataPizza[index]?.label}`}
                        >
                          <MdEditSquare
                            size={30}
                            className="text-red-800 hover:text-red-700"
                          />
                        </Link>
                      )}      
                        <Select
                          placeholder={`Choose pizza ${index + 1}`}
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
                            id: el._id,
                            banner: el.banner,
                            priceSection: el.priceSection,
                            sauceName: el.sauceName,
                            cheeseName: el.cheeseName,
                            vegetarianToppingsName: el.vegetarianToppingsName,
                            meatToppingsName: el.meatToppingsName,
                            baseName: el.baseName,
                          }))}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {drinkCount > 0 && (
                <div>
                  <h1 className="text-lg md:text-2xl font-medium mb-4 ">
                    Choose Your Drink ({dealViewData.defaultDrinkType})
                  </h1>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {drinks.map((_, index) => (
                      <Select
                        placeholder={`Choose drink ${index + 1}`}
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
                  <h1 className="text-lg md:text-2xl font-medium my-4">
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
            </div>
            <div className="hidden md:block">
              <img
                src={dealViewData.banner}
                className="h-[200px] md:h-[400px] rounded-md w-[200px] md:w-[400px]"
                alt="Deal Banner"
              />
            </div>
          </div>
    
         
      

          <div className="p-5 md:p-10 flex justify-center items-center">
            <button
              onClick={handleDataSubmission}
              className="bg-green-700 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md shadow-md transform hover:scale-105 transition-transform duration-200 ease-in-out"
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
