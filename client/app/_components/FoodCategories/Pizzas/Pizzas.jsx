import React, {  useId, useState } from "react";
import useSWR from "swr";
import PizzaCards from "./pizzaCards/PizzaCards";
import { ClockLoader } from "react-spinners";
import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { clearSet } from "@/app/lib/features/cartSlice/cartSlice";
import { getCustomizationDetails } from "@/app/lib/features/orderDetails/orderDetailsslice";

// -------------------data fetching function-----------------------
const pizzaFetcher = (...args) => fetch(...args).then((res) => res.json());

const Pizzas = () => {

  const randomId = useId()
  const dispatch = useDispatch();
  // -------------------------------------------useState--------------------------------------------
  const [selectedType, setSelectedType] = useState("All");

  // =-------------------------data fetching---------------------------

  const { data, error, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/pizza`,
    pizzaFetcher
  );

  // ---------------fetch filter---------------------------
  const {
    data: filterData,
    error: filterError,
    isLoading: filterLoading,
  } = useSWR(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/pizza/filter`,
    pizzaFetcher
  );

  // -----------------category fetcher------------------------------------------
  const {
    data: categoryData,
    error: categoryError,
    isLoading: categoryLoading,
  } = useSWR(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/pizza/category`,
    pizzaFetcher
  );

  const categories = [];
  categoryData &&
    categoryData?.data?.map((data) => categories.push(data?.category));

  if (error || filterError) {
    return (
      <div className="h-screen text-red-800 text-center text-3xl md:text-5xl font-bold">
        Sorry, Failed to load...
      </div>
    );
  }
  if (isLoading || filterLoading) {
    return (
      <div className="flex justify-center pt-[25vh] h-[85vh]">
        {/* <ClockLoader color="#991b1b" size={100} /> */}
        <Image src="/HOTPIZZALOGO.jpg" alt="Pizza Logo"  width={300} height={300} className="h-[10vh] w-[30vw]  object-contain" />
      </div>
    );
  }

  const hasMatchingPizzas = categories.some((category) => {
    return data?.data?.some(
      (pizza) =>
        pizza.category?.category === category &&
        (selectedType === pizza?.filter?.filter || selectedType === "All")
    );
  });

  return (
    <div className="my-4">
      <div>
        <div className="flex  md:justify-between   gap-2  items-center md:mx-8 lg:mx-12">
        <div className="hidden w-[50%]  md:flex px-2 gap-4 lg:gap-10 ">
            {" "}
            <Link onClick={()=>
                    {    dispatch(
                      getCustomizationDetails({
                        name: "Create Your Own Pizza",
                        img: "https://res.cloudinary.com/dnixhctcf/image/upload/v1728298580/egnskniwajhlos4u7mu4.png",
                        priceSection: data?.data[0]?.priceSection,
                        id: randomId,
                        sauceName: [],
                        cheeseName: [],
                        vegetarianToppingsName: [],
                        meatToppingsName: [],
                        baseName: data?.data[0]?.baseName,
                        selectedData: data?.data[0]?.priceSection[0]?.size?._id,
                      })
                    );}
            }  href={"product/customisePizza?calledBy=createYourOwnPizza"} className="text-center  cursor-pointer bg-red-800 hover:bg-red-700 px-3 py-2 lg:p-4  sm:text-lg font-semibold text-white rounded-md w-[50%] lg:w-auto">

             <span className="hidden sm:block"> Create Your Own Pizza</span>
            </Link>
            <Link href={"halfAndHalfPizza?calledBy=half"} className="text-center bg-green-800 hover:bg-green-700  px-3 py-2  lg:p-4 sm:text-lg font-semibold text-white rounded-md w-[50%] lg:w-auto">

            <span  className="hidden sm:block"> Half & Half Pizza</span>
             
            </Link>
          </div>
          <div className="w-[50%]  ps-2 md:hidden  flex flex-col gap-0 ">
            {" "}
            <Link onClick={()=>
                   {    dispatch(
                        getCustomizationDetails({
                          name: "Create Your Own Pizza",
                          img: "https://res.cloudinary.com/dnixhctcf/image/upload/v1728298580/egnskniwajhlos4u7mu4.png",
                          priceSection: data?.data[0]?.priceSection,
                          id: randomId,
                          sauceName: [],
                          cheeseName: [],
                          vegetarianToppingsName: [],
                          meatToppingsName: [],
                          baseName: data?.data[0]?.baseName,
                          selectedData: data?.data[0]?.priceSection[0]?.size?._id,
                        })
                      );}
            }  href={"product/customisePizza?calledBy=createYourOwnPizza"} className="text-center bg-red-800 px-1 py-2 font-bold text-white rounded-md">
              Create Your Own Pizza
            </Link><br/>
            <Link href={"halfAndHalfPizza?calledBy=half"} className="text-center bg-green-800 px-3 py-2 font-bold text-white rounded-md">
              Half & Half Pizza
            </Link>
          </div>

          <div className="flex w-[50%] ps-5 md:w-auto  gap-2 md:mx-8  flex-wrap ">
            <span className="font-bold">Filter :</span>
            {filterData?.data?.map((data) => (
              <div className="flex gap-2" key={data.filter}>
                <input
                  type="radio"
                  name="type"
                  value={data.filter}
                  id={data.filter}
                  defaultChecked={data.filter === "All"}
                  onClick={() => setSelectedType(data.filter)}
                />
                <label htmlFor={data.filter}>{data.filter}</label>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        {!hasMatchingPizzas ? (
          <div className="text-center text-red-800 h-[80vh] pt-[25vh] font-bold text-3xl">
            Sorry, No Pizza found
          </div>
        ) : (
          categories.map((category) => {
            const isCategoryMatched = data?.data?.some(
              (pizza) =>
                pizza.category?.category === category &&
                (selectedType === pizza?.filter?.filter ||
                  selectedType === "All")
            );
      
            return (
              <React.Fragment key={category}>
                {isCategoryMatched && (
                  <div className="flex items-center justify-center mb-2 p-5">
                        <div className={`flex-grow border-t ${category === "VEGETARIAN" || category === "Vegetarian" ? "border-green-800": "border-red-800"} `}></div>
                    <h1 className={`px-4 ${category === "VEGETARIAN" || category === "Vegetarian" ? "text-green-800": "text-red-800"}  font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl`}>
                      {category}
                    </h1>
                    <div className={`flex-grow border-t ${category === "VEGETARIAN" || category === "Vegetarian" ? "border-green-800": "border-red-800"} `}></div>
                  </div>
                )}

                <div className="flex gap-11 flex-wrap justify-center">
                  {data?.data &&
                    data.data.map((pizza, idx) => {
                      if (
                        pizza.category?.category === category &&
                        (selectedType === pizza?.filter?.filter ||
                          selectedType === "All")
                      ) {
                        return <PizzaCards data={pizza} key={idx} />;
                      }
                      return null;
                    })}
                </div>
              </React.Fragment>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Pizzas;
