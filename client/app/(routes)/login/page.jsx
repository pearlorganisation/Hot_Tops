"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Page = () => {
  // ----------------------------Hooks-------------------------------------
  const [response, setResponse] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/auth/login`,
        {
          method: "POST",
          body: JSON.stringify({
            email: data?.email,
            password: data?.password,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
          credentials: "include",
        }
      );
      const newData = await res.json();
      console.log(newData);
      if (newData?.status === true) {
        console.log("fksajflkasfkld");
        toast.success("login successfully");
      }

      setResponse(newData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="bg-gray-100 flex items-center justify-center h-screen">
        <div className="w-full max-w-md bg-white p-8 shadow-lg rounded-lg">
          {response && response?.status == false ? (
            <div className="p-2 text-center text-red-600 font-semibold">
              {response?.message}!
            </div>
          ) : (
            ""
          )}
          <h2 className="text-2xl font-bold mb-6 text-center">
            IF YOU'RE ALREADY A MEMBER.
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} method="POST">
            <div className="mb-4">
              <label className="block text-gray-700" htmlFor="login-email">
                Email Address
              </label>
              <input
                type="email"
                id="login-email"
                className={`w-full px-3 py-2 border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } rounded-md focus:outline-none focus:ring focus:ring-green-200`}
                placeholder="Enter your email"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700" htmlFor="login-password">
                Password
              </label>
              <input
                type="password"
                id="login-password"
                className={`w-full px-3 py-2 border ${
                  errors.password ? "border-red-500" : "border-gray-300"
                } rounded-md focus:outline-none focus:ring focus:ring-green-200`}
                placeholder="Enter your password"
                {...register("password", { required: "Password is required" })}
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>
            <div className="flex items-center justify-between mb-4">
              <a href="#" className="text-red-500">
                Forgot password?
              </a>
              <button
                type="submit"
                className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
              >
                Login
              </button>
            </div>
            <div className="text-center mb-4">OR</div>
            <button
              type="button"
              className="w-full bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
            >
              Login Via Facebook
            </button>
            <p className="mt-4">
              New ? {"=>"}
              <span>
                <Link href="/login" className="text-blue-700">
                  Sign Up here
                </Link>
              </span>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Page;
