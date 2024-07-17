"use client";

import React, { useEffect } from "react";
import { useAppSelector } from "@/app/lib/hooks";
import { useDispatch, useSelector } from "react-redux";
import { usePathname, useRouter } from "next/navigation";

import {
  decreaseQuantity,
  deletefromCart,
  increaseQuantity,
  orderCheckedout,
} from "@/app/lib/features/cartSlice/cartSlice";
import { getPreviousPath } from "@/app/lib/features/path/pathslice";

const Cart = () => {
  // ----------------------hooks------------------------------------
  const cart = useSelector((state) => state.cart.cartData);
  const pathname = usePathname();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(orderCheckedout(false));
  }, []);

  const router = useRouter();
  console.log(pathname);
  const data = { previousRoute: pathname.toString() };
  return (
    <>
      <div className="max-w-7xl mx-auto bg-white shadow-md rounded-lg overflow-hidden my-4">
        <div className="bg-red-800 text-white text-center py-2">
          <h2 className="text-2xl font-bold">YOUR BASKET</h2>
        </div>
        {Array.isArray(cart) &&
          cart?.length > 0 ?
          cart?.map((data, idx) => {
            const price = String(data?.size).includes("-")
              ? data?.size?.split("-")
              : data?.size;
            console.log(price);
            return (
              <div className="p-4 border-b grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                <div className="flex items-center space-x-4 md:col-span-2">
                  <div className="w-20 h-20 bg-gray-200">
                    <img src={data?.img} className="h-20" />
                  </div>
                  <p className="text-xl font-semibold">
                    {data?.name}
                    {Array.isArray(price) ? `(${price[0]})` : ""}
                  </p>
                </div>
                <div className="flex justify-end space-x-2">
                  <button
                    onClick={() => {

                      dispatch(decreaseQuantity({ id: data?.id, quantity: 1 }))


                    }}
                    className="bg-gray-300 text-gray-800 px-2 py-1 rounded">
                    -
                  </button>
                  <span className="px-2 py-1">{data?.quantity}</span>
                  <button type="button" onClick={() => {

                    dispatch(increaseQuantity({ id: data?.id, quantity: 1 }))


                  }} className="bg-gray-300 text-gray-800 px-2 py-1 rounded">
                    +
                  </button>

                  <button
                    className="bg-red-800 text-white px-2 py-1 rounded"
                    onClick={() => dispatch(deletefromCart({ id: data?.id }))}
                  >
                    🗑
                  </button>
                </div>
                <div className="col-span-1 text-right text-xl font-semibold md:col-span-3 md:text-left">
                  £{Array.isArray(price) ? price[1] : price}
                </div>
              </div>
            );
          }) : <div className="h-[70vh] grid place-items-center">
            <div className="text-3xl font-semibold">Your cart is Empty</div>
          </div>}
        {
          Array.isArray(cart) &&
          cart?.length > 0 && <div
            onClick={() => {
              dispatch(orderCheckedout(true));
              dispatch(getPreviousPath(pathname));
              router.push("/order/orders");
            }}
            className="bg-green-500 text-white text-center py-3 cursor-pointer"
          >
            <span>Select time & place</span>
          </div>
        }

      </div>
    </>
  );
};

export default Cart;
