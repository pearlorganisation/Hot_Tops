"use client";
import { setPrice, setToppings } from "@/app/lib/features/cartSlice/cartSlice";
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

const Cheese = ({ cheeseData }) => {
  console.log(cheeseData, "cheeseData");
  const { customizationData } = useSelector((state) => state.orderDetails);
  const [defaultCheeseDetails, setDefaultCheeseDetails] = useState([]);
  const dispatch = useDispatch();
  const defaultSelectedCheeses = customizationData?.cheeseName;

  useEffect(() => {
    setDefaultCheeseDetails(customizationData?.cheeseName);
  }, [customizationData]);

  useEffect(() => {
    setSelectedChees(() => {
      const defaultSelected = {};
      console.log(defaultSelectedCheeses, "defaultSelectedSauces");
      defaultCheeseDetails?.forEach((cheeseName) => {
        console.log(cheeseName, "cheeseName");
        const cheese = cheeseData.find((s) => s.name === cheeseName);
        console.log(cheeseData, "cheeseData");
        if (cheese) {
          defaultSelected[cheese._id] = "single";
        }
      });
      console.log(defaultSelected, "defaultSelected");
      return defaultSelected;
    });
  }, [defaultCheeseDetails, customizationData, cheeseData]);

  const [selectedCheese, setSelectedChees] = useState({});

  //   useEffect(() => {
  //     console.log(customizationData?.sauceName, "customizationData?.sauceName");
  //   }, [customizationData]);

  const handleSelectionChange = (cheeseId, size) => {
    setSelectedChees((prevSelected) => {
      // Toggle the selection
      if (prevSelected[cheeseId] === size) {
        const { [cheeseId]: _, ...rest } = prevSelected;
        return rest;
      } else {
        return {
          ...prevSelected,
          [cheeseId]: size,
        };
      }
    });
  };

  useEffect(() => {
    console.log(selectedCheese, "selectedCheese");
  }, [selectedCheese]);

  const calculateTotalPrice = () => {
    let total = 0;
    for (const [cheeseId, size] of Object.entries(selectedCheese)) {
      const cheese = cheeseData.find((s) => s._id === cheeseId);
      if (cheese) {
        const price =
          size === "single"
            ? cheese.price[0].singlePrice
            : cheese.price[0].doublePrice;
        total += price;
      }
    }
    return Number(total.toFixed(2));
  };

  useEffect(() => {
    const total = calculateTotalPrice();
    dispatch(setPrice({ cheesePrice: Number(total) }));
  }, [selectedCheese]);

  const handleSave = () => {
    const selectedCheeseData = Object.entries(selectedCheese).map(
      ([cheeseId, size]) => {
        const cheese = cheeseData.find((s) => s._id === cheeseId);
        const price =
          size === "single"
            ? cheese.price[0].singlePrice
            : cheese.price[0].doublePrice;
        return {
          cheeseName: cheese.name,
          size,
          price,
        };
      }
    );
    dispatch(setToppings({ cheese: selectedCheeseData }));
    console.log(selectedCheeseData, "selectedCheeseData");
  };

  useEffect(() => {
    handleSave();
  }, [selectedCheese]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Select Your Cheese</h1>
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
          {cheeseData.map((cheese) => (
            <tr key={cheese._id} className="hover:bg-gray-100">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {cheese.name}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <div
                  className={`cursor-pointer px-4 py-2 rounded ${
                    selectedCheese[cheese._id] === "single"
                      ? "bg-red-600 text-white"
                      : "bg-gray-200 text-gray-900"
                  }`}
                  onClick={() => handleSelectionChange(cheese._id, "single")}
                >
                  £{cheese.price[0].singlePrice}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <div
                  className={`cursor-pointer px-4 py-2 rounded ${
                    selectedCheese[cheese._id] === "double"
                      ? "bg-yellow-600 text-white"
                      : "bg-gray-200 text-gray-900"
                  }`}
                  onClick={() => handleSelectionChange(cheese._id, "double")}
                >
                  £{cheese.price[0].doublePrice}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Cheese;
