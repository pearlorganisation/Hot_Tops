"use client"
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { SiTicktick } from "react-icons/si";
import { useSelector } from "react-redux";

const Success = () =>{
    const router = useRouter()
    const order = useSelector((state) => state.orderDetails?.order);
    const userData = useSelector((state) => state.auth.userData);
    const cart = useSelector((state) => state.cart.cartData);
    const [isLoading,setIsLoading] = useState(false)

    const deliveryCharge = 0.5;
    const postData = async()=>{

        const newData = {
            orderType: order?.orderType,
            email:userData?.email,
            orderBy: userData?._id,
            time: order?.time,
            address: order?.orderType === 'collection' ? null : order?.address,
            // comment: data?.comment,
            totalAmount: {
            //   total: totalPrice?.toFixed(2),
              total: 50,
              deliveryCharge: order.orderType === 'collection' ? 0 : deliveryCharge,
            },
            mobileNumber:userData?.mobileNumber,
            paymentMethode: "Online Payment",
            items: cart,
          };

          try {
            setIsLoading(true)
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
              router.push("/order/tracker");
            }
            setIsLoading(false)
          } catch (error) {
            setIsLoading(false)
            console.log(error);
          }
    }

    useEffect(()=>{
 
        
        postData(); 
    },[])


    return (
        <div className="mx-10 mb-10 flex flex-col gap-4 items-center bg-green-600 justify-center h-[60vh] rounded-lg" >
            <SiTicktick className=" text-white" size={100}/>
  <div className="text-4xl ms-2 text-white font-bold ">Thanks , Your Payment is Successfully Paid </div>
        </div>
    )
}

export default Success