"use client"
import { successRedirectStatus } from "@/app/lib/features/orderDetails/orderDetailsslice";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { SiTicktick } from "react-icons/si";
import { useDispatch, useSelector } from "react-redux";


const Success = ({transId}) =>{
    const router = useRouter()
    const [isLoading,setIsLoading] = useState(false)
    const {isSuccess} = useSelector((state=>state.orderDetails))
    const dispatch = useDispatch()




    useEffect(()=>{
  if(transId){
            // postData(); 
        }
    },[transId])

    // useEffect(() => {
    //   if (!isSuccess) {
    //     router.push("/notFound");
    //   }
    // }, []);

    return (
        <div className="mx-10 mb-10 flex flex-col gap-4 items-center bg-green-600 justify-center h-[60vh] rounded-lg" >
            <SiTicktick className=" text-white" size={100}/>
  <div className="text-4xl ms-2 text-white font-bold ">Thanks , Your Payment is Successfully Paid </div>
        </div>
    )
}

export default Success