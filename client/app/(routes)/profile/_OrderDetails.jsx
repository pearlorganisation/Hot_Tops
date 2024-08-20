"use client";

import AddedToCartModel from "@/app/_components/Modals/AddedToCartModel";
import ReceiptModal from "@/app/_components/Modals/ReceiptModal";
import { addToCart } from "@/app/lib/features/cartSlice/cartSlice";
import { getSelectedReceipt } from "@/app/lib/features/orderDetails/selectedRecipt";
import { Router } from "lucide-react";
import React, { useEffect, useState } from "react";
import { MdReceiptLong } from "react-icons/md";
import { BiReceipt } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";

const OrderDetails = () => {
  const userData = useSelector((state) => state.auth.userData);
  const [orderData, setOrderData] = useState("");
  const [isReceiptVisible, setIsReceiptVisible] = useState(false);
  const dispatch = useDispatch();

  // const router = Router

  const getOrderDetails = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/order/${userData?._id}`
    );
    const responsejson = await response.json();
    setOrderData(responsejson?.data);
  };

  useEffect(() => {
    getOrderDetails();
  }, []);


  function handleReorderData(data) {
    data.forEach((element) => {
      return dispatch(
        addToCart({
          ...element,
        })
      );
    });

    console.log(data, "data in the orderDetails");
  }

  return (

    <div className="px-2 md:px-10 md:py-10 w-full lg:w-3/4 rounded-md shadow-lg">

      {Array.isArray(orderData) &&
        orderData.length > 0 ?
        orderData?.map((data) => {
          return (
            <div className="pb-8 md:p-4">
              <div className="md:flex gap-3  justify-between">
                <h1 className="">
                 <div className="flex justify-between">
                   <span className="text-xl capitalize bg-red-800 rounded-md px-1 py-1 text-white">{`${data?.orderType}`}
                    </span>   
                    <a
                    href="/order/cart"
                    onClick={() => handleReorderData(data?.items)}
                    className="md:hidden px-1 py-1  text-red-800 rounded-md shadow-lg flex items-center"
                  >
                    Reorder Now
                  </a>
                  </div>
                    <h2 className={` md:hidden font-semibold  ${data?.orderStatus === "Completed" ? "text-green-800" : data?.orderStatus === "Pending" ? "text-yellow-600" : "text-red-800" } `}>{data?.orderStatus}</h2>
                    <h1 className="hidden md:block">Order Id - {data?.count}</h1> 

                </h1>
                <h2 className={`hidden md:block font-semibold  ${data?.orderStatus === "Completed" ? "text-green-800" : data?.orderStatus === "Pending" ? "text-yellow-600" : "text-red-800"} `}>{data?.orderStatus}</h2>
              </div>
              <div className="flex justify-between items-center">
                <div className="font-semibold">
                <h1 className="md:hidden">Order Id - {data?.count}</h1> 
                  <p>{data?.orderAt}</p>
                  <p className="font-semibold">
                    Order Amount - £{" "} 
                    {Number(data?.totalAmount?.total) +
                      Number(data?.totalAmount?.deliveryCharge)}
                  </p>
                </div>
                <div className="md:flex items-center gap-2 ">
                  <a
                    href="/order/cart"
                    onClick={() => handleReorderData(data?.items)}
                    className="hidden p-3 bg-red-800 hover:bg-red-700 rounded-md text-white md:flex items-center"
                  >
                    Reorder Now
                  </a>
                  <button
                    className="p-2 md:p-3  text-red-800 hover:text-red-700  rounded-md shadow-lg flex items-center"
                    onClick={() => {
                      dispatch(getSelectedReceipt(data));
                      setIsReceiptVisible(true);
                    }}
                  >
                    <BiReceipt size={20} className=""/>
                  </button>
                </div>
                <ReceiptModal
                  setIsReceiptVisible={setIsReceiptVisible}
                  isReceiptVisible={isReceiptVisible}
                />
              </div>
            </div>
          );
        })
      : "No Order History"
      }
    </div>
  );
};

export default OrderDetails;
