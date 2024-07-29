"use client";
import React, { useEffect, useState } from "react";

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

const SauceSelector = () => {
  const [selectedSauces, setSelectedSauces] = useState({
    "6692599000cad24da6ad78b5": "single",
    "66925a1400cad24da6ad78d5": "single",
  });

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
          {saucesData.map((sauce) => (
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

export default SauceSelector;
