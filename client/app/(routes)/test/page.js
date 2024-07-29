"use client";
import React, { useState } from "react";

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
    setSelectedSauces((prevSelected) => ({
      ...prevSelected,
      [sauceId]: size,
    }));
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Select Your Sauces</h1>
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
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
            <tr key={sauce._id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {sauce.name}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name={`sauce-${sauce._id}`}
                    value="single"
                    checked={selectedSauces[sauce._id] === "single"}
                    onChange={() => handleSelectionChange(sauce._id, "single")}
                    className="form-radio"
                  />
                  <span className="ml-2 text-red-600">
                    £{sauce.price[0].singlePrice}
                  </span>
                </label>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name={`sauce-${sauce._id}`}
                    value="double"
                    checked={selectedSauces[sauce._id] === "double"}
                    onChange={() => handleSelectionChange(sauce._id, "double")}
                    className="form-radio"
                  />
                  <span className="ml-2 text-yellow-600">
                    £{sauce.price[0].doublePrice}
                  </span>
                </label>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SauceSelector;
