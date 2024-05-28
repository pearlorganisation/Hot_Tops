import Image from "next/image";
import Link from "next/link";
import React from "react";
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
            <Link href="">Sign in / Register</Link>
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
        <ul className="flex p-4 justify-around text-white font-semibold w-full  lg:w-[50vw] gap-2 lg:mx-5 flex-wrap">
          <li>
            {" "}
            <Link href={`/menu/deals`}>DEALS</Link>
          </li>
          {Array.isArray(categoryEnum) &&
            categoryEnum.map((data) => {
              return (
                <>
                  <li>
                    <Link href={`/menu/${data?.toLocaleLowerCase()}`}>
                      {data}
                    </Link>
                  </li>
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
