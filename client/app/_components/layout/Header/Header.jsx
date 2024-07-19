"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Raleway, Teko } from "next/font/google";
import { FaCartShopping } from "react-icons/fa6";
import logo from "../../../_assets/images/HOTPIZZALOGO.png";
import { categoryEnum } from "@/app/utils/utils";
import { useAppSelector } from "@/app/lib/hooks";
import { FaRegUserCircle } from "react-icons/fa";
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
    // console.log(typeOf(acc?.size);
    const price = String(acc?.size).includes("-")
      ? acc?.size?.split("-")
      : acc?.size;

    console.log(price);
    return ele + Number(price[1] || price);
  }, 0);

  console.log(totalPrice);

  return (
    <div className=" bg-white z-10 shadow-lg fixed top-0 w-full py-2">
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
          className={`flex justify-end gap-4 items-center w-[70%]  `}
        >
          {isUserLoggedIn ? (
            <Link href="/profile?tab=1">
              <div className="flex justify-start items-center gap-2 text-black">
                {" "}
                <FaRegUserCircle size={25} />
                {userData?.firstName} {userData?.lastName}
              </div>
            </Link>
          ) : (
            <div className="flex">
              <li className=" px-1 md:border-r-2 md:border-red-600   h-[70px] flex items-center text-xs sm:text-sm md:pr-8 md:text-lg">
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
      <div className="bg-white relative">
        <Link href="/">
          <Image
            src={logo}
            className=" bg-white hidden xl:block xl:absolute xl:bottom-0 left-8"
            alt="logo"
            width={140}

          />
        </Link>
        <ul
          className={`flex items-center justify-around xl:pl-24  text-xl  text-white font-semibold w-full lg:w-[90vw]    lg:mx-5 lg:ml-20 flex-wrap`}
        >
          <Link href={`/menu/deals`}>
            <li
              className={`px-5 trac h-[36px] md:h-[56px] flex items-center text-black transition duration-300 ${selecteditem === -1 ? "bg-red-800 text-white hover:text-white" : "bg-white hover:shadow-[0_4px#991b1b] hover:text-[#991b1b]"
              }`}
              onClick={() => setSelectedItem(-1)}
            >
              {" "}
              Deals
            </li>
          </Link>

          {Array.isArray(categoryEnum) &&
            categoryEnum.map((data, idx) => {
              return (
                <>
                  <Link href={`/menu/${data?.toLocaleLowerCase()}`}>
                    <li
                      className={`px-5 trac h-[36px] md:h-[56px] flex items-center text-black transition duration-300 ${selecteditem === idx ? "bg-red-800 text-white hover:text-white" : "bg-white hover:shadow-[0_4px#991b1b] hover:text-[#991b1b]"
                      }`}
                      onClick={() => setSelectedItem(idx)}
                    >
                      {data.slice(0,1)}{data.slice(1,data.length).toLowerCase()}
                    </li>
                  </Link>
                </>
              );
            })}

          <div className="mb-2 ">
            <a
              href=""
              class=" inline-flex text-md font-medium bg-red-800 mt-3 px-4 py-2 border-r border-r-white  items-center  tracking-wide text-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:bg-white hover:text-red-800 "
            >
              <span>
                <MdDeliveryDining />
              </span>
              <span class="ml-2">Delivery </span>
            </a>
            <a
              href=""
              class=" inline-flex text-md font-medium bg-red-800 mt-3  items-center px-4 py-2 shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:bg-white hover:text-red-800 tracking-wide text-white"
            >
              <span>
                <FaShop />
              </span>
              <span class="ml-2">Collection </span>
            </a>
          </div>
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
