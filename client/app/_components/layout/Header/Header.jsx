"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Raleway, Teko } from "next/font/google";
import { IoBagHandleOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa6";
import logo from "../../../_assets/images/HOTPIZZALOGO.png";
import { categoryEnum } from "@/app/utils/utils";
import { useAppSelector } from "@/app/lib/hooks";
import { useDispatch } from "react-redux";
import { addUserData } from "@/app/lib/features/auth/authSlice";
import { MdDeliveryDining } from "react-icons/md";
import { FaShop } from "react-icons/fa6";

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
  // -------------------------------------HOOKS-------------------------------------------------
  const [selecteditem, setSelectedItem] = useState(null);
  const cart = useAppSelector((state) => state.cart.cartData);
  const dispatch = useDispatch();
  const { userData, isUserLoggedIn } = useAppSelector((state) => state.auth);

  const totalPrice = cart?.reduce((ele, acc) => {
    const price = String(acc?.size).includes("-")
      ? acc?.size?.split("-")
      : acc?.size;
    return ele + Number(price[1] || price);
  }, 0);

  return (
    <div className="bg-white z-10 shadow-lg fixed top-0 w-full py-4">
      <div className="flex justify-around items-center">
        <Link href="/" className="w-[30%] flex justify-center">
          <Image
            src={logo}
            className="bg-white xl:hidden"
            alt="logo"
            width={100}
          />
        </Link>
        <ul className="md:hidden flex justify-end gap-4 items-center w-[70%]">
          {isUserLoggedIn ? (
            <Link href="/profile?tab=1">
              <div className="flex justify-start items-center gap-2 text-black">
                <FaRegUser size={25} />
                {userData?.firstName} {userData?.lastName}
              </div>
            </Link>
          ) : (
            <div className="flex">
              <li className="px-1 md:border-r-2 md:border-red-600 h-[70px] flex items-center text-xs sm:text-sm md:pr-8 md:text-lg">
                <Link href="/signUp">Sign in / Register</Link>
              </li>
            </div>
          )}
          <Link
            href={"/order/cart"}
            className="py-2 px-1 md:border-r-2 md:border-red-600 h-[70px] flex items-center text-xs sm:text-sm md:pr-8 md:text-lg"
          >
            <IoBagHandleOutline />
            <span className="bg-gray-500 rounded-full px-2 mx-2">
              {cart?.length}
            </span>
            <span>£{totalPrice?.toFixed(2)}</span>
          </Link>
        </ul>
      </div>
      <div className="bg-white flex justify-between">
       
        <Link href="/">
          <Image
            src={logo}
            className="bg-white hidden xl:block xl:absolute xl:bottom-0 left-20  top-1/2 -translate-y-1/2"
            alt="logo"
            width={80}
          />
        </Link>
        <ul className="flex items-center justify-around xl:pl-24 text-xl text-white font-semibold w-full lg:w-[90vw] lg:mx-5 lg:ml-20 flex-wrap">
          <Link href={`/menu/deals`}>
            <li
              className={`px-5 trac h-[36px] md:h-[56px] flex items-center text-black transition duration-300 ${selecteditem === -1 ? "bg-red-800 text-white hover:text-white" : "bg-white hover:shadow-[0_4px#991b1b] hover:text-[#991b1b]"
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
                  className={`px-5 trac h-[36px] md:h-[56px] flex items-center text-black transition duration-300 ${selecteditem === idx ? "bg-red-800 text-white hover:text-white" : "bg-white hover:shadow-[0_4px#991b1b] hover:text-[#991b1b]"
                    }`}
                  onClick={() => setSelectedItem(idx)}
                >
                  {data.slice(0, 1)}
                  {data.slice(1, data.length).toLowerCase()}
                </li>
              </Link>
            ))}

{isUserLoggedIn ? (
            <Link href="/profile?tab=1">
              <div className="flex justify-start items-center gap-2 text-black">
                <FaRegUser size={20}  />
                <span className="text-base text-red-800">{userData?.firstName} {userData?.lastName}</span>
              </div>
            </Link>
          ) : (
            <div className="flex ">
              <li className="px-2 font-normal hover:bg-white hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-md hover:text-red-800  text-white bg-red-800  flex items-center text-lg">
                <Link href="/signUp">Login / Signup</Link>
              </li>
            </div>
          )}
          <Link
            href={"/order/cart"}
            className="text-black flex items-center  text-lg"
          >
            <IoBagHandleOutline size={25}/>
            <span className="bg-red-800 text-white rounded-full px-2 mx-2">
              {cart?.length}
            </span>
            <span className="text-red-800">£ {totalPrice?.toFixed(2)}</span>
          </Link>
         
        </ul>
         
        <div className="hidden lg:flex absolute top-full left-[90%] transform -translate-x-1/2  gap-[2px]">
          <a
            href="#"
            className="inline-flex items-center bg-red-800  border-white text-white py-2 px-4 text-lg rounded-b-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:bg-white hover:text-red-800"
          >
            <MdDeliveryDining />
            <span className="ml-2">Delivery</span>
          </a>
          <a
            href="#"
            className="inline-flex items-center bg-red-800  text-white py-2 px-4  text-lg rounded-b-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:bg-white hover:text-red-800"
          >
            <FaShop />
            <span className="ml-2">Collection</span>
          </a>
        </div>
        <div className="lg:hidden mb-2 flex gap-2 justify-center mt-3">
          <a
            href="#"
            className="inline-flex items-center bg-red-800 text-white py-2 px-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:bg-white hover:text-red-800"
          >
            <MdDeliveryDining />
            <span className="ml-2">Delivery</span>
          </a>
          <a
            href="#"
            className="inline-flex items-center bg-red-800 text-white py-2 px-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:bg-white hover:text-red-800"
          >
            <FaShop />
            <span className="ml-2">Collection</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
