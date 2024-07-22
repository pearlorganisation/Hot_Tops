import React from "react";
import { RiTwitterXLine } from "react-icons/ri";
import { SlSocialInstagram } from "react-icons/sl";
import { FiFacebook } from "react-icons/fi";
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
          <div className="flex justify-center  m-4">
            <hr className="border border-white w-[300px] h-[4px]  " />
          </div>
          <div>
            <div className="flex  gap-2 justify-center ">
              <p className="hover:hover:text-yellow-500">
                <a href="#">
                  Deals <sup>*</sup>
                </a>
              </p>
              <p className="hover:hover:text-yellow-500">
                <a href="#">Reorder now</a>
              </p>
            </div>

            <div className=" flex flex-col items-center gap-4 m-2 justify-center">
              <h1 className="font-bold">MY ACCOUNT</h1>
              <p>
                <a href="#">Sign In</a>/ <a href="#">Register</a>
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="flex flex-col gap-2 items-center">
            <h1 className="font-bold text-lg">About</h1>
            <p className="hover:text-yellow-500 text-sm">
              {" "}
              <a href="#">OUR STORY</a>
            </p>
            <p className="hover:text-yellow-500 text-sm">
              {" "}
              <a href="#">BECOME A FRANCHISE</a>
            </p>
            <p className="hover:text-yellow-500 text-sm">
              {" "}
              <a href="#">HEAD OFFICE</a>
            </p>
            <p className="hover:text-yellow-500 text-sm">
              {" "}
              <a href="#">List Of Stores</a>
            </p>
            <p className="hover:text-yellow-500 text-sm">
              {" "}
              <a href="#">Mobile Apps</a>
            </p>
          </div>
          <div className="flex justify-center m-4">
            <hr className="border border-white w-[300px] h-[4px] " />
          </div>
          <div className="flex justify-center  items-center gap-3 m-2">
            <p className="hover:text-yellow-500">
              <RiTwitterXLine size={24} />
            </p>
            <p className="hover:text-yellow-500">
              <FiFacebook size={24} />
            </p>
            <p className="hover:text-yellow-500">
              <SlSocialInstagram size={24} />
            </p>
          </div>
        </div>

        <div className="flex   flex-col gap-2 items-center ">
          <h1 className="font-bold text-lg">POLICIES</h1>

          <p className="hover:text-yellow-500 text-sm cursor-pointer">
            {" "}
            <a href="#"></a>TERMS & CONDITIONS
          </p>
          {/* <p className="hover:text-yellow-500 text-sm">
            {" "}
            <a href="#"></a>ALLERGEN INFORMATION
          </p>
          <p className="hover:text-yellow-500 text-sm">
            {" "}
            <a href="#"></a>BETTER CHICKEN
          </p> */}
          <p className="hover:text-yellow-500 text-sm cursor-pointer">
            {" "}
            <a href="#"></a>Privacy Policy
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
