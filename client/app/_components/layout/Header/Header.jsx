"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Raleway } from "next/font/google";
import { FaCartShopping } from "react-icons/fa6";
import logo from "../../../_assets/images/logo.png";
import { categoryEnum } from "@/app/utils/utils";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-raleway",
});

const Header = () => {
  // -------------------------------------state-------------------------------------------------
  const [selecteditem, setSelectedItem] = useState(null);
  return (
    <div className=" bg-white z-10 ">
      <div className="flex justify-around items-center">
        <div className="w-[30%] flex justify-center">
          <Image
            src={logo}
            className=" bg-red-200"
            alt="logo"
            width={120}
            height={70}
          />
        </div>
        <ul
          className={`flex justify-around items-center w-[70%] ${raleway.variable} font-Raleway font-[700] `}
        >
          <li className="py-2 px-1 md:border-r-2 md:border-red-600  h-[70px] flex items-center text-xs sm:text-sm md:pr-8 md:text-lg">
            <Link href="/signUp">Sign in / Register</Link>
          </li>
          <li className="py-2 px-1 md:border-r-2 md:border-red-600  h-[70px] flex items-center text-xs sm:text-sm md:pr-8 md:text-lg">
            <Link href="">Select store</Link>
          </li>
          <li className="py-2 px-1 md:border-r-2 md:border-red-600  h-[70px] flex items-center text-xs sm:text-sm md:pr-8 md:text-lg">
            <FaCartShopping />
            <span className="bg-gray-500 rounded-full  px-2 mx-2">0</span>
            <span>₹0.00</span>
          </li>
        </ul>
      </div>
      <div className="bg-red-600">
        <ul className="flex items-center  text-white font-semibold w-full  lg:w-[50vw]  lg:mx-5 lg:ml-20 flex-wrap">
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
