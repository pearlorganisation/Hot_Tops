"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Raleway, Teko } from "next/font/google";
import { IoBagHandleOutline } from "react-icons/io5";
import { FaRegUser, FaShop } from "react-icons/fa6";
import { MdDeliveryDining } from "react-icons/md";
import logo from "../../../_assets/images/HOTPIZZALOGO.png";
import { categoryEnum } from "@/app/utils/utils";
import { useAppSelector } from "@/app/lib/hooks";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-raleway",
});

const teko = Teko({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-teko",
});

const Header = () => {
  const [selecteditem, setSelectedItem] = useState(null);
  const cart = useAppSelector((state) => state.cart.cartData);
  const { userData, isUserLoggedIn } = useAppSelector((state) => state.auth);

  const totalPrice = cart?.reduce((ele, acc) => {
   
    return ele + Number(acc?.price);
  }, 0);

  return (
    <div className="bg-white z-10 shadow-lg fixed top-0 w-full pt-2 md:pt-4 md:py-4">
     {/* // mobile  */}
      <div className="flex justify-between items-center mx-1 md:mx-4">
        <Link href="/" className="flex justify-center">
          <Image
            src={logo}
            className="bg-white xl:hidden"
            alt="logo"
            width={40}
          />
        </Link>
        <ul className="md:hidden flex  gap-4 items-center ">
          {isUserLoggedIn ? (
            <Link href="/profile?tab=1">
              <div className="flex items-center gap-2 text-black">
                <FaRegUser size={19} aria-label="User Profile" />
              <span className="text-red-800 text-sm font-semibold">  {userData?.firstName} {userData?.lastName}</span>
              </div>
            </Link>
          ) : (
            <li className="px-2 py-1 text-white font-semibold bg-red-800 rounded-md flex  items-center text-xs  ">
              <Link href="/signUp" >Sign in / Register</Link>
            </li>
          )}
          <Link
            href={"/order/cart"}
            className="flex items-center text-base"
          >
            <IoBagHandleOutline size={22} aria-label="Cart" />
            <span className="bg-red-800 text-sm text-white rounded-full px-[6px] py-[1px]  mx-2">
              {cart?.length}
            </span>
            <span className="text-red-800 font-semibold "><span className="text-sm">£ </span>{totalPrice?.toFixed(2)}</span>
          </Link>
        </ul>
      </div>

      {/* // desktop */}
      <div className="bg-white flex flex-col md:flex-row justify-between md:items-center  md:px-10">
        <Link href="/" className="hidden xl:flex xl:items-center">
          <Image src={logo} className=" bg-white hidden xl:block xl:absolute xl:bottom-0 left-20  top-1/2 -translate-y-1/2" alt="logo" width={80} />
        </Link>
        <ul className="flex xl:pt-0 flex-wrap items-center justify-around xl:pl-24 text-base sm:text-xl text-white font-semibold w-full lg:w-[90vw] lg:mx-5 lg:ml-20">
          <Link href={`/menu/deals`}>
            <li
              className={`py-2 px-1 mt-2 md:mt-0 md:px-5  md:h-[56px] flex items-center text-black transition duration-300 ${
                selecteditem === -1
                  ? "bg-red-800 text-white hover:text-white"
                  : "bg-white hover:shadow-[0_4px#991b1b] hover:text-[#991b1b]"
              }`}
              onClick={() => setSelectedItem(-1)}
            >
              Deals
            </li>
          </Link>

          {Array.isArray(categoryEnum) &&
            categoryEnum.map((data, idx) => (
              <Link href={`/menu/${data?.toLocaleLowerCase()}`} key={idx}>
                <li
                  className={`px-1 mt-2 md:mt-0 md:px-5 py-2 md:h-[56px] flex items-center text-black transition duration-300 ${
                    selecteditem === idx
                      ? "bg-red-800 text-white hover:text-white"
                      : "bg-white hover:shadow-[0_4px#991b1b] hover:text-[#991b1b]"
                  }`}
                  onClick={() => setSelectedItem(idx)}
                >
                  {data.slice(0, 1)}
                  {data.slice(1, data.length).toLowerCase()}
                </li>
              </Link>
            ))}

          {isUserLoggedIn ? (
            <Link
              href="/profile?tab=1"
              className="hidden ml-10 md:flex items-center gap-2 text-black"
            >
              <FaRegUser size={20} aria-label="User Profile" />
              <span className="text-base text-red-800">
                {userData?.firstName} {userData?.lastName}
              </span>
            </Link>
          ) : (
            <li className="hidden md:flex px-2 font-normal hover:bg-white hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-md hover:text-red-800 text-white bg-red-800 items-center text-lg">
              <Link href="/signUp">Login / Signup</Link>
            </li>
          )}
          <Link
            href={"/order/cart"}
            className="hidden text-black md:flex items-center text-lg"
          >
            <IoBagHandleOutline size={25} aria-label="Cart" />
            <span className="bg-red-800 text-white rounded-full px-2 mx-2">
              {cart?.length}
            </span>
            <span className="text-red-800">£ {totalPrice?.toFixed(2)}</span>
          </Link>
        </ul>
      </div>

      {/* <div className="hidden lg:flex absolute top-full left-[90%] transform -translate-x-1/2 gap-[2px]">
        <a
          href="#"
          className="inline-flex items-center bg-red-800 border-white text-white py-2 px-4 text-lg rounded-b-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:bg-white hover:text-red-800"
        >
          <MdDeliveryDining />
          <span className="ml-2">Delivery</span>
        </a>
        <a
          href="#"
          className="inline-flex items-center bg-red-800 text-white py-2 px-4 text-lg rounded-b-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:bg-white hover:text-red-800"
        >
          <FaShop />
          <span className="ml-2">Collection</span>
        </a>
      </div> */}
      {/* <div className="lg:hidden flex  justify-center ">
        <a
          href="#"
          className="w-1/2  border-r border-r-white justify-center inline-flex items-center bg-red-800 text-white py-2 px-4  shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:bg-white hover:text-red-800"
        >
          <MdDeliveryDining />
          <span className="pl-2">Delivery</span>
        </a>
        <a
          href="#"
          className="w-1/2 inline-flex  justify-center items-center bg-red-800 text-white py-2 px-4  shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:bg-white hover:text-red-800"
        >
          <FaShop />
          <span className="pl-2">Collection</span>
        </a>
      </div> */}
    </div>
  );
};

export default Header;
