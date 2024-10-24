"use client";
import DealsCards from "@/app/_components/Pages/DealsCards";
import { getCustomizationDetails } from "@/app/lib/features/orderDetails/orderDetailsslice";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useRef, useId } from "react";
import { useDispatch } from "react-redux";
import { ClockLoader } from "react-spinners";


async function getData() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/deals`);
    const data = await res.json();
    return data.data; // Assuming `data` has a `data` property containing the actual deals
  } catch (err) {
    console.log("Error Occurred", err);
    return null;
  }
}
async function getPizzaData() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/pizza`);
    const data = await res.json();
    return data.data; // Assuming `data` has a `data` property containing the actual deals
  } catch (err) {
    console.log("Error Occurred", err);
    return null;
  }
}

const Deals = () => {
  const randomId = useId()
  const [dealData, setDealData] = useState(null);
  const [pizzaData, setPizzaData] = useState(null);
  const dispatch=useDispatch()

  useEffect(() => {
    async function fetchData() {
      const data = await getData();
      const pizzaData= await getPizzaData()
      setPizzaData(pizzaData)
      setDealData(data);
    }
    fetchData();
    console.log(pizzaData)
  }, []);

  if (!dealData)
    return (
      <div className="flex justify-center pt-[25vh] h-[85vh] ">
        <Image src="/HOTPIZZALOGO.jpg" alt="Pizza Logo"  width={300} height={300} className="h-[10vh] w-[30vw]  object-contain" />
      </div>
    );

  return (
    <>
      <div className=" mx-auto container pb-10">
          <div className="flex px-2 gap-4 lg:gap-10 ">
            {" "}
            <Link onClick={()=>
                   {    dispatch(
                        getCustomizationDetails({
                          name: "Create Your Own Pizza",
                          img: "https://res.cloudinary.com/dnixhctcf/image/upload/v1728298580/egnskniwajhlos4u7mu4.png",
                          priceSection: pizzaData[0]?.priceSection,
                          id: randomId,
                          sauceName: [],
                          cheeseName: [],
                          vegetarianToppingsName: [],
                          meatToppingsName: [],
                          baseName: pizzaData[0]?.baseName,
                          selectedData: pizzaData[0]?.priceSection[0]?.size?._id,
                        })
                      );}
            }  href={"product/customisePizza?calledBy=createYourOwnPizza"} className="text-center  cursor-pointer bg-red-800 hover:bg-red-700 px-3 py-2 lg:p-4  sm:text-lg font-semibold text-white rounded-md w-[50%] lg:w-auto">
             <span className="sm:hidden"> Create Your  <div className="">Own Pizza</div></span>
             <span className="hidden sm:block"> Create Your Own Pizza</span>
            </Link>
            <Link href={"halfAndHalfPizza?calledBy=half"} className="text-center bg-green-800 hover:bg-green-700  px-3 py-2  lg:p-4 sm:text-lg font-semibold text-white rounded-md w-[50%] lg:w-auto">
            <span className="sm:hidden"> Half & Half <div className="">Pizza</div></span>
            <span  className="hidden sm:block"> Half & Half Pizza</span>
             
            </Link>
          </div>
        <div className=" px-6 pt-5 ">
          <header class="text-center  bg-white">
            <div className="flex justify-between   gap-2  items-center ">

          </div>
            <div className="flex items-center justify-center mb-2">
              <div className="flex-grow border-t border-red-800"></div>
              <h1 className="px-4  text-red-800 font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl">
                TOP HOT DEALS
              </h1>
              <div className="flex-grow border-t border-red-800"></div>
            </div>
          </header>
        </div>

        <div className="p-8 gap-10 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4   place-content-center">
          {Array.isArray(dealData) &&
            dealData.map((el, index) => <DealsCards data={el} key={index} />)}
        </div>
      </div>
    </>
  );
};

export default Deals;
