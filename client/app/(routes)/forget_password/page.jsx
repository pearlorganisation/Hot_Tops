'use client'


import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux';
import { setForgetPasswordEmail } from '@/app/lib/features/auth/authSlice';
import { ToastContainer, toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

const Page = () => {

    const { handleSubmit, register, formState: { errors } } = useForm();
    const router = useRouter();
    const dispatch = useDispatch();
    const [error,setError] = useState('');
    const [response,setResponse] = useState(''); 
    async function sendData(email)
    {
     //endpoint forget passowrd    
   try {
    const data = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/auth/forgetPassword`,
      {
        method: "POST", 
        body: JSON.stringify({
          email: email,
          
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        credentials: "include",
      }
    );
    
    const res = await data.json();
    setResponse(res);
    console.log(res);

    
    if(res?.status === true)
        {

            
            dispatch(setForgetPasswordEmail(email));
            toast.success("Otp Send Successfully !!");
            router.push("/otp_for_forgetPassword");
            console.log("Redirecting to otp_for_forgetPassword");



            
        }
        else{
          toast.error("Email Not Found");
        }
  } catch (error) {
    console.log(error);
    
  }
    }



    const onSubmit = (data) => {
        if (data.newsletter) {
            console.log(data.email); 
         
            sendData(data?.email);
            


        





        } else {
            console.log("Please accept the Terms and Conditions.");
        }
    }

    return (
      <>
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col  items-center justify-center px-4 py-6 mx-auto md:h-screen lg:py-0">
                <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                    <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo"/>
                    HotHouse    
                </a>
                <div className="w-full p-6 bg-white rounded-lg shadow   dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
                    <h2 className="mb-1 text-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Forget Password
                    </h2>
                    {response && response?.status == false ? (
          <div className="p-2 text-center text-red-600 font-semibold">
            {response?.message}!
          </div>
        ) : (
          ""
        )}
                    <form className="mt-4 space-y-4 lg:mt-5 md:space-y-5" onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                            <input type="email" {...register('email', { required: true })} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required/>
                        </div>

                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input id="newsletter" aria-describedby="newsletter" type="checkbox" {...register('newsletter', { required: true })} className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"/>
                            </div>
                            <div className="ml-3 text-sm">
                                <label htmlFor="newsletter" className="font-light text-gray-500 dark:text-gray-300">I accept the <a className="font-medium text-blue-600 hover:underline dark:text-blue-500" href="#">Terms and Conditions</a></label>
                            </div>
                        </div>
                        {(errors.newsletter)  && <p className="text-red-500 text-xs mt-1">This field is required.</p>}
                       
                        
                        <button type="submit" className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Reset password</button>
                    </form>
                </div>
            </div>
        </section>
      </>
      
    )
}

export default Page;
