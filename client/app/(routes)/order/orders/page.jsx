"use client";

import { getorderDetails } from "@/app/lib/features/orderDetails/orderDetailsslice";
import { getPreviousPath } from "@/app/lib/features/path/pathslice";
import { useAppDispatch } from "@/app/lib/hooks";
import { usePreviousRoute } from "@/app/utils/utils";
import { redirect, usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import Collections from "./_steps/Collections";

const page = () => {
  const [step, setStep] = useState(1);
  const router = useRouter();
  const [addressData, setAddressData] = useState(null);
  const { userData } = useSelector((state) => state.auth);
  const [dayTimeIntervals, setDayTimeIntervals] = useState([]);
  const dispatch = useDispatch();
  const { previousPath } = useSelector((state) => state.path);

  useEffect(() => {
    if (previousPath !== "/order/cart") {
      redirect("/order/cart");
    }
  }, []);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  // const { previousRoute } = router.query;
  // console.log(previousRoute);

  const onSubmit = async (data) => {
    console.log(data);
    dispatch(
      getorderDetails({
        address: data?.address,
        time: data?.daytime,
        orderType: step === 1 ? "collection" : "delivery",
      })
    );
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/address`,
        {
          method: "post",
          body: JSON.stringify({
            address: data?.address,
            userId: userData?._id,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );
      const newData = await response?.json();
      setAddressData(newData);

      if (newData?.status === true) {
        dispatch(getPreviousPath("/order/orders"));
        router.push("/order/checkout");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    generateDayTimeIntervals();
  }, []);

  const generateDayTimeIntervals = () => {
    const intervals = [];
    const start = new Date();
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const day = daysOfWeek[start.getDay()];

    start.setHours(0, 0, 0, 0);
    const end = new Date(start);
    end.setHours(23, 59, 0, 0);

    while (start <= end) {
      intervals.push({
        day: day,
        time: start.toTimeString().slice(0, 5),
      });
      start.setMinutes(start.getMinutes() + 15);
    }

    setDayTimeIntervals(intervals);
  };
  return (
    <div className="min-h-screen space-y-5 container mx-auto p-4">
      <div className=" flex gap-2">
        {[
          { name: `Collection`, no: 1 },
          { name: `Delivery`, no: 2 },
        ].map((item) => {
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
      </div>
      <div>
        {step === 1 && (
          <Collections step={step} />
        )}
        {step === 2 && (
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className=" border-t-2 p-2 space-y-6">
              <div className="space-y-2">
                <label htmlFor="address">Please Enter Your Address</label>{" "}
                <input
                  className="border-2 border-gray-300 rounded-md px-4 py-2 outline-none w-full focus:ring-2 focus:ring-red-800"
                  type="text"
                  name="address"
                  id=""
                  placeholder="Enter Your Address..."
                  {...register("address")}
                />
              </div>
              <div className="space-y-1">
                <h1>Please Select Time</h1>
                <select
                  {...register("daytime")}
                  id="day"
                  className="px-4 py-2 border-2 w-full border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-800 focus:border-transparent"
                >
                  {dayTimeIntervals.map((interval, index) => (
                    <option
                      key={index}
                      value={`${interval.day}-${interval.time}`}
                    >
                      {interval.day} - {interval.time}
                    </option>
                  ))}
                </select>
              </div>

              <div className="bg-red-800 p-6 rounded-md text-white">
                <h2 className="font-bold text-lg mb-4">
                  ORDERING INFORMATION:
                </h2>
                <p className="mb-4">
                  <strong>Please note:</strong>{" "}
                  <a href="#" className="underline">
                    Orders take a minimum of 45 minutes
                  </a>{" "}
                  to deliver. Whilst we endeavour to get your order to you on
                  time, there may be delays during busier periods.
                </p>
                <p className="mb-4">
                  If you have any issues with your Tops Pizza order or
                  experience, in the first instance please contact the Tops
                  Store you ordered from directly.
                </p>
                <p className="mb-2">Your order is being placed with:</p>
                <p className="font-bold">Watford</p>
                <p className="flex items-center mt-2">
                  <PhoneIcon className="mr-2" />
                  0192 324 6666
                </p>
              </div>
              <button
                className="bg-green-500 py-2 w-full text-white rounded"
                type="submit"
              >
                Proceed To Checkout
              </button>
            </div>{" "}
          </form>
        )}
      </div>
    </div>
  );
};

export default page;

function PhoneIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
