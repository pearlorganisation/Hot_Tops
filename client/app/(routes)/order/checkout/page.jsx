"use client";

import { useAppSelector } from "@/app/lib/hooks";
import { redirect, useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const page = () => {
  const { previousPath } = useSelector((state) => state.path);

  console.log(previousPath);
  const router = useRouter();
  const cart = useSelector((state) => state.cart.cartData);
  const order = useSelector((state) => state.orderDetails?.order);

  useEffect(() => {
    previousPath !== "/order/orders" ? redirect("/order/cart") : "";
  }, []);

  useEffect(() => {}, [order?.address, order?.time]);
  const totalPrice = cart?.reduce((ele, acc) => {
    // console.log(typeOf(acc?.size);
    const price = String(acc?.size).includes("-")
      ? acc?.size?.split("-")
      : acc?.size;

    console.log(price);
    return ele + Number(price[1] || price);
  }, 0);
  return (
    <div>
      <div className="max-w-7xl mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-center text-red-600 border-b-2 border-red-600 pb-2">
            ORDER DETAILS
          </h2>
          <div>
            <h3 className="text-lg font-bold">ANY COMMENTS</h3>
            <textarea
              className="w-full border p-2 rounded-md"
              placeholder="Leave comments for your order here"
            />
          </div>
          <div>
            <h3 className="text-lg font-bold">YOUR ADDRESS:</h3>
            <p>
              {order?.address}
              {/* 1 Crossroads House, 165 The Parade, High Street, Watford,
              Hertfordshire, WD171NJ */}
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold">ORDER TIME</h3>
            <p>
              Your order is to be placed for {order?.time}(Please note delivery
              time is around 45 minutes)
            </p>
            <a href="#" className="text-blue-500 underline">
              Change Delivery Details
            </a>
          </div>
          <div>
            <h3 className="text-lg font-bold">CHOOSE PAYMENT</h3>
            <div className="flex items-center space-x-2">
              <input type="radio" id="cash" name="payment" value="cash" />
              <label htmlFor="cash">Cash</label>
              <input
                type="radio"
                id="card"
                name="payment"
                value="card"
                defaultChecked
              />
              <label htmlFor="card">Card</label>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <input type="checkbox" id="terms" />
            <label htmlFor="terms" className="text-sm">
              I accept the Tops Pizza Terms & Conditions and Privacy Policy
            </label>
          </div>
          <div className="flex space-x-4">
            <button
              className="px-4 py-2 border rounded-md"
              onClick={() => router.push("/order/cart")}
            >
              Edit Order
            </button>
            <button className="px-4 py-2 bg-green-500 text-white rounded-md">
              Make Payment of £17.49
            </button>
          </div>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-center text-red-600 border-b-2 border-red-600 pb-2">
            ORDER SUMMARY
          </h2>
          <div className="border p-4 rounded-md">
            <div className="">
              {Array.isArray(cart) &&
                cart?.length > 0 &&
                cart?.map((data, idx) => {
                  const price = String(data?.size).includes("-")
                    ? data?.size?.split("-")
                    : data?.size;
                  console.log(price);
                  return (
                    <div className="p-4 border-b grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                      <div className="flex items-center space-x-4 md:col-span-2">
                        <div className="w-10 h-10 bg-gray-200">
                          <img src={data?.img} className="h-10" />
                        </div>
                        <p className=" font-semibold">
                          {data?.name}
                          {Array.isArray(price) ? `(${price[0]})` : ""}
                        </p>
                      </div>

                      <div className="col-span-1 text-right  font-semibold md:col-span-3 md:text-left">
                        £{Array.isArray(price) ? price[1] : price}
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold">GOT A VOUCHER?</h3>
            <div className="flex items-center space-x-2">
              <input
                type="text"
                placeholder="Just enter it here"
                className="border p-2 rounded-md flex-1"
              />
              <button className="px-4 py-3 bg-red-500 text-white rounded-md">
                <PlusIcon className="h-4 w-4" />
              </button>
            </div>
          </div>
          <div className="space-y-1">
            <p>Total: £{totalPrice?.toFixed(2)}</p>
            <p>Delivery charge: £0.5</p>
            <p className="font-bold">
              You pay: {+totalPrice?.toFixed(2) + 0.5}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

function PlusIcon(props) {
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
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}
