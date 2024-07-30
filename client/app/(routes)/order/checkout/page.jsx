"use client";

import { useAppSelector } from "@/app/lib/hooks";
import { redirect, useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { emptyCart } from "@/app/lib/features/cartSlice/cartSlice";

const page = ({ searchParams }) => {
  const { previousPath } = useSelector((state) => state.path);
  const dispatch = useDispatch();
  console.log(previousPath);
  const router = useRouter();
  const cart = useSelector((state) => state.cart.cartData);
  const order = useSelector((state) => state.orderDetails?.order);
  const userData = useSelector((state) => state.auth.userData);
  const deliveryCharge = 0.5;
  console.log(userData);
  console.log("searchParams", searchParams)
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const newData = {
      orderType: order?.orderType,
      orderBy: userData?._id,
      time: order?.time,
      address: order?.orderType === 'collection' ? null : order?.address,
      comment: data?.comment,
      totalAmount: {
        total: totalPrice?.toFixed(2),
        deliveryCharge: order.orderType === 'collection' ? 0 : deliveryCharge,
      },
      mobileNumber:userData?.mobileNumber,
      paymentMethode: data?.paymentMethode,
      items: cart,
      terms: data?.terms
    };

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/order`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newData),
        }
      );
      const responsejson = await response.json();
      if (responsejson?.status === true) {
        // --------------clearing the cart after successfull order---------------
        dispatch(emptyCart());
        router.push("/order/tracker");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // -----------------------------------useeffects-------------------------------------------
  // useEffect(() => {
  //   previousPath !== "/order/orders" ? redirect("/order/cart") : "";
  // }, []);

  useEffect(() => { }, [order?.address, order?.time]);

  const totalPrice = cart?.reduce((acc, item) => {

    return acc + Number(item?.totalSum);
  }, 0);

  console.log(totalPrice)
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="max-w-7xl mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-8">
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
                         
                            <img src={data?.img} className="h-16 w-14 rounded-md" />
                     
                          <p className="font-semibold">
                    {data?.name}
                    {" "}
                    {Array.isArray(price) ? `(${price[0]})` : (data?.dealsData ? `(${data?.size})` : "") }
                    <br/>
                    {data?.dealsData && ( <div className="text-sm text-gray-600"> {data?.dealsData?.map((item,idx) =>
                    item?.label).join(", ")} </div>)
                    }
                  </p>
                        </div>

                        <div className="col-span-1 text-right  font-semibold md:col-span-3 md:text-left">
                          £ {data?.price} <span className="text-sm">x {data?.quantity}</span>
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
          
              </div>
            </div>
            <div className="space-y-1">
              <p>Total: £{totalPrice?.toFixed(2)}</p>
              {order?.type === 'collection' ? <p>Delivery charge: £0</p> : <p>Delivery charge: £{deliveryCharge}</p>}
              <p className="font-bold">
                You pay: {(Number(totalPrice) + 0.5).toFixed(2)}
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-center text-red-600 border-b-2 border-red-600 pb-2">
              ORDER DETAILS
            </h2>
            <div>
              <h3 className="text-lg font-bold">ANY COMMENTS</h3>
              <textarea
                {...register("comment")}
                name="comment"
                className="w-full border p-2 rounded-md"
                placeholder="Leave comments for your order here"
              />
            </div>

            {order?.orderType === 'delivery' && <div>
                <h3 className="text-lg font-bold">YOUR ADDRESS & MOBILE NUMBER:</h3>
                <p>
                  {order?.address} , <span className="text-red-500">{userData?.mobileNumber ? userData?.mobileNumber: "No Mobile Number is added"}</span>

                </p>
              </div>
            }

            <div>
              <h3 className="text-lg font-bold">ORDER TIME</h3>
              <p>
                Your order is to be placed for {order?.time} ( Please note
                delivery time is around 45 minutes )
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold">CHOOSE PAYMENT</h3>
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  id="cash"
                  value="Cash on delivery"
                  name="paymentMethode"
                  {...register("paymentMethode")}
                  defaultChecked
                />
                <label htmlFor="cash">Cash on delivery</label>
                {/* <input
                  {...register("paymentMethode")}
                  name="paymentMethode"
                  type="radio"
                  id="card"
                  value="Online Payment"
                 
                />
                <label htmlFor="card">Card</label> */}
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <input   {...register("terms",{required:true})} type="checkbox" id="terms" />
              <label htmlFor="terms" className="text-[15px]">
                I accept the Terms & Conditions and Privacy Policy
              </label>
            </div>
            { errors.terms &&  <p className="text-red-500">Please accept the terms & conditions.</p>}
            <div className="flex space-x-4">
              <button
                className="px-4 py-2 border rounded-md"
                onClick={() => router.push("/order/cart")}
              >
                Edit Order
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-green-700 hover:bg-green-600  text-white rounded-md"
              >
                Order
              </button>
            </div>
          </div>
        </div>
      </form>
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
