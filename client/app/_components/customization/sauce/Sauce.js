"use client";
import { setPrice, setToppings } from "@/app/lib/features/cartSlice/cartSlice";
import { setDefaultPrice } from "@/app/lib/features/orderDetails/orderDetailsslice";
import { Stalemate } from "next/font/google";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";

const saucesData = [
  {
    _id: "6692599000cad24da6ad78b5",
    name: "Manchurian Sauce",
    price: [
      {
        size: "6683c965888a970ed1e08347",
        singlePrice: 0.5,
        doublePrice: 1.0,
        _id: "6692599000cad24da6ad78b8",
      },
    ],
    __v: 0,
  },
  {
    _id: "66925a1400cad24da6ad78d5",
    name: "Piri Piri Sauce",
    price: [
      {
        size: "6683c965888a970ed1e08347",
        singlePrice: 0.5,
        doublePrice: 1.0,
        _id: "66925a1400cad24da6ad78d8",
      },
    ],
    __v: 0,
  },
  {
    _id: "66925a4900cad24da6ad78fe",
    name: "Garlic Sauce",
    price: [
      {
        size: "6683c965888a970ed1e08347",
        singlePrice: 0.5,
        doublePrice: 1.0,
        _id: "66925a4900cad24da6ad7901",
      },
    ],
    __v: 0,
  },
  {
    _id: "66925acb00cad24da6ad796f",
    name: "Tikka Sauce",
    price: [
      {
        size: "6683c965888a970ed1e08347",
        singlePrice: 0.5,
        doublePrice: 1.0,
        _id: "66925acb00cad24da6ad7972",
      },
    ],
    __v: 0,
  },
];

const Sauce = ({ sauceData }) => {
  // console.log(sauceData, "sauceData");
  const { customizationData } = useSelector((state) => state.orderDetails);

  const [defaultSauceDetails, setDefaultSauceDetails] = useState([]);
  const [selectedSauces, setSelectedSauces] = useState({});

  const dispatch = useDispatch();
  const defaultSelectedSauces = customizationData?.sauceName;

  useEffect(() => {
    setDefaultSauceDetails(customizationData?.sauceName);
  }, [customizationData]);

  useEffect(() => {
    setSelectedSauces(() => {
      const defaultSelected = {};
      // console.log(defaultSelectedSauces, "defaultSelectedSauces");
      defaultSauceDetails?.forEach((sauceName) => {
        // console.log(sauceName, "sauceName");
        const sauce = sauceData.find((s) => s.name === sauceName);
        // console.log(sauceData, "sauceData");
        if (sauce) {
          defaultSelected[sauce._id] = "double";
        }
      });
      // console.log(defaultSelected, "defaultSelected");
      return defaultSelected;
    });
  }, [defaultSauceDetails, customizationData, sauceData]);

  const handleSelectionChange = (sauceId, size) => {
    const newSelectedSauces = { ...selectedSauces };

    // If the sauce is already selected, change its size
    if (newSelectedSauces[sauceId]) {
      console.log("i am here... if");
      newSelectedSauces[sauceId] = size;
    } else {
      const maxTop1 = 2;
      const maxTop2 = 4;
      // Check if the limit is reached before adding a new sauce
      console.log("i am here... else");
      // if (maxTop2 <= maxTop1) {
      newSelectedSauces[sauceId] = size;
      // } else {
      //   toast.info("You have reached limit...");
      // }
    }
    setSelectedSauces(newSelectedSauces);
  };

  // useEffect(() => {
  //   dispatch(setDefaultPrice(sauceData));
  // }, [sauceData]);
  console.log;

  const handleSave = () => {
    const selectedSaucesData = Object.entries(selectedSauces).map(
      ([sauceId, size]) => {
        const sauce = sauceData.find((s) => s._id === sauceId);
        const zero = sauceData.some((i, idx) => {
          return i.name === customizationData?.sauceName[idx];
        });
        console.log(zero, "zero");
        const price =
          size === "single"
            ? sauce.price[0].singlePrice
            : sauce.price[0].doublePrice;
        console.log(price, "price:::");
        return {
          sauceName: sauce.name,
          _id: sauce?._id,
          size,
          price,
        };
      }
    );
    dispatch(setToppings({ sauce: selectedSaucesData }));
    // console.log(selectedSaucesData, "selectedSaucesData");
  };

  useEffect(() => {
    handleSave();
  }, [selectedSauces]);

  return (
    <div className="">
      <h1 className="text-lg font-bold my-8">SAUCES</h1>
      <table className="min-w-full divide-y divide-gray-200 shadow-lg">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-2 md:px-6 py-2 md:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wide">
              Sauce
            </th>
            <th className="px-2 md:px-6 py-2 md:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wide">
              Single
            </th>
            <th className="px-2 md:px-6 py-2 md:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wide">
              Double
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {sauceData.map((sauce) => (
            <tr key={sauce._id} className="hover:bg-gray-100">
              <td className="px-2 md:px-6 py-2 md:py-4 whitespace-wrap text-sm font-medium text-gray-900">
                {sauce.name}
              </td>
              <td className="px-2 md:px-6 py-2 md:py-4 whitespace-nowrap text-sm text-gray-500">
                <div
                  className={`cursor-pointer px-2 md:px-4 py-2 rounded text-center ${
                    selectedSauces[sauce._id] === "single"
                      ? "bg-red-800 text-white"
                      : "bg-gray-200 text-gray-900"
                  }`}
                  onClick={() => handleSelectionChange(sauce._id, "single")}
                >
                  £ {sauce.price[0].singlePrice}
                </div>
              </td>
              <td className="px-2 md:px-4 py-2 whitespace-nowrap text-sm text-gray-500">
                <div
                  className={`cursor-pointer px-2 md:px-4 py-2 rounded text-center ${
                    selectedSauces[sauce._id] === "double"
                      ? "bg-green-800 text-white"
                      : "bg-gray-200 text-gray-900"
                  }`}
                  onClick={() => handleSelectionChange(sauce._id, "double")}
                >
                  £ {sauce.price[0].doublePrice}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Sauce;
