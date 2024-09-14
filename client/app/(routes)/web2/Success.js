"use client"
import { successRedirectStatus } from "@/app/lib/features/orderDetails/orderDetailsslice";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { SiTicktick } from "react-icons/si";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
import { ClockLoader } from "react-spinners";


const Success = ({transId}) =>{
    const router = useRouter()
    const [isLoading,setIsLoading] = useState(false)
    const [paymentStatus,setPaymentStatus] = useState(null)
    const {isSuccess} = useSelector((state)=>state.orderDetails)
    const dispatch = useDispatch()
console.log(isSuccess,"isSuccess")

const getData = async() =>{
  
try {
    setIsLoading(true)
    if(isSuccess)
{   
   const getOrderStatus = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/order/paymentStatus/${isSuccess}`,{
method:"GET",
headers:{"Content-Type": "application/json"}
    }
) 


if (!getOrderStatus.ok) {
  throw new Error(response.message || 'Something went wrong while creating the Viva order');
}
const response = await getOrderStatus.json()

  const data = response.data
  // alert(data)
  // console.log(data,"hi")
  setPaymentStatus(data?.paymentStatus)
}
  setIsLoading(false)
} catch (error) {
    dispatch(successRedirectStatus(null))
    setIsLoading(false)
    toast.error("Error in payment verification", { position: "top-center" });
}
}


    useEffect(()=>{
  if(transId){
    getData(); 
    // alert(paymentStatus,"hi this is the payment status")

        }
    },[transId,isSuccess])

  //  alert(paymentStatus,"hi this is the payment status")

    useEffect(() => {
      if (paymentStatus !== null) { // Ensure paymentStatus has been set (true or false)
        if (paymentStatus) {
          toast.success("Payment Successful");
          router.push("/order/tracker");
        } else {
          router.push("/web2/fail");
        }
      }
    }, [paymentStatus]);

    // useEffect(() => {
    //   if (!isSuccess) {
    //     router.push("/notFound");
    //   }
    // }, [isSuccess]);

    return (
        isLoading ? (<div className="flex justify-center pt-[25vh] h-[85vh] ">
            <ClockLoader color="#991b1b" size={100} />
          </div> ) : (<div className="mx-10 mb-10 flex flex-col gap-4 items-center bg-green-600 justify-center h-[60vh] rounded-lg" >
            <SiTicktick className=" text-white" size={100}/>
  <div className="text-4xl ms-2 text-white font-bold ">Thanks , Your Payment is Successfully Paid </div>
        </div>)
    )
}

export default Success