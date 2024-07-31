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

const MeatToppings = ({ meatTopData }) => {
  console.log(meatTopData, "meatTopData");
  const { customizationData } = useSelector((state) => state.orderDetails);
  const [defaultMeatDetails, setDefaultMeatDetails] = useState([]);
  const dispatch = useDispatch();
  const defaultSelectedMeat = customizationData?.meatToppingsName;

  useEffect(() => {
    setDefaultMeatDetails(customizationData?.meatToppingsName);
  }, [customizationData]);

  useEffect(() => {
    setSelectedMeat(() => {
      const defaultSelected = {};
      console.log(defaultSelectedMeat, "defaultSelectedMeat");
      defaultMeatDetails?.forEach((meatName) => {
        console.log(meatName, "meatName");
        const meat = meatTopData.find((s) => s.name === meatName);
        console.log(meatTopData, "meatTopData");
        if (meat) {
          defaultSelected[meat._id] = "single";
        }
      });
      console.log(defaultSelected, "defaultSelected");
      return defaultSelected;
    });
  }, [defaultMeatDetails, customizationData, meatTopData]);

  const [selectedMeat, setSelectedMeat] = useState({});

  //   useEffect(() => {
  //     console.log(customizationData?.sauceName, "customizationData?.sauceName");
  //   }, [customizationData]);

  const handleSelectionChange = (meatId, size) => {
    setSelectedMeat((prevSelected) => {
      // Toggle the selection
      if (prevSelected[meatId] === size) {
        const { [meatId]: _, ...rest } = prevSelected;
        return rest;
      } else {
        return {
          ...prevSelected,
          [meatId]: size,
        };
      }
    });
  };

  useEffect(() => {
    console.log(selectedMeat, "selectedVeg");
  }, [selectedMeat]);

  const calculateTotalPrice = () => {
    let total = 0;
    for (const [meatId, size] of Object.entries(selectedMeat)) {
      const meat = meatTopData.find((s) => s._id === meatId);
      if (meat) {
        const price =
          size === "single"
            ? meat.price[0].singlePrice
            : meat.price[0].doublePrice;
        total += price;
      }
    }
    return Number(total.toFixed(2));
  };

  useEffect(() => {
    const total = calculateTotalPrice();
    dispatch(setPrice({ meatPrice: Number(total) }));
  }, [selectedMeat]);

  const handleSave = () => {
    const selectedMeatData = Object.entries(selectedMeat).map(
      ([meatId, size]) => {
        const meat = meatTopData.find((s) => s._id === meatId);
        const price =
          size === "single"
            ? meat.price[0].singlePrice
            : meat.price[0].doublePrice;
        return {
          meatName: meat.name,
          size,
          price,
        };
      }
    );
    dispatch(setToppings({ meat: selectedMeatData }));
    console.log(selectedMeatData, "selectedVegetarianData");
  };
  useEffect(() => {
    handleSave();
  }, [selectedMeat]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Select Your Meat Toppings</h1>
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
          {meatTopData.map((meat) => (
            <tr key={meat._id} className="hover:bg-gray-100">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {meat.name}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <div
                  className={`cursor-pointer px-4 py-2 rounded ${
                    selectedMeat[meat._id] === "single"
                      ? "bg-red-600 text-white"
                      : "bg-gray-200 text-gray-900"
                  }`}
                  onClick={() => handleSelectionChange(meat._id, "single")}
                >
                  £{meat.price[0].singlePrice}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <div
                  className={`cursor-pointer px-4 py-2 rounded ${
                    selectedMeat[meat._id] === "double"
                      ? "bg-yellow-600 text-white"
                      : "bg-gray-200 text-gray-900"
                  }`}
                  onClick={() => handleSelectionChange(meat._id, "double")}
                >
                  £{meat.price[0].doublePrice}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MeatToppings;
