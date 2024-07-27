import React from "react";
import { RiTwitterXLine } from "react-icons/ri";
import { SlSocialInstagram } from "react-icons/sl";
import { FiFacebook } from "react-icons/fi";
import Link from "next/link";
const Footer = () => {
  return (
    <div className="h-full bg-red-800 py-4">
      <div className="grid md:grid-cols-3   justify-center   text-white">
        <div>
          <div className="flex flex-col gap-2 items-center">
            <h1 className="font-bold text-lg ">MENU</h1>
            <p className="hover:text-yellow-500 text-sm">
              {" "}
              <a href="/menu/pizzas">Pizza</a>
            </p>
            <p className="hover:text-yellow-500 text-sm">
              {" "}
              <a href="/menu/sides">Sides</a>
            </p>
            <p className="hover:text-yellow-500 text-sm">
              {" "}
              <a href="/menu/drinks">Drinks</a>
            </p>
            <p className="hover:text-yellow-500 text-sm">
              {" "}
              <a href="/menu/desserts">Desserts</a>
            </p>
            <p className="hover:text-yellow-500 text-sm">
              {" "}
              <a href="/menu/dips">Dips</a>
            </p>
          </div>
          <div className="hidden lg:flex justify-center m-3">
            <hr className="border border-white w-[300px] h-[4px]  " />
          </div>
          <div>
            <div className="flex gap-2 justify-center text-sm pt-1 lg:text-base ">
              <p className="hover:hover:text-yellow-500">
                <a href="/menu/deals">
                  Deals <sup className="">*</sup>
                </a>
              </p>
            
            </div>

          
          </div>
        </div>



        <div className="flex   flex-col gap-2 items-center ">
        <div className="lg:hidden flex justify-center  m-4">
            <hr className=" border border-white w-[300px] h-[4px]  " />
          </div>
          <h1 className="font-bold text-lg">SOCIAL LINKS</h1>

          <div className="flex justify-center  items-center gap-3 m-2">
           
            <a href="https://www.facebook.com/HotHousePizzaNorthwood" target="_blank" rel="noopener noreferrer"  className="hover:text-yellow-500">
              <FiFacebook size={24} />
            </a>
            <a href="https://www.instagram.com/hothousepizzanorthwood" target="_blank" rel="noopener noreferrer"  className="hover:text-yellow-500">
              <SlSocialInstagram size={24} />
            </a>
           
          </div>
          
        </div>
        <div className="flex   flex-col gap-2 items-center ">
        <div className="lg:hidden flex justify-center  m-4">
            <hr className="border border-white w-[300px] h-[4px]  " />
          </div>
          <h1 className="font-bold text-lg">POLICIES</h1>

          <p className="hover:text-yellow-500 text-sm cursor-pointer">
            {" "}
            <a href="/termsAndConditions">TERMS & CONDITIONS</a>
          </p>
        
          <p className="hover:text-yellow-500 text-sm cursor-pointer">
            {" "}
            <a href="/refundPolicy">Refund Policy</a>
          </p>
               <div>

        
     
        </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
