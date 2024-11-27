"use client";

import { redirect,useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Collections from "./_steps/Collections";
import { toast } from "sonner";
import axios from "axios";
import Delivery from "./_steps/Delivery";

const page = () => {
  const [step, setStep] = useState(1);
  const router = useRouter();
  const { userData, isUserLoggedIn,isGuestLoggedIn } = useSelector((state) => state.auth);
  const [dayTimeIntervals, setDayTimeIntervals] = useState([]);
  const cart = useSelector((state) => state.cart.cartData);

  const { previousPath } = useSelector((state) => state.path);

  
  const totalPrice = cart?.reduce((acc, item) => acc + Number(item?.totalSum), 0);
  const orderTypeArray = [
    { name: `Collection`, no: 1 },
    { name: `Delivery`, no: 2 },
  ]
  if(totalPrice < 10){
    orderTypeArray.pop()
  }

  useEffect(() => {
    if (previousPath !== "/order/cart") {
      redirect("/order/cart");
    }
  }, []);

  useEffect(() => {
    const intervals = generateDayTimeIntervals();
    setDayTimeIntervals(intervals);
  }, []);

  useEffect(() => {
    console.log(isGuestLoggedIn)
    if (!isUserLoggedIn && !isGuestLoggedIn) {
      toast.error("Please Login...")
      router.push("/login");
    }
  }, [isUserLoggedIn,isGuestLoggedIn]);


  const generateDayTimeIntervals = () => {
    const intervals = [];
    const currentTime = new Date();
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    const addIntervalsForDay = (date) => {
      const day = daysOfWeek[date.getDay()];
      const start = new Date(date);
      start.setHours(11, 0, 0, 0); // Set start time to 11 AM
      const end = new Date(date);
      end.setHours(23, 0, 0, 0); // Set end time to 11 PM

      while (start <= end) {
        if (start > currentTime) {
          intervals.push({
            day: day,
            time: start.toTimeString().slice(0, 5),
          });
        }
        start.setMinutes(start.getMinutes() + 15); // Increment by 15 minutes
      }
    };

    for (let i = 0; i < 3; i++) { // Loop for today and the next two days
      const date = new Date();
      date.setDate(currentTime.getDate() + i);
      addIntervalsForDay(date);
    }

    return intervals;
  };
  const [postCodeAddress, setPostCodeAddress] = useState([])
  const [postalCode, setPostalCode] = useState('')
  async function getPostalAddress() {
    const addressAPI_KEY = `https://api.getAddress.io/autocomplete/${postalCode}?api-key=wzTsozpqsU6H14JJAZvUCA43606`
    const response = await axios.get(addressAPI_KEY)

    setPostCodeAddress(response?.data?.suggestions)
  }

  useEffect(() => {
    getPostalAddress()

  }, [postalCode])

  return (
    <div className="min-h-screen space-y-5 container mx-auto p-4">
      <div className=" flex items-center gap-2">
        {orderTypeArray.map((item) => {
          return (
            <button
              onClick={() => {
                setStep(item?.no);
              }}
              type="button"
              className={`px-6 py-2 border-2 ${step === item?.no ? "text-white bg-[#DC2626]" : "text-[#DC2626]"
                }  border-[#DC2626]  rounded font-medium`}
            >
              {item?.name}
            </button>
          );
        })}
      {totalPrice < 10 && <div className="text-red-800 ">No delivery in order less than 10 Pounds</div>}
      </div>
      <div>
        {step === 1 && (
          <Collections step={step} />
        )}
        {step === 2 && (
          <Delivery step={step} />
        )}
      </div>
    </div>
  );
};

export default page;


