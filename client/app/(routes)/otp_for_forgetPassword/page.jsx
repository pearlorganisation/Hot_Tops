"use client";


import { setForgetPasswordEmail} from "@/app/lib/features/auth/authSlice";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";


const OTPReceiver = () => {
  // ----------------------------------------hooks----------------------------------------
  const dispatch = useDispatch();

  const {forgetPasswordEmail:email} =  useSelector((state)=> state?.auth);
  const [otp, setOtp] = useState("");
  
  const [error, setError] = useState("");

  const [response, setResponse] = useState("");

  const router = useRouter();

  const handleChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      // Only allow digits
      setOtp(value);
      setError(""); // Clear error when input is valid
    } else {
      setError("OTP must be a number.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    

    


    if (otp.length !== 6) {
      setError("OTP must be 6 digits long.");
    } else {
      // Handle OTP submission logic here
      try {
        const data = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/auth/verifyOtpForForgotPassword`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email,
              otp,
            }),
          }
        );
        const newData = await data.json();
        setResponse(newData)
        if (newData.status === true) {
          
            toast.success("Otp verfied successfully !!!!");
            router.push("/newPassword");
            console.log("Redirecting to newPassword");


          
        }
        else
        {
          toast.error(newData && newData?.message);

        }
        
        console.log(newData);
      } catch (error) {
        console.log(error);
      }

      setError(""); // Clear error when submitting
    }
  };
  return (
    <>
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      
      <div className="max-w-md w-full bg-white shadow-md rounded-lg p-8">
        {response && response?.success === false ? (
          <div className="p-2 text-center text-red-600 font-semibold">
            {response?.message}!
          </div>
        ) : (
          ""
        )}
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
          Enter OTP
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Please enter the OTP sent to your email or phone.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <input
              type="text"
              maxLength="6"
              value={otp}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-center text-xl tracking-widest"
              placeholder="------"
            />
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          </div>
          <button
            type="submit"
            className="w-full bg-[#DC2626] text-white font-bold py-2 px-4 rounded-lg transition duration-300"
          >
            Verify OTP
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-gray-600">Didn't receive the code?</p>
          <button className="hover:underline mt-2">Resend OTP</button>
        </div>
      </div>
    </div>
    </>
    
  );
};

export default OTPReceiver;