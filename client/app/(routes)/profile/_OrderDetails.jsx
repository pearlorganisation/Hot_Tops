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
    <div className=" md:px-10 md:py-10 w-full lg:w-3/4 rounded-md shadow-lg">
      {Array.isArray(orderData) &&
        orderData.length > 0 ?
        orderData?.map((data) => {
          return (
            <div className="md:p-4">
              <div className="md:flex gap-3 font-semibold justify-between">
                <h1 className="">
                  <span className="text-xl capitalize bg-red-800 rounded-md px-1 py-1 text-white">{`${data?.orderType}`}</span> Order Id - {data?.count}
                </h1>
                <h2 className="text-red-800">{data?.orderStatus}</h2>
              </div>
              <div className="flex justify-between items-center">
                <div className="font-semibold">
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
                    className="p-3 h-12 bg-red-800 hover:bg-red-700 rounded-md text-white flex items-center"
                  >
                    Reorder Now
                  </a>
                  <button
                    className="p-3 h-12 bg-red-800 hover:bg-red-700 rounded-md text-white flex items-center"
                    onClick={() => {
                      dispatch(getSelectedReceipt(data));
                      setIsReceiptVisible(true);
                    }}
                  >
                    <BiReceipt size={20} />
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
