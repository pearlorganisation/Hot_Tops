"use client";

import React, { useEffect, useState } from "react";
import { MdReceiptLong } from "react-icons/md";
import { useSelector } from "react-redux";

const OrderDetails = () => {
  const userData = useSelector((state) => state.auth.userData);
  const [orderData, setOrderData] = useState("");

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

  return (
    <div className="px-10 py-10 ">
      {Array.isArray(orderData) &&
        orderData.length > 0 &&
        orderData?.map((data) => {
          return (
            <div className="lg:w-[600px] bg-white shadow-md p-4">
              <div className="flex gap-3 justify-between">
                <h1 className="text-xl">
                  {`${data?.orderType}`}ORDER NO. 1661845{" "}
                </h1>
                <h2 className="text-red-800">PENDING</h2>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <p>2024-07-02 06:41:58</p>
                  <p className="text-xl">
                    TOTAL - £
                    {data?.totalAmount?.total +
                      data?.totalAmount?.deliveryCharge}
                  </p>
                </div>
                <div className="flex items-center gap-2 ">
                  <button className="p-3 h-12 bg-red-800 text-white flex items-center">
                    Reorder Now
                  </button>
                  <button className="p-3 h-12 bg-red-800 text-white flex items-center">
                    <MdReceiptLong />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default OrderDetails;
