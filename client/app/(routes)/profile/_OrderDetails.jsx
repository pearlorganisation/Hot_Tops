"use client";

import AddedToCartModel from "@/app/_components/Modals/AddedToCartModel";
import ReceiptModal from "@/app/_components/Modals/ReceiptModal";
import { addToCart } from "@/app/lib/features/cartSlice/cartSlice";
import { getSelectedReceipt } from "@/app/lib/features/orderDetails/selectedRecipt";
import { Router } from "lucide-react";
import React, { useEffect, useState } from "react";
import { MdReceiptLong } from "react-icons/md";
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


  }

  return (
    <div className="px-10 py-10 ">
      {Array.isArray(orderData) &&
        orderData.length > 0 &&
        orderData?.map((data) => {
          return (
            <div className="lg:w-[600px] bg-white shadow-md p-4">
              <div className="flex gap-3 justify-between">
                <h1 className="text-xl">
                  {`${data?.orderType}`} ORDER NO. {data?.count}
                </h1>
                <h2 className="text-red-800">PENDING</h2>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <p>{data?.orderAt}</p>
                  <p className="text-xl">
                    TOTAL - £
                    {Number(data?.totalAmount?.total) +
                      Number(data?.totalAmount?.deliveryCharge)}
                  </p>
                </div>
                <div className="flex items-center gap-2 ">
                  <a
                    href="/order/cart"
                    onClick={() => handleReorderData(data?.items)}
                    className="p-3 h-12 bg-red-800 text-white flex items-center"
                  >
                    Reorder Now
                  </a>
                  <button
                    className="p-3 h-12 bg-red-800 text-white flex items-center"
                    onClick={() => {
                      dispatch(getSelectedReceipt(data));
                      setIsReceiptVisible(true);
                    }}
                  >
                    <MdReceiptLong />
                  </button>
                </div>
                <ReceiptModal
                  setIsReceiptVisible={setIsReceiptVisible}
                  isReceiptVisible={isReceiptVisible}
                />
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default OrderDetails;
