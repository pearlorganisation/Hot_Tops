"use client";

import React, { useEffect } from "react";
import { useAppSelector } from "@/app/lib/hooks";
import { useDispatch, useSelector } from "react-redux";
import { usePathname, useRouter } from "next/navigation";
import { MdDelete } from "react-icons/md";

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
              
                  <img src={data?.img} className="w-[85px] h-24 lg:h-20 lg:w-20 rounded-md" />
                
                  <p className="text-xl font-semibold">
                    {data?.name}
                    {" "}
                    {Array.isArray(price) ? `(${price[0]})` : (data?.dealsData ? `(${data?.size})` : "") }
                    <br/>
                    {data?.dealsData && ( <div className="text-base text-gray-600"> {data?.dealsData?.map((item,idx) =>
                    item?.label).join(", ")} </div>)
                    }
                  </p>
                </div>
                <div className="flex justify-end space-x-2">
                  <button
                    onClick={() => {

                      dispatch(decreaseQuantity({ id: data?.id, quantity: 1 }))


                    }}
                    className="bg-red-800 hover:bg-red-700 text-white font-extrabold text-lg px-2 rounded">
                    -
                  </button>
                  <span className="px-2 py-1 font-semibold text-lg">{data?.quantity}</span>
                  <button type="button" onClick={() => {

                    dispatch(increaseQuantity({ id: data?.id, quantity: 1 }))


                  }} className="bg-green-700 hover:bg-green-600 text-white font-extrabold text-lg px-2 rounded">
                    +
                  </button>

                  <button
                    className="bg-red-800 hover:bg-red-700 text-white px-2 rounded"
                    onClick={() => dispatch(deletefromCart({ id: data?.id }))}
                  >
                    <MdDelete size={20}/>
                  </button>
                </div>
                <div className="col-span-1 text-right text-xl font-semibold md:col-span-3 md:text-left">
                  £ {data?.totalSum}
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
            className="bg-green-700 hover:bg-green-600 font-medium text-white text-center py-3 cursor-pointer"
          >
            <span>Select time & place</span>
          </div>
        }

      </div>
    </>
  );
};

export default Cart;
