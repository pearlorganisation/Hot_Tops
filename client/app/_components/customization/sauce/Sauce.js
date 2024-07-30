"use client";
import { setPrice } from "@/app/lib/features/cartSlice/cartSlice";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

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
  console.log(sauceData, "sauceData");
  const { customizationData } = useSelector((state) => state.orderDetails);
  const [defaultSauceDetails, setDefaultSauceDetails] = useState([]);
  const dispatch = useDispatch();
  const defaultSelectedSauces = customizationData?.sauceName;

  useEffect(() => {
    setDefaultSauceDetails(customizationData?.sauceName);
  }, [customizationData]);

  useEffect(() => {
    setSelectedSauces(() => {
      const defaultSelected = {};
      console.log(defaultSelectedSauces, "defaultSelectedSauces");
      defaultSauceDetails?.forEach((sauceName) => {
        console.log(sauceName, "sauceName");
        const sauce = sauceData.find((s) => s.name === sauceName);
        console.log(sauceData, "sauceData");
        if (sauce) {
          defaultSelected[sauce._id] = "single";
        }
      });
      console.log(defaultSelected, "defaultSelected");
      return defaultSelected;
    });
  }, [defaultSauceDetails, customizationData, sauceData]);

  const [selectedSauces, setSelectedSauces] = useState({});

  //   useEffect(() => {
  //     console.log(customizationData?.sauceName, "customizationData?.sauceName");
  //   }, [customizationData]);

  const handleSelectionChange = (sauceId, size) => {
    setSelectedSauces((prevSelected) => {
      // Toggle the selection
      if (prevSelected[sauceId] === size) {
        const { [sauceId]: _, ...rest } = prevSelected;
        return rest;
      } else {
        return {
          ...prevSelected,
          [sauceId]: size,
        };
      }
    });
  };

  useEffect(() => {
    console.log(selectedSauces, "selectedSauces");
  }, [selectedSauces]);

  const calculateTotalPrice = () => {
    let total = 0;
    for (const [sauceId, size] of Object.entries(selectedSauces)) {
      const sauce = saucesData.find((s) => s._id === sauceId);
      if (sauce) {
        const price =
          size === "single"
            ? sauce.price[0].singlePrice
            : sauce.price[0].doublePrice;
        total += price;
      }
    }
    return Number(total.toFixed(2));
  };

  useEffect(() => {
    const total = calculateTotalPrice();
    dispatch(setPrice({ saucePrice: total }));
  }, [selectedSauces]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Select Your Sauces</h1>
      <table className="min-w-full divide-y divide-gray-200 shadow-lg">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Sauce
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Single
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Double
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {sauceData.map((sauce) => (
            <tr key={sauce._id} className="hover:bg-gray-100">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {sauce.name}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <div
                  className={`cursor-pointer px-4 py-2 rounded ${
                    selectedSauces[sauce._id] === "single"
                      ? "bg-red-600 text-white"
                      : "bg-gray-200 text-gray-900"
                  }`}
                  onClick={() => handleSelectionChange(sauce._id, "single")}
                >
                  £{sauce.price[0].singlePrice}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <div
                  className={`cursor-pointer px-4 py-2 rounded ${
                    selectedSauces[sauce._id] === "double"
                      ? "bg-yellow-600 text-white"
                      : "bg-gray-200 text-gray-900"
                  }`}
                  onClick={() => handleSelectionChange(sauce._id, "double")}
                >
                  £{sauce.price[0].doublePrice}
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
