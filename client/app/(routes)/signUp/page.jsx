"use client";
import { getcredentials } from "@/app/lib/features/auth/authSlice";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useDispatch } from "react-redux";

const Page = () => {
  // -------------------------------------hooks---------------------------------
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/auth/signup`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: data.email,
            password: data.password,
          }),
        }
      );
      dispatch(
        getcredentials({
          email: data?.email,
          password: data?.password,
          firstName: data?.firstName,
          lastName: data?.lastName
        })
      );
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const result = await response.json();

      router.push("/otp");
      // Add your logic for a successful signup
    } catch (error) {
      console.error("Error during signup:", error);
      // Handle error (e.g., show an error message to the user)
    }
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
                First Name
              </label>
              <input
                type="text"
                id="register-email"
                className={`w-full px-3 py-2 border ${errors.firstName ? "border-red-500" : "border-gray-300"
                  } rounded-md focus:outline-none focus:ring focus:ring-green-200`}
                placeholder="Enter your First Name"
                {...register("firstName", {
                  required: true,
                })}
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.firstName && "First Name is required"}
                </p>
              )}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700" htmlFor="register-email">
                Last Name
              </label>
              <input
                type="text"
                id="register-email"
                className={`w-full px-3 py-2 border ${errors.firstName ? "border-red-500" : "border-gray-300"
                  } rounded-md focus:outline-none focus:ring focus:ring-green-200`}
                placeholder="Enter your Last Name"
                {...register("lastName", {
                  required: true,
                })}
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.lastName && "Last Name is required"}
                </p>
              )}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700" htmlFor="register-email">
                Email Address
              </label>
              <input
                type="email"
                id="register-email"
                className={`w-full px-3 py-2 border ${errors.email ? "border-red-500" : "border-gray-300"
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
                className={`w-full px-3 py-2 border ${errors.password ? "border-red-500" : "border-gray-300"
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
                <p className="text-red-500 text-sm mt-5 ">
                  {errors.password.message}
                </p>
              )}
            </div>
            <div className="mb-4 relative">
              <label className="block text-gray-700" htmlFor="confirm-password">
                Confirm Password
              </label>
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirm-password"
                className={`w-full px-3 py-2 border ${errors.confirmPassword ? "border-red-500" : "border-gray-300"
                  } rounded-md focus:outline-none focus:ring focus:ring-green-200`}
                placeholder="Re-enter your password"
                {...register("confirmPassword", {
                  required: "Please confirm your password",
                  validate: (value) =>
                    value === watch("password") || "The passwords do not match",
                })}
              />
              <span
                className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer pt-5"
                onClick={() => setShowConfirmPassword((prev) => !prev)}
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
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
              Already have an account?{" "}
              <span>
                <Link href="/login" className="text-blue-700">
                  Login here
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
