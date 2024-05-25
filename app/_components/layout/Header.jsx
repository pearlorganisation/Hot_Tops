import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Raleway } from "next/font/google";

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
            src=""
            className=" bg-red-200"
            alt="logo"
            width={120}
            height={70}
          />
        </div>
        <ul
          className={`flex justify-around items-center w-[70%] ${raleway.variable} font-Raleway font-[700] `}
        >
          <li className="py-2 px-4 md:border-r-2 md:border-red-600  h-[70px] flex items-center text-sm md:pr-8 md:text-lg">
            <Link href="">Sign in / Register</Link>
          </li>
          <li className="py-2 px-4 md:border-r-2 md:border-red-600  h-[70px] flex items-center text-sm md:pr-8 md:text-lg">
            <Link href="">Select store</Link>
          </li>
          <li className="py-2 px-4 md:border-r-2 md:border-red-600  h-[70px] flex items-center text-sm md:pr-8 md:text-lg">
            <Link href="">icon</Link>
          </li>
        </ul>
      </div>
      <div className="bg-red-600">
        <ul className="flex p-4 justify-around text-white font-semibold w-full  lg:w-[50vw] gap-2 lg:mx-5 flex-wrap">
          <li>DEALS</li>
          <li>PIZZAS</li>
          <li>SIDES</li>
          <li>DRINKS</li>
          <li>DESSERTS</li>
          <li>DIPS</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
