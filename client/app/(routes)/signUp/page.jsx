"use client";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

const Page = () => {
  const {
    register,
    handleSubmit,

    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/auth/signup`,
        {
          method: "POST",
          body: JSON.stringify({
            email: data?.email,
            password: data?.password,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );
      const newData = await res.json();
      console.log(newData);
    } catch (error) {
      console.log(error?.data);
    }
    console.log(data);
    // Add your signup logic here
  };

  return (
    <>
      <div className="bg-gray-100 flex items-center justify-center h-screen">
        <div className="w-full max-w-md bg-white p-8 shadow-lg rounded-lg">
          <h2 className="text-2xl font-bold mb-6 text-center">
            NEW MEMBER? REGISTER
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label className="block text-gray-700" htmlFor="register-email">
                Email Address
              </label>
              <input
                type="email"
                id="register-email"
                className={`w-full px-3 py-2 border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } rounded-md focus:outline-none focus:ring focus:ring-green-200`}
                placeholder="Enter your email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Entered value does not match email format",
                  },
                })}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700"
                htmlFor="register-password"
              >
                Password
              </label>
              <input
                type="password"
                id="register-password"
                className={`w-full px-3 py-2 border ${
                  errors.password ? "border-red-500" : "border-gray-300"
                } rounded-md focus:outline-none focus:ring focus:ring-green-200`}
                placeholder="Enter your password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must have at least six characters",
                  },
                })}
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700" htmlFor="confirm-password">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirm-password"
                className={`w-full px-3 py-2 border ${
                  errors.confirmPassword ? "border-red-500" : "border-gray-300"
                } rounded-md focus:outline-none focus:ring focus:ring-green-200`}
                placeholder="Re-enter your password"
                {...register("confirmPassword", {
                  required: "Please confirm your password",
                  validate: (value) =>
                    value === watch("password") || "The passwords do not match",
                })}
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>
            <div className="mb-4 flex items-center">
              <input
                type="checkbox"
                id="terms"
                className="mr-2"
                {...register("terms", {
                  required: "You must accept the terms and conditions",
                })}
              />
              <label htmlFor="terms" className="text-gray-700">
                I accept the Tops Pizza{" "}
                <a href="#" className="text-blue-500 underline">
                  Terms & Conditions
                </a>{" "}
                and{" "}
                <a href="#" className="text-blue-500 underline">
                  Privacy Policy
                </a>
              </label>
            </div>
            {errors.terms && (
              <p className="text-red-500 text-sm mt-1">
                {errors.terms.message}
              </p>
            )}

            <button
              type="submit"
              className="w-full bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
            >
              Register
            </button>

            <p className="mt-4">
              already have account{" "}
              <span>
                <Link href="/login" className="text-blue-700">
                  login here
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
