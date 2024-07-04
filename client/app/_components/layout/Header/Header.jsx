"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Raleway } from "next/font/google";
import { FaCartShopping } from "react-icons/fa6";
import logo from "../../../_assets/images/HOTPIZZALOGO.png";
import { categoryEnum } from "@/app/utils/utils";
import { useAppSelector } from "@/app/lib/hooks";
import { FaRegUserCircle } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addUserData } from "@/app/lib/features/auth/authSlice";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-raleway",
});

const Header = () => {
  // -------------------------------------HOOKS-------------------------------------------------
  const [selecteditem, setSelectedItem] = useState(null);
  const cart = useAppSelector((state) => state.cart.cartData);
  const dispatch = useDispatch();
  const { userData, isUserLoggedIn } = useAppSelector((state) => state.auth);

  const totalPrice = cart?.reduce((ele, acc) => {
    // console.log(typeOf(acc?.size);
    const price = String(acc?.size).includes("-")
      ? acc?.size?.split("-")
      : acc?.size;

    console.log(price);
    return ele + Number(price[1] || price);
  }, 0);

  console.log(totalPrice);

  return (
    <div className=" bg-white z-10 ">
      <div className="flex justify-around items-center">
        <Link href="/" className="w-[30%] flex justify-center">
          <Image
            src={logo}
            className=" bg-white  xl:hidden "
            alt="logo"
            width={120}
          />
        </Link>
        <ul
          className={`flex justify-end gap-6 items-center w-[70%] ${raleway.variable} font-Raleway font-[700] `}
        >
          {isUserLoggedIn ? (
            <Link href="/profile?tab=1">
              <div className="flex justify-start items-center gap-2">
                {" "}
                <FaRegUserCircle size={25} />
                {userData?.firstName} {userData?.lastName}
              </div>
            </Link>
          ) : (
            <div className="flex">
              <li className="py-2 px-1 md:border-r-2 md:border-red-600  h-[70px] flex items-center text-xs sm:text-sm md:pr-8 md:text-lg">
                <Link href="/signUp">Sign in / Register</Link>
              </li>
            </div>
          )}
          {/* <li className="py-2 px-1 md:border-r-2 md:border-red-600  h-[70px] flex items-center text-xs sm:text-sm md:pr-8 md:text-lg">
            <Link href="">Select store</Link>
          </li> */}
          <Link
            href={"/order/cart"}
            className="py-2 px-1 md:border-r-2 md:border-red-600  h-[70px] flex items-center text-xs sm:text-sm md:pr-8 md:text-lg"
          >
            <FaCartShopping />
            <span className="bg-gray-500 rounded-full  px-2 mx-2">
              {cart?.length}
            </span>
            <span>£{totalPrice?.toFixed(2)}</span>
          </Link>
        </ul>
      </div>
      <div className="bg-red-600 relative">
        <Link href="/">
          <Image
            src={logo}
            className=" bg-white hidden xl:block xl:absolute xl:bottom-0 left-8"
            alt="logo"
            width={150}
          />
        </Link>
        <ul className="flex items-center xl:pl-24  text-white font-semibold w-full  lg:w-[50vw]  lg:mx-5 lg:ml-20 flex-wrap">
          <Link href={`/menu/deals`}>
            <li
              className={`px-5 hover:bg-[#337ab7] h-[36px] md:h-[56px] flex items-center ${
                selecteditem === -1 ? "bg-blue-600" : "bg-red-600"
              }`}
              onClick={() => setSelectedItem(-1)}
            >
              {" "}
              DEALS
            </li>
          </Link>
          {Array.isArray(categoryEnum) &&
            categoryEnum.map((data, idx) => {
              return (
                <>
                  <Link href={`/menu/${data?.toLocaleLowerCase()}`}>
                    <li
                      className={`hover:bg-[#337ab7] h-[36px] md:h-[56px]  px-5 flex items-center ${
                        selecteditem === idx ? "bg-blue-600" : "bg-red-600"
                      }`}
                      onClick={() => setSelectedItem(idx)}
                    >
                      {data}
                    </li>
                  </Link>
                </>
              );
            })}

          {/* <li>SIDES</li>
          <li>DRINKS</li>
          <li>DESSERTS</li>
          <li>DIPS</li> */}
        </ul>
      </div>
    </div>
  );
};

export default Header;
